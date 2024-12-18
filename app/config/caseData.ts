interface CaseStudy {
  image: string;
  title: string;
  description: string;
  link: string;
}
// take the real images from the /public/img/portfolio folder. AI!
export const cases: CaseStudy[] = [
  {
    image: "/img/portfolio/peopleAI.webp",
    title: "AI-Powered Analytics",
    description: "A powerful analytics platform leveraging AI to uncover business insights.",
    link: "/portfolio/ai-powered-analytics",
  },
  {
    image: "/img/portfolio/case2.webp",
    title: "Ecosystem Integration",
    description: "A comprehensive ecosystem for seamless integration of services.",
    link: "/portfolio/ecosystem-integration",
  },
  {
    image: "/img/portfolio/case3.webp",
    title: "Blockchain Wallet",
    description: "A secure blockchain wallet with real-time transactions and analytics.",
    link: "/portfolio/blockchain-wallet",
  },
];


