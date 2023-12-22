export const routes = {
  home: {
    ariaLabel: "Homepage",
    name: "home",
    path: "",
    ui: "HOME",
    seo: {
      title: "Chamaeleon | Wholistic Investments",
      description: "We are an early-stage VC firm based in Silicon Valley, investing globally.",
    },
  },
  manifestoAndValues: {
    ariaLabel: "Our Manifesto and Values",
    name: "manifesto-and-values",
    path: "manifesto-and-values",
    ui: "MANIFESTO & VALUES",
    seo: {
      title: "Chamaeleon | Manifesto & Values",
      description:
        "Chamaeleon is a new early-stage venture capital firm that brings together partners that have long collaborated as investors, operators and entrepreneurs that will focus on investing in truly transformative companies.",
    },
  },
  team: {
    ariaLabel: "Our Team",
    name: "team",
    path: "team",
    ui: "TEAM",
    seo: {
      title: "Chamaeleon | Team",
      description: "We are an early-stage VC firm based in Silicon Valley, investing globally.",
    },
  },
  approach: {
    ariaLabel: "Our Approach",
    name: "approach",
    path: "approach",
    ui: "APPROACH",
    seo: {
      title: "Chamaeleon | Approach",
      description: "Start-ups are changing. It's time for venture capitals to change.",
    },
  },
  superpower: {
    ariaLabel: "Our Superpower: Mantis",
    name: "superpower",
    path: "superpower",
    ui: "SUPERPOWER",
    seo: {
      title: "Chamaeleon | Superpower",
      description:
        "Chamaeleon's investment strategy is powered by our proprietary AI and quantitative engine, which analyzes millions of companies across thousands of data points.",
    },
  },
  portfolio: {
    ariaLabel: "Our Portfolio",
    name: "portfolio",
    path: "portfolio",
    ui: "PORTFOLIO",
    seo: {
      title: "Chamaeleon | Portfolio",
      description: "Our current and past investments.",
    },
  },
  kin: {
    ariaLabel: "Kin",
    name: "kin",
    path: "kin",
    ui: "KIN",
    seo: {
      title: "Chamaeleon | Kin",
      description:
        "We partner with exceptional individuals who share our values, have worked with us, or have done business alongside us.",
    },
  },
  newsAndEvents: {
    ariaLabel: "News and Events",
    name: "news-and-events",
    path: "news-and-events",
    ui: "NEWS & EVENTS",
    seo: {
      title: "Chamaeleon | News & Events",
      description: "Where every gathering becomes a memorable experience.",
    },
  },
  contact: {
    ariaLabel: "Contact Us",
    name: "contact",
    path: "contact",
    ui: "CONTACT US",
    seo: {
      title: "Chamaeleon | Contact",
      description: "Want to reach out? Pop us a message.",
    },
  },
}

export enum PageTransitionPhase {
  IDLE = "IDLE",
  APPEAR = "APPEAR",
  IN = "IN",
  OUT = "OUT",
}
