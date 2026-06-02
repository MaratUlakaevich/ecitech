export interface Industry {
  slug: "ai" | "fintech" | "enterprise" | "ecommerce" | "realestate" | "edtech";
  name: string;
  icon: string;
  valueProp: string;
  whatWeBuild: string[];
}

export const industries: Industry[] = [
  {
    slug: "ai",
    name: "AI & Automation",
    icon: "/img/industries/ai.svg",
    valueProp:
      "From LLM platforms to RPA dashboards \u2014 we build AI solutions that turn data into decisions. Delivered for BCG Gamma and Automation Anywhere.",
    whatWeBuild: [
      "Enterprise AI platforms with on-premise and cloud LLM deployment",
      "Automation dashboards with per-department ROI tracking",
      "AI-powered cloud cost management and anomaly detection",
    ],
  },
  {
    slug: "fintech",
    name: "Fintech & Blockchain",
    icon: "/img/industries/fintech.svg",
    valueProp:
      "Tokenized investment platforms, DeFi applications, and payment infrastructure \u2014 built for scale and transparency.",
    whatWeBuild: [
      "Blockchain-based investment platforms with tokenized assets",
      "Payment processing and transaction infrastructure",
      "KYC/AML onboarding and investor portals",
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise Software",
    icon: "/img/industries/enterprise.svg",
    valueProp:
      "Internal platforms and process automation for teams that have outgrown spreadsheets and legacy tools. Delivered for Juniper Networks and Cisco.",
    whatWeBuild: [
      "Internal automation tools that replace weeks of manual work",
      "Digital sales management and CRM systems",
      "Data pipelines, dashboards, and workflow engines",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce & Retail",
    icon: "/img/industries/ecommerce.svg",
    valueProp:
      "Full-stack commerce platforms with premium mobile apps, real-time logistics, and centralized business management.",
    whatWeBuild: [
      "Cross-platform mobile apps with premium design systems",
      "Real-time inventory sync and multi-location logistics",
      "Admin dashboards for catalog, orders, and analytics",
    ],
  },
  {
    slug: "realestate",
    name: "Real Estate & PropTech",
    icon: "/img/industries/realestate.svg",
    valueProp:
      "Digital management platforms for real estate \u2014 from building plan processing to project management at scale.",
    whatWeBuild: [
      "Project and order management platforms at scale",
      "CAD integration and automated floor plan validation",
      "Property investment and tokenization platforms",
    ],
  },
  {
    slug: "edtech",
    name: "EdTech",
    icon: "/img/industries/edtech.svg",
    valueProp:
      "Learning ecosystems that combine LMS, career hubs, and community features \u2014 from pilot to production.",
    whatWeBuild: [
      "Learning management systems with hands-on bootcamps",
      "Career hubs with job boards and freelance marketplaces",
      "Community platforms with gamification and mentorship",
    ],
  },
];
