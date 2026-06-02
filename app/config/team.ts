export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    slug: "marat",
    name: "Marat U.",
    role: "Founder & CEO",
    photo: "/img/team/founder.jpg",
  },
  {
    slug: "lead-engineer",
    name: "Daniil P.",
    role: "Lead Engineer",
    photo: "/img/team/lead-engineer.jpg",
  },
  {
    slug: "design-lead",
    name: "Irina V.",
    role: "Design Lead",
    photo: "/img/team/design-lead.jpg",
  },
  {
    slug: "devops-lead",
    name: "Sergey M.",
    role: "DevOps & Cloud Lead",
    photo: "/img/team/devops-lead.jpg",
  },
  {
    slug: "ai-lead",
    name: "Rustam A.",
    role: "AI / ML Engineer",
    photo: "/img/team/ai-lead.jpg",
  },
];

export interface OfficeLocation {
  slug: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}

export const locations: OfficeLocation[] = [
  {
    slug: "riyadh",
    country: "Saudi Arabia",
    city: "Riyadh",
    address: "King Fahd Road, Riyadh",
    // TODO (PM): confirm Riyadh office phone + email
    phone: "+966 00 000 0000",
    email: "ksa@ecitech.online",
  },
  {
    slug: "moscow",
    country: "Russia",
    city: "Moscow",
    address: "Presnenskaya nab., Moscow",
    // TODO (PM): confirm Moscow office phone + email
    phone: "+7 000 000 00 00",
    email: "ru@ecitech.online",
  },
];

export interface CompanyStat {
  value: string;
  label: string;
}

export const stats: CompanyStat[] = [
  { value: "10+", label: "Enterprise clients" },
  { value: "9+", label: "Years of team experience" },
  { value: "6", label: "Industries served" },
  { value: "5", label: "Countries delivered to" },
];

export interface CompanyValue {
  title: string;
  description: string;
}

export const values: CompanyValue[] = [
  {
    title: "Founder-led delivery",
    description:
      "You work directly with the founder and senior engineers \u2014 no account managers, no layers, no juniors learning on your budget.",
  },
  {
    title: "Enterprise track record",
    description:
      "Our team has delivered for BCG, Juniper Networks, Cisco, and Automation Anywhere. We bring that discipline to every engagement.",
  },
  {
    title: "Weekly demos",
    description:
      "You see working software every week from day one. No quarterly surprises, no waterfall reveals.",
  },
  {
    title: "Full-cycle ownership",
    description:
      "From discovery and design to deployment and support \u2014 one team owns the entire product lifecycle.",
  },
];
