interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link: string;
}
export const cases: CaseStudy[] = [
  {
    image:
      "/img/portfolio/0c7fd31b0bbe5f0e3736693f4a6fff62758509f7bd7d4f3f0b90eb920ae31654-1x.webp",
    title: "Quality Management System Compliant with FDA and ISO",
    description:
      "Modernization of B2B SaaS solution to check compliance with the FDA and conformance to ISO for medical devices’ production, and MDSAP for device manufacturing",
    link: "/portfolio/qm-system",
  },
  {
    image:
      "/img/portfolio/38512bd732d215412cdba3bd0c3308fa414863e52f55c27b041701013697dfd2-1x.webp",
    title: "Property Investment Platform with Advisor Portal",
    description:
      "A digital solution for real estate development investment and loan management. The system is compliant with KYC/AML and a Financial Conduct Authority #722801",
    link: "/portfolio/ecosystem-integration",
  },
  {
    image:
      "/img/portfolio/592859e354ffa07ba1c01bab17d1671dc22d9988df1b5c07d84e64c2161b7d2c-1x.webp",
    title: "Telemedicine System with Appointment Scheduling",
    description:
      "Solution for delivery of remote healthcare services with RBAC control that meets the requirements of medical regulations (MHRA and CQC) and GDPR rules for personal data usage",
    link: "/portfolio/blockchain-wallet",
  },
  {
    image:
      "/img/portfolio/c3515cf68ea9bfa97f586fbc91a84d85b213157a9b883e87e82ee1d5ccd6dd01-1x.webp",
    title: "Digital Hub of Free Drinks in Pubs With Location Tracking",
    description:
      "Cross-platform solution with daily propositions of free drinks based on user location. The app includes a subscription module, early access features, and an Admin panel",
    link: "/portfolio/mobile-banking-app",
  },
];

interface Service {
  title: string;
  description: string;
  icon: string;
  keywords: string[];
}
export const servicesData: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "Our mobile developers use well-proven agile practices and follow a client-oriented approach to develop custom mobile apps  that highlight your brand identity, bring customers, and solve everyday business challenges.",
    icon: "/img/services/mobile-dev.svg", 
    keywords: ["iOS app development", "Android app development", "React Native app development", "Flutter app development"],
  },
  {
    title: "Web App Development",
    description:
      "We’ve gained our experience in building web applications through cooperating with companies that follow various business models and operate in various business domains like FinTech and e-Commerce.",
    icon: "/img/services/web-dev.svg",
    keywords: ["PWA development", "Website and web app creation", "Responsive design"],
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design team’s expertise and creativity will help you get the product you’ve pictured. We rely on established standards, proven tools and deep understanding of your business goals while designing your product.",
    icon: "/img/services/ui-ux.svg",
    keywords: ["Wireframing and prototyping", "UX consulting", "Product design"],
  },
  {
    title: "QA Services",
    description:
      "We run manual and automated tests and use different approaches during the entire development life-cycle to eliminate problems and bugs, enhance performance, and improve business logic and design.",
    icon: "/img/services/qa.svg",
    keywords: ["Software testing", "Functional testing", "Non-functional testing"],
  },
  {
    title: "DevOps Services",
    description:
      "Bring new code and features to your products painlessly with our experienced DevOps engineers. We’ll help you reduce time to market without sacrificing reliability, security, and compliance.",
    icon: "/img/services/devops.svg",
    keywords: ["Cloud Infrastructure services", "CI/CD services", "Cloud cost optimization"],
  },
  {
    title: "Startup Services",
    description:
      "Bring new code and features to your products painlessly with our experienced DevOps engineers. We’ll help you reduce time to market without sacrificing reliability, security, and compliance.",
    icon: "/img/services/startup.svg",
    keywords: ["Discovery phase", "MVP development", "CTO as a service"],
  },
];