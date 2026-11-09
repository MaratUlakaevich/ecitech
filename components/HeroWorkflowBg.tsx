"use client";

import { useEffect, useRef, type FC } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Hero background workflow — n8n-style architectural illustration.
 *
 * Six rounded-rect nodes representing a real lead-intake AI workflow
 * (WhatsApp + Portal → AI AGENT → Calendar / CRM / Teams), stacked
 * top to bottom in the hero's right-hand column (lg+ only, so it never
 * sits under the headline) and connected by curved bezier paths. Copper pulse dots travel along the edges,
 * the AGENT node breathes, and the whole composition fades top + bottom
 * via mask-image so it feels embedded rather than pasted on.
 *
 * Draw-in is CSS-driven (see globals.css `.hero-workflow` block); the
 * travelling dots are SMIL, with opacity and motion sharing one `dur`.
 * Stagger order: nodes (0.3–1.7s) → edges (1.0–2.6s) → pulses (3.2s+).
 *
 * Everything pauses while the hero is offscreen; reduced motion renders
 * the finished diagram without dots (CSS).
 */
// Order matters: globals.css staggers node draw-in by nth-of-type.
const NODES = [
  { x: 60, y: 120, title: "WHATSAPP", sub: "intake" },
  { x: 310, y: 120, title: "PORTAL", sub: "bayut · pf" },
  { x: 185, y: 340, title: "AI AGENT", sub: "claude · tools", primary: true },
  { x: 10, y: 560, title: "CALENDAR", sub: "cal.com" },
  { x: 185, y: 560, title: "HUBSPOT", sub: "crm record" },
  { x: 360, y: 560, title: "MS TEAMS", sub: "sales handoff" },
];

/** Russian labels (168-FZ: visitor-facing text in Russian; product names stay as names). */
const NODES_RU = [
  { x: 60, y: 120, title: "ЗАЯВКИ", sub: "whatsapp, telegram" },
  { x: 310, y: 120, title: "ПЛОЩАДКИ", sub: "лиды с порталов" },
  { x: 185, y: 340, title: "ИИ-АГЕНТ", sub: "claude, инструменты", primary: true },
  { x: 10, y: 560, title: "КАЛЕНДАРЬ", sub: "запись на встречу" },
  { x: 185, y: 560, title: "CRM", sub: "карточка клиента" },
  { x: 360, y: 560, title: "КОМАНДА", sub: "передача продажам" },
];

const PULSES = [
  { path: "wf-path-1", dur: 3.5, begin: 3.2 },
  { path: "wf-path-2", dur: 3.8, begin: 4.0 },
  { path: "wf-path-3", dur: 3.2, begin: 4.8 },
  { path: "wf-path-4", dur: 3.4, begin: 5.4 },
  { path: "wf-path-5", dur: 3.4, begin: 6.0 },
];

const HeroWorkflowBg: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const nodes = locale === "ru" ? NODES_RU : NODES;
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        svg.unpauseAnimations();
        svg.classList.remove("is-paused");
      } else {
        svg.pauseAnimations();
        svg.classList.add("is-paused");
      }
    });
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="hero-workflow"
      viewBox="0 0 520 760"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Reusable connection paths — also referenced by pulse dot motion */}
        <path id="wf-path-1" d="M 135 188 C 135 264, 260 264, 260 340" />
        <path id="wf-path-2" d="M 385 188 C 385 264, 260 264, 260 340" />
        <path id="wf-path-3" d="M 260 408 C 260 484, 85 484, 85 560" />
        <path id="wf-path-4" d="M 260 408 L 260 560" />
        <path id="wf-path-5" d="M 260 408 C 260 484, 435 484, 435 560" />
      </defs>

      {/* Connection edges (drawn behind nodes) */}
      <g className="wf-edges">
        <use href="#wf-path-1" className="wf-edge we1" />
        <use href="#wf-path-2" className="wf-edge we2" />
        <use href="#wf-path-3" className="wf-edge we3" />
        <use href="#wf-path-4" className="wf-edge we4" />
        <use href="#wf-path-5" className="wf-edge we5" />
      </g>

      {/* Nodes: two triggers → agent → three outputs, top to bottom */}
      <g className="wf-nodes">
        {nodes.map((n) => (
          <g
            key={n.title}
            transform={`translate(${n.x} ${n.y})`}
            className={n.primary ? "wf-node wf-node-primary" : "wf-node"}
          >
            <rect width="150" height="68" rx="6" className="wf-rect" />
            <rect width="5" height="68" className="wf-accent" />
            <text x="20" y="28" className={n.primary ? "wf-title wf-title-primary" : "wf-title"}>
              {n.title}
            </text>
            <text x="20" y="50" className="wf-sub">{n.sub}</text>
          </g>
        ))}
      </g>

      {/* Pulse dots flowing through the system — animateMotion follows the defs paths */}
      {PULSES.map((p) => (
        <circle key={p.path} className="wf-pulse" r="4">
          <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite">
            <mpath href={`#${p.path}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0.78;0.78;0"
            keyTimes="0;0.15;0.85;1"
            dur={`${p.dur}s`}
            begin={`${p.begin}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

export default HeroWorkflowBg;
