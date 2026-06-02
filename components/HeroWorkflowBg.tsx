import type { FC } from "react";

/**
 * Hero background workflow — n8n-style architectural illustration.
 *
 * Six rounded-rect nodes representing a real lead-intake AI workflow
 * (WhatsApp + Portal → AI AGENT → Calendar / CRM / Telegram) connected
 * by curved bezier paths. Copper pulse dots travel along the edges,
 * the AGENT node breathes, and the whole composition fades top + bottom
 * via mask-image so it feels embedded rather than pasted on.
 *
 * Animations are CSS-driven (see globals.css `.hero-workflow` block).
 * Stagger order: nodes (0.3–1.7s) → edges (1.0–2.6s) → pulses (3.2s+).
 */
const HeroWorkflowBg: FC = () => {
  return (
    <svg
      className="hero-workflow"
      viewBox="0 0 1400 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Reusable connection paths — also referenced by pulse dot motion */}
        <path id="wf-path-1" d="M 270 230 C 430 230, 430 310, 600 310" />
        <path id="wf-path-2" d="M 270 390 C 430 390, 430 310, 600 310" />
        <path id="wf-path-3" d="M 780 310 C 805 310, 805 170, 830 170" />
        <path id="wf-path-4" d="M 780 310 C 805 310, 805 450, 830 450" />
        <path id="wf-path-5" d="M 1010 450 L 1150 450" />
      </defs>

      {/* Connection edges (drawn behind nodes) */}
      <g className="wf-edges">
        <use href="#wf-path-1" className="wf-edge we1" />
        <use href="#wf-path-2" className="wf-edge we2" />
        <use href="#wf-path-3" className="wf-edge we3" />
        <use href="#wf-path-4" className="wf-edge we4" />
        <use href="#wf-path-5" className="wf-edge we5" />
      </g>

      {/* Nodes */}
      <g className="wf-nodes">
        {/* 1. WhatsApp trigger */}
        <g transform="translate(90 196)" className="wf-node">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title">WHATSAPP</text>
          <text x="20" y="50" className="wf-sub">intake</text>
        </g>

        {/* 2. Portal trigger */}
        <g transform="translate(90 356)" className="wf-node">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title">PORTAL</text>
          <text x="20" y="50" className="wf-sub">bayut · pf</text>
        </g>

        {/* 3. AI AGENT — primary, off-set right to clear hero H1 */}
        <g transform="translate(600 276)" className="wf-node wf-node-primary">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title wf-title-primary">AI AGENT</text>
          <text x="20" y="50" className="wf-sub">claude · tools</text>
        </g>

        {/* 4. Calendar output */}
        <g transform="translate(830 136)" className="wf-node">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title">CALENDAR</text>
          <text x="20" y="50" className="wf-sub">cal.com</text>
        </g>

        {/* 5. CRM output */}
        <g transform="translate(830 416)" className="wf-node">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title">NOTION CRM</text>
          <text x="20" y="50" className="wf-sub">record</text>
        </g>

        {/* 6. Telegram notify */}
        <g transform="translate(1150 416)" className="wf-node">
          <rect width="180" height="68" rx="6" className="wf-rect" />
          <rect width="5" height="68" className="wf-accent" />
          <text x="20" y="28" className="wf-title">TELEGRAM</text>
          <text x="20" y="50" className="wf-sub">handoff</text>
        </g>
      </g>

      {/* Pulse dots flowing through the system — animateMotion follows the defs paths */}
      <circle className="wf-pulse wp1" r="4">
        <animateMotion dur="3.5s" begin="3.2s" repeatCount="indefinite">
          <mpath href="#wf-path-1" />
        </animateMotion>
      </circle>
      <circle className="wf-pulse wp2" r="4">
        <animateMotion dur="3.8s" begin="4.0s" repeatCount="indefinite">
          <mpath href="#wf-path-2" />
        </animateMotion>
      </circle>
      <circle className="wf-pulse wp3" r="4">
        <animateMotion dur="3.2s" begin="4.8s" repeatCount="indefinite">
          <mpath href="#wf-path-3" />
        </animateMotion>
      </circle>
      <circle className="wf-pulse wp4" r="4">
        <animateMotion dur="3.4s" begin="5.4s" repeatCount="indefinite">
          <mpath href="#wf-path-4" />
        </animateMotion>
      </circle>
      <circle className="wf-pulse wp5" r="4">
        <animateMotion dur="2.2s" begin="6.0s" repeatCount="indefinite">
          <mpath href="#wf-path-5" />
        </animateMotion>
      </circle>
    </svg>
  );
};

export default HeroWorkflowBg;
