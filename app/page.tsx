"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Episode = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  metric: string;
  stack: string;
  highlight: string;
  image: string;
  github: string;
};

const episodes: Episode[] = [
  {
    id: "netflix",
    title: "Netflix Clone Deployment",
    subtitle: "Episode I · The DevSecOps Saga",
    tag: "DEVOPS",
    duration: "1h 25m",
    metric: "70% Faster Deploys · Zero downtime releases",
    stack:
      "AWS · Terraform · Jenkins · Docker · SonarQube · Trivy · Prometheus · Grafana",
    highlight:
      "End-to-end DevSecOps: CI/CD pipeline with security scans, observability, auto-scaling and blue-green deployments on AWS.",
    image: "/images/episodes/netflix.jpg",
    github: "https://github.com/manjuappu1375/DevSecOps-Project",
  },
  {
    id: "lambda-cleanup",
    title: "AWS Lambda Auto-Cleanup",
    subtitle: "Episode II · The Serverless Purge",
    tag: "CLOUD",
    duration: "45m",
    metric: "Zero Idle EC2 Waste · 30%+ cost savings",
    stack: "AWS Lambda · Python · EventBridge · EC2 · EBS",
    highlight:
      "Serverless automation that detects idle EC2 instances, snapshots and volumes, then cleans them up safely to cut costs.",
    image: "/images/episodes/lambda-cleanup.jpg",
    github: "https://github.com/manjuappu1375/Lambda_Scripts"
  },
  {
    id: "iot-shipment",
    title: "IoT Shipment Monitor",
    subtitle: "Episode III · The Product Shield",
    tag: "IOT",
    duration: "50m",
    metric: "Real-time Anomaly Alerts",
    stack: "ESP32 · Sensors · Python · MQTT · SMTP",
    highlight:
      "Hardware + software system that monitors shock, tilt and tampering, then triggers instant alerts when products are at risk.",
    image: "/images/episodes/iot-shipment.jpg",
    github: "...!"
  },
  {
    id: "bgp-routing",
    title: "BGP Routing Visibility Toolkit",
    subtitle: "Episode IV · Network Automation Saga",
    tag: "NETWORK",
    duration: "Production-grade",
    metric: "Automated BGP flap detection",
    stack:
      "Python · FRRouting · BGP · Bash · Wireshark · CloudWatch",
    highlight:
      "Built a BGP simulation lab using FRRouting to analyze route advertisements, convergence, failover, and flapping scenarios. Automated route-flap detection with Python scripts and webhook alerts, reducing manual troubleshooting time.",
    image: "/images/episodes/bgp-routing.jpg",
    github: "https://github.com/manjuappu1375/bgp-routing-visibility-toolkit",
  },
];

function EpisodeCard({ ep }: { ep: Episode }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="relative min-w-[290px] md:min-w-[340px] max-w-[360px] glass-card cursor-pointer overflow-hidden"
    >
      {/* thumbnail / header */}
      <div className="relative h-40 md:h-44 w-full overflow-hidden">
        <Image
          src={ep.image}
          alt={ep.title}
          fill
          className="object-cover brightness-[0.8] saturate-125 transition-transform duration-500 ease-out hover:scale-105"
          sizes="(max-width: 768px) 320px, 360px"
        />
        {/* color overlays */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_55%)]" />

        <div className="relative z-10 flex w-full items-center justify-between p-3 text-[11px] font-mono text-white">
          <span className="pill bg-black/60 border-white/30">
            <span className="pill-dot" />
            <span className="tracking-[0.18em] text-[10px]">
              {ep.tag.toUpperCase()}
            </span>
          </span>
          <span className="px-2 py-1 rounded-full bg-black/60 border border-white/25 text-[10px]">
            {ep.duration}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
          {ep.subtitle}
        </p>
        <h3 className="text-sm md:text-base font-semibold text-white">
          {ep.title}
        </h3>
        <p className="text-[12px] text-gray-300">{ep.highlight}</p>

        {/* metric + buttons */}
        <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-gray-300">
          <span className="pr-2">{ep.metric}</span>

          <div className="flex items-center gap-2">
            {/* Case study link */}
            <Link
              href={`/episodes/${ep.id}`}
              className="text-cyan-300 soft-glow flex items-center gap-1 hover:text-cyan-100"
            >
              <span className="text-xs">▶</span>
              <span>Case Study</span>
            </Link>

            {/* GitHub link */}
            <a
              href={ep.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-gray-200 hover:border-cyan-300 hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-gray-400 border-t border-white/5 pt-2">
          {ep.stack}
        </p>
      </div>
    </motion.article>
  );
}


/** 🔧 Scenario modes – now DevOps capabilities, not traffic states */
type ScenarioMode = "loadbalancing" | "lambda" | "jenkins" | "ansible";

type SkillCategory = {
  id: string;
  name: string;
  domain: string;
  level: string;
  bar: number;
  bullets: string[];
};

const skills: SkillCategory[] = [
  {
    id: "aws",
    name: "AWS",
    domain: "Cloud",
    level: "Production-ready",
    bar: 85,
    bullets: ["VPC, ALB, ASG, RDS", "IAM, S3, CloudWatch", "EC2 cost optimization"],
  },
  {
    id: "iac",
    name: "Terraform & Ansible",
    domain: "Infrastructure as Code",
    level: "Modular automation",
    bar: 85,
    bullets: [
      "Terraform reusable modules & remote state",
      "Plan · Review · Apply lifecycle",
      "Ansible playbooks, roles & inventories",
      "Idempotent provisioning & automation",
    ],
  },
  {
    id: "docker",
    name: "Docker",
    domain: "Containerization",
    level: "Hands-on",
    bar: 70,
    bullets: [
      "Images & containers",
      "Dockerfile basics",
      "Container lifecycle & networking",
    ],
  },
  {
    id: "cicd",
    name: "Jenkins / GitHub Actions",
    domain: "CI/CD",
    level: "Secure pipelines",
    bar: 80,
    bullets: [
      "Build · Test · Deploy",
      "Secrets & approvals",
      "Blue/green & canary patterns",
    ],
  },
  {
    id: "security",
    name: "SonarQube / Trivy",
    domain: "Security",
    level: "Shift-left",
    bar: 75,
    bullets: [
      "Static code analysis",
      "Container image scanning",
      "Quality gates in CI",
    ],
  },
  {
    id: "observability",
    name: "Prometheus / Grafana",
    domain: "Monitoring",
    level: "SLO-driven",
    bar: 78,
    bullets: ["Metrics & dashboards", "Alert rules", "Error budget thinking"],
  },
];

const certifications = [
  "Cloud DevOps Certification – Intel",
  "DevOps Certification – JSpiders",
  "Networking Basics – Cisco",
  "Linux System Administration – The Linux Foundation",
  "A+ & N+ – Indian Institute of Hardware Technology",
];

export default function Home() {
  /** ✅ start on loadbalancing by default */
  const [mode, setMode] = useState<ScenarioMode>("loadbalancing");

  const metrics = {
    loadbalancing: {
      label: "ALB + Auto Scaling",
      rate: "400 req/s",
      instances: "4 EC2 (2 AZs)",
      security: "Health checks + targets",
      status: "Traffic evenly balanced",
    },
    lambda: {
      label: "Lambda Automation",
      rate: "120 cleanup jobs/min",
      instances: "Serverless (on-demand)",
      security: "IAM roles + CloudWatch",
      status: "Idle resources cleaned",
    },
    jenkins: {
      label: "Jenkins Multitasking",
      rate: "6 parallel pipelines",
      instances: "3 build agents",
      security: "RBAC + folder isolation",
      status: "Builds running green",
    },
    ansible: {
      label: "Ansible + Docker",
      rate: "50 nodes / run",
      instances: "20 app containers",
      security: "Hardened images + SSH",
      status: "Config drift removed",
    },
  } as const;

  const current = metrics[mode];

  return (
    <main className="min-h-screen flex flex-col bg-transparent text-white">
      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur-xl sticky top-0 z-40">
        <div className="section-shell flex items-center justify-between py-3">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-2xl bg-linear-to-br from-orange-500 to-cyan-400 flex items-center justify-center text-xs font-mono soft-glow">
              MR
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                DevOps Saga
              </p>
              <p className="text-sm font-medium">Manjunath R</p>
            </div>
          </motion.div>

          <div className="text-[11px] font-mono text-gray-400 flex gap-3">
            <a
              href="#episodes"
              className="hidden md:inline-flex px-3 py-1.5 rounded-full border border-white/15 hover:border-cyan-300/70 hover:text-white transition"
            >
              Episodes
            </a>
            <a
              href="#scenario"
              className="hidden md:inline-flex px-3 py-1.5 rounded-full border border-white/15 hover:border-cyan-300/70 hover:text-white transition"
            >
              Platform Engine
            </a>
            <a
              href="#skills"
              className="hidden md:inline-flex px-3 py-1.5 rounded-full border border-white/15 hover:border-cyan-300/70 hover:text-white transition"
            >
              Skills
            </a>
            <Link
              href="/recruiter"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/70 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 transition"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,1)]" />
              Recruiter Mode
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[72vh]">
        {/* Background image + gradients */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-forest.jpg"
            alt="Cinematic cloud and forest backdrop"
            fill
            priority
            className="object-cover opacity-45 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,106,0,0.4),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.9)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />
        </div>

        <div className="section-shell pt-12 pb-16 grid gap-10 md:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-200/80 mb-3">
              THE DEVOPS SAGA
            </p>

            <h1 className="font-title text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
              <span className="text-white">Guardian of </span>
              <span className="text-cyan-300">
                Scalable, <span className="text-orange-400">Secure</span>,
                Automated Systems
              </span>
            </h1>

            <p className="mt-5 text-sm md:text-base text-gray-200 max-w-xl">
              I design, automate, and harden cloud infrastructure on AWS using
              Terraform, CI/CD, containers, and observability. Every deploy
              should feel like a controlled cinematic event — not chaos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-gray-200">
              {[
                "CI/CD · Passing",
                "Infra · Drift-Free",
                "Cost · Optimized",
                "Security · Clean",
              ].map((label) => (
                <span key={label} className="pill">
                  <span className="pill-dot" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right side infra card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{
              rotateX: -4,
              rotateY: 4,
              translateY: -4,
            }}
            className="origin-center"
          >
            <div className="glass-card border-glow-cyan p-5">
              <div className="flex justify-between items-center text-[11px] text-gray-200 mb-3">
                <span className="uppercase tracking-[0.18em]">
                  AWS CLOUD MAP
                </span>
                <span className="font-code text-[10px] bg-black/60 px-2 py-0.5 rounded-full border border-emerald-400/60 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.7)]">
                  LIVE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-[11px]">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-black/80 border border-cyan-400/70 flex items-center justify-center text-[10px] font-code soft-glow">
                    VPC
                  </div>
                  <p className="text-gray-300 text-center text-[11px]">
                    Public & private subnets.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-black/80 border border-orange-400/80 flex items-center justify-center text-[10px] font-code soft-glow">
                    ASG
                  </div>
                  <p className="text-gray-300 text-center text-[11px]">
                    Auto-scaling app fleet.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-black/80 border border-cyan-300/80 flex items-center justify-center text-[10px] font-code soft-glow">
                    RDS
                  </div>
                  <p className="text-gray-300 text-center text-[11px]">
                    Multi-AZ database.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] font-code text-gray-200">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    UPTIME
                  </p>
                  <p className="text-sm text-cyan-300">99.998%</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    DEPLOY TIME
                  </p>
                  <p className="text-sm text-orange-300">-70%</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    ALERTS
                  </p>
                  <p className="text-sm text-emerald-300">Stable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPISODES */}
      <section
        id="episodes"
        className="border-t border-white/5 bg-linear-to-b from-black to-[#050709] py-10"
      >
        <div className="section-shell">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Project Seasons
              </p>
              <h2 className="mt-1 text-lg md:text-2xl font-semibold">
                DevOps Saga Originals
              </h2>
              <p className="mt-2 text-[11px] text-gray-400">
                Each episode is a real project with metrics, diagrams and code.
              </p>
            </div>
            <p className="text-[11px] text-gray-400 hidden md:block">
              Scroll sideways to browse the episodes →
            </p>
          </div>

          <div className="relative mt-2">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#050709] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-[#050709] to-transparent" />

            <div className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory">
              {episodes.map((ep) => (
                <div key={ep.id} className="snap-start">
                  <EpisodeCard ep={ep} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES / SCENARIO ENGINE */}
      <section
        id="scenario"
        className="border-t border-white/5 bg-[#050709] py-10 bg-grid inner-vignette"
      >
        <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_minmax(0,1.1fr)] items-start">
          {/* LEFT PANEL – MODES */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Platform Capabilities
            </p>
            <h2 className="mt-1 text-lg md:text-2xl font-semibold">
              How I actually run things in prod.
            </h2>
            <p className="mt-3 text-sm text-gray-300">
              Switch between the core pieces of my stack to see how traffic,
              automation, CI and configuration management all work together to
              keep systems healthy.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setMode("loadbalancing")}
                className={`text-left px-3 py-2 rounded-lg border text-xs font-mono ${
                  mode === "loadbalancing"
                    ? "border-cyan-300/80 bg-cyan-500/10 text-white"
                    : "border-white/10 text-gray-300 hover:border-cyan-300/60"
                }`}
              >
                ⚖️ Load Balancing & Auto Scaling · ALB spreads traffic across
                instances with health checks and ASG scaling.
              </button>

              <button
                onClick={() => setMode("lambda")}
                className={`text-left px-3 py-2 rounded-lg border text-xs font-mono ${
                  mode === "lambda"
                    ? "border-emerald-300/80 bg-emerald-500/10 text-white"
                    : "border-white/10 text-gray-300 hover:border-emerald-300/60"
                }`}
              >
                ⚙️ Lambda Automation · Serverless jobs clean idle EC2, EBS and
                snapshots on a schedule.
              </button>

              <button
                onClick={() => setMode("jenkins")}
                className={`text-left px-3 py-2 rounded-lg border text-xs font-mono ${
                  mode === "jenkins"
                    ? "border-orange-300/80 bg-orange-500/10 text-white"
                    : "border-white/10 text-gray-300 hover:border-orange-300/60"
                }`}
              >
                🧪 Jenkins Multitasking · Multiple pipelines running in parallel
                on shared agents with approvals.
              </button>

              <button
                onClick={() => setMode("ansible")}
                className={`text-left px-3 py-2 rounded-lg border text-xs font-mono ${
                  mode === "ansible"
                    ? "border-amber-300/80 bg-amber-500/10 text-white"
                    : "border-white/10 text-gray-300 hover:border-amber-300/60"
                }`}
              >
                🐳 Ansible + Docker · Playbooks roll out updates into container
                clusters and kill config drift.
              </button>
            </div>
          </div>

          {/* RIGHT PANEL – VISUAL CARD */}
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-card border-glow-cyan"
          >
            <div className="flex justify-between items-center text-[11px] text-gray-300 mb-4 p-5 pb-3 border-b border-white/10">
              <span className="uppercase tracking-[0.18em]">
                DevOps Control View
              </span>
              <span className="font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded-full border border-white/20">
                {current.label}
              </span>
            </div>

            <div className="px-5 pb-5">
              <div className="grid grid-cols-2 gap-4 text-[11px] mb-4">
                <div className="border border-white/12 rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2">
                    Control Node A
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-black/70 border border-cyan-400/70 flex items-center justify-center font-mono text-[10px] soft-glow">
                      ENTRY
                    </div>
                    <p className="text-gray-400 text-center">
                      Where requests or jobs first land (ALB / webhook /
                      playbook).
                    </p>
                  </div>
                </div>
                <div className="border border-white/12 rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2">
                    Worker Layer
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-black/70 border border-cyan-400/70 flex items-center justify-center font-mono text-[10px] soft-glow">
                      WORKERS
                    </div>
                    <p className="text-gray-400 text-center">
                      EC2, Lambdas, agents or containers doing the real work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-[11px] mt-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    Throughput
                  </p>
                  <p className="text-sm text-cyan-300">{current.rate}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    Active Workers
                  </p>
                  <p className="text-sm text-orange-300">{current.instances}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400">
                    Control Plane
                  </p>
                  <p className="text-sm text-emerald-300">{current.security}</p>
                </div>
              </div>

              <div className="mt-4 text-[11px] font-mono">
                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Status
                </p>
                <p
                  className={
                    mode === "jenkins"
                      ? "text-orange-300"
                      : mode === "ansible"
                      ? "text-amber-300"
                      : mode === "lambda"
                      ? "text-emerald-300"
                      : "text-cyan-300"
                  }
                >
                  {current.status}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section
        id="skills"
        className="border-t border-white/5 bg-black py-10 pb-14"
      >
        <div className="section-shell">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Technical Arsenal
              </p>
              <h2 className="mt-1 text-lg md:text-2xl font-semibold">
                Tools I actually deploy with.
              </h2>
            </div>
            <p className="text-[11px] text-gray-400 hidden md:block">
              Hover cards to see context →
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((s) => (
              <motion.div
                key={s.id}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                      {s.domain}
                    </p>
                    <p className="text-sm font-semibold">{s.name}</p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 bg-black/60 px-2 py-1 rounded-full border border-white/10">
                    {s.level}
                  </span>
                </div>

                <div className="mt-2 mb-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-cyan-300 via-orange-400 to-emerald-300"
                    style={{ width: `${s.bar}%` }}
                  />
                </div>

                <ul className="space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[11px] text-gray-300 flex items-start gap-1.5"
                    >
                      <span className="mt-[3px] inline-block w-1.5 h-1.5 rounded-full bg-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-3">
              Verified Certifications
            </p>
            <div className="flex flex-wrap gap-3 text-[11px]">
              {certifications.map((c) => (
                <span key={c} className="pill">
                  <span className="pill-dot bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,1)]" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-6">
        <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
          <div>
            <p className="uppercase tracking-[0.25em] text-gray-500">
              Ready to Scale?
            </p>
            <p className="mt-1">
              Future-Ready Cloud & DevOps Engineer | Obsessed with Automation,
              Scalability & Reliability | Open to Opportunities Across India
            </p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:manjuappu1375@gmail.com" className="footer-link">
              Email
            </a>
            <a
              href="https://github.com/manjuappu1375"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manjunath-r-b759471b6/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
