// FAQ data for ECITech. Also suitable as the source for Schema.org FAQPage JSON-LD.
// Keep answers plain-text friendly where possible so Stream H can reuse `answer` verbatim.
// `answerHtml` (optional) is used by FaqSection for richer rendering via html-react-parser.

export interface Faq {
  question: string;
  /** Plain-text answer, safe for JSON-LD / previews. */
  answer: string;
  /** Optional HTML version rendered in the UI. Falls back to `answer`. */
  answerHtml?: string;
}

export const faqs: Faq[] = [
  {
    question: "How does ECITech pricing work, and what are typical ranges?",
    answer:
      "We work on time-and-materials and fixed-scope engagements. Typical MVPs land in the $30k–$90k range, while ongoing product teams run $12k–$25k per engineer per month depending on seniority and stack. We share a detailed estimate after a free discovery call.",
    answerHtml: `We work on <strong>time-and-materials</strong> and <strong>fixed-scope</strong> engagements. Typical MVPs land in the <strong>$30k–$90k</strong> range, while ongoing product teams run <strong>$12k–$25k per engineer per month</strong> depending on seniority and stack. We share a detailed estimate after a free discovery call.`,
  },
  {
    question: "Who owns the intellectual property and source code?",
    answer:
      "You do. All IP, source code, and design assets are assigned to the client on delivery under a work-for-hire clause in the MSA. We retain no rights beyond a mutually agreed portfolio reference, which you can veto at any time.",
    answerHtml: `You do. All IP, source code, and design assets are assigned to the client on delivery under a <strong>work-for-hire</strong> clause in the MSA. We retain no rights beyond a mutually agreed portfolio reference, which you can veto at any time.`,
  },
  {
    question: "Do you sign NDAs, and how quickly can we have one in place?",
    answer:
      "Yes. We sign mutual NDAs as standard practice and can usually turn one around within 24 hours. If you have your own template, we are happy to start from it rather than insist on ours.",
  },
  {
    question: "What are typical project timelines and MVP turnaround?",
    answer:
      "A focused MVP usually ships in 8–12 weeks from kickoff. Mid-size platforms run 4–6 months, and long-term product engagements continue in two-week sprints. We commit to dates only after a short discovery phase so estimates are grounded in real scope.",
    answerHtml: `A focused MVP usually ships in <strong>8–12 weeks</strong> from kickoff. Mid-size platforms run 4–6 months, and long-term product engagements continue in two-week sprints. We commit to dates only after a short discovery phase so estimates are grounded in real scope.`,
  },
  {
    question: "What is your SLA for response times and support hours?",
    answer:
      "During active engagements, we respond to messages within 4 business hours on weekdays, with a 1-hour response target for P1 incidents. Support hours default to 9:00–19:00 client-local time; 24/7 on-call coverage is available on dedicated support plans.",
    answerHtml: `During active engagements, we respond to messages within <strong>4 business hours</strong> on weekdays, with a <strong>1-hour response target for P1 incidents</strong>. Support hours default to 9:00–19:00 client-local time; 24/7 on-call coverage is available on dedicated support plans.`,
  },
  {
    question: "How do you scale a 2-engineer pilot into a full team?",
    answer:
      "We start most engagements with a small pilot — typically a tech lead plus one senior engineer — to validate fit and establish delivery cadence. From there we can add engineers, designers, QA, and DevOps in one-week increments, with each new member onboarded via a written handbook and shadowed for the first sprint.",
  },
  {
    question: "What does post-launch support and maintenance look like?",
    answer:
      "After launch we offer three support tiers: break-fix (incidents only), care plan (incidents plus minor enhancements), and dedicated team (continuous product development). All tiers include monitoring, security patching, and a named engineer who knows your codebase.",
    answerHtml: `After launch we offer three support tiers: <strong>break-fix</strong> (incidents only), <strong>care plan</strong> (incidents plus minor enhancements), and <strong>dedicated team</strong> (continuous product development). All tiers include monitoring, security patching, and a named engineer who knows your codebase.`,
  },
  {
    question: "How do you handle data privacy and security requirements?",
    answer:
      "We build with security in mind from day one: role-based access controls, audit logging, encrypted data at rest and in transit, and documented testing procedures. For GDPR-sensitive projects we cover DPA, data minimization, and right-to-erasure flows. Our team has delivered secure production systems for enterprises like BCG, Cisco, and Juniper Networks.",
  },
  {
    question: "Which technologies and stacks do you specialize in?",
    answer:
      "Core web stack is TypeScript with Next.js, Node.js, and Python; mobile is React Native and native Swift/Kotlin when required. We run production workloads on AWS, GCP, and Vercel, and regularly integrate AI features via the OpenAI and Anthropic APIs.",
  },
  {
    question: "Can you take over a legacy codebase from another vendor?",
    answer:
      "Yes — code takeovers are a common starting point for us. We run a one- to two-week audit to map architecture, risks, and quick wins, then present a stabilization and roadmap plan before writing a single line of new code.",
  },
];
