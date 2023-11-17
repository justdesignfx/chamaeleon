export interface ICompanyBox {
  img: string
  url: string
}

export const companyBox: ICompanyBox = {
  img: "/img/beepro.png",
  url: "#",
}

export interface ICardPerson {
  description: string
  media: Media
  name: string
  title: string
  linkedin: string
}

// export const cardPerson: ICardPerson = {
//   desc: "Entrepreneur, operator, investor… nerd. Over 25 years experience in Silicon Valley, US, Europe and Asia-Pacific. Formerly, founder and managing partner at Strive Capital, first ever early-stage VC quant firm and fund in the Bay area and in the US, and senior expert and member of Asia-Pacific TMT leadership team at McKinsey & Co. Focuses on Consumer Software, Consumer Hardware and Horizontal SaaS, e.g. Gusto, Rubrik, App Annie, Enish (IPO), Virta Health, DraftKings (IPO), RobinHood (IPO), among others. Co-founder and co-host of decipheredshow.com and the creator of the “Rejection & Adversity as a path to Growth” methodology (bit.ly/3badkvb). Nuno has served as a board member, advisor and coach to various start-ups, large enterprises and non-profits in the US, Europe and Asia.",
//   img: "/img/nonu.png",
//   name: "NUNO GONÇALVES PEDRO",
//   role: "Managing Partner",
//   linkedin: "/",
//   // social: {
//   //   icon: "/img/icon-linkedin.svg",
//   //   url: "#",
//   // },
// }

// export const cardPerson2: ICardPerson = {
//   desc: "Entrepreneur, operator, investor… nerd. Over 25 years experience in Silicon Valley, US, Europe and Asia-Pacific. Formerly, founder and managing partner at Strive Capital, first ever early-stage VC quant firm and fund in the Bay area and in the US, and senior expert and member of Asia-Pacific TMT leadership team at McKinsey & Co. Focuses on Consumer Software, Consumer Hardware and Horizontal SaaS, e.g. Gusto, Rubrik, App Annie, Enish (IPO), Virta Health, DraftKings (IPO), RobinHood (IPO), among others. Co-founder and co-host of decipheredshow.com and the creator of the “Rejection & Adversity as a path to Growth” methodology (bit.ly/3badkvb). Nuno has served as a board member, advisor and coach to various start-ups, large enterprises and non-profits in the US, Europe and Asia.",
//   img: "/img/nonu.png",
//   name: "NUNO GONÇALVES PEDRO 2",
//   role: "Managing Partner",
//   linkedin: "/",
//   // social: {
//   //   icon: "/img/icon-linkedin.svg",
//   //   url: "#",
//   // },
// }

// export const cardPerson3: ICardPerson = {
//   desc: "Entrepreneur, operator, investor… nerd. Over 25 years experience in Silicon Valley, US, Europe and Asia-Pacific. Formerly, founder and managing partner at Strive Capital, first ever early-stage VC quant firm and fund in the Bay area and in the US, and senior expert and member of Asia-Pacific TMT leadership team at McKinsey & Co. Focuses on Consumer Software, Consumer Hardware and Horizontal SaaS, e.g. Gusto, Rubrik, App Annie, Enish (IPO), Virta Health, DraftKings (IPO), RobinHood (IPO), among others. Co-founder and co-host of decipheredshow.com and the creator of the “Rejection & Adversity as a path to Growth” methodology (bit.ly/3badkvb). Nuno has served as a board member, advisor and coach to various start-ups, large enterprises and non-profits in the US, Europe and Asia.",
//   img: "/img/nonu.png",
//   name: "NUNO GONÇALVES PEDRO 3",
//   role: "Managing Partner",
//   linkedin: "/",
//   // social: {
//   //   icon: "/img/icon-linkedin.svg",
//   //   url: "#",
//   // },
// }

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
  contact: {
    name: "contact",
    path: "contact",
    ui: "CONTACT US",
  },
}
