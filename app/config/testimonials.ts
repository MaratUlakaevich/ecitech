export interface Testimonial {
  slug: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  avatar: string;
  industry?: string;
}

export const testimonials: Testimonial[] = [
  {
    slug: "kabema-cto",
    quote:
      "ECITech\u2019s team integrated seamlessly with our internal processes. The digital sales management system they built for our JobRouter platform is now central to how our dealerships operate day to day.",
    authorName: "Thomas B.",
    authorRole: "CTO",
    company: "Kabema Gruppe",
    avatar: "/img/testimonials/thomas-b.jpg",
    industry: "Automotive IT",
  },
  {
    slug: "relate-founder",
    quote:
      "They took our vision for a full IT ecosystem \u2014 learning, careers, community, and startup incubator \u2014 and shipped a production platform in weeks, not months. Pragmatic, fast, and genuinely invested.",
    authorName: "Amara D.",
    authorRole: "Founder",
    company: "Relate",
    avatar: "/img/testimonials/amara-d.jpg",
    industry: "EdTech",
  },
  {
    slug: "1000hands-pm",
    quote:
      "Processing 75,000+ building plans a year requires precision. ECITech built the CAD integration and validation pipeline that made it possible to scale without adding headcount.",
    authorName: "Stefan H.",
    authorRole: "Head of Product",
    company: "1000Hands AG",
    avatar: "/img/testimonials/stefan-h.jpg",
    industry: "Real Estate",
  },
  {
    slug: "flora-ceo",
    quote:
      "The mobile app they delivered set a new standard for our brand. Real-time logistics, beautiful design, and a management dashboard that gives us full visibility into operations.",
    authorName: "Lena K.",
    authorRole: "CEO",
    company: "Flora",
    avatar: "/img/testimonials/lena-k.jpg",
    industry: "E-commerce",
  },
];
