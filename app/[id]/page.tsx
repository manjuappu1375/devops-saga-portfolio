import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type EpisodeDetail = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  impact: string;
  problem: string;
  solution: string[];
  tooling: string[];
  metrics: string[];
  github: string;
  image: string;
};

const episodes: Record<string, EpisodeDetail> = {
  netflix: {
    id: "netflix",
    title: "Netflix Clone Deployment – DevSecOps Pipeline",
    subtitle: "Episode I · The DevSecOps Saga",
    role: "Cloud & DevOps Engineer",
    impact:
      "Built a secure CI/CD pipeline for a Netflix-style web app with zero-downtime blue-green deployments on AWS.",
    problem:
      "Releases were manual and risky, rollbacks were painful, and there was no visibility into app health.",
    solution: [
      "Designed a Jenkins pipeline with stages for build, unit tests, security scans (SonarQube, Trivy) and deployment.",
      "Containerized application using Docker and pushed images to a private registry.",
      "Used Terraform to provision VPC, subnets, ALB, ASG, and RDS for a production-like environment.",
      "Implemented blue-green deployments behind ALB to achieve zero-downtime releases.",
      "Fed application and infrastructure metrics into Prometheus + Grafana dashboards for live monitoring.",
    ],
    tooling: [
      "AWS: VPC, ALB, ASG, EC2, RDS",
      "Terraform: reusable modules & remote state",
      "Jenkins: multistage pipelines, approvals, notifications",
      "Docker: app container images",
      "SonarQube & Trivy: code and image security",
      "Prometheus & Grafana: metrics, dashboards, alerting",
    ],
    metrics: [
      "70% faster deploy cycle compared to manual approach.",
      "Zero-downtime deployments using blue-green pattern.",
      "Automated security & quality checks on every commit.",
    ],
    github: "https://github.com/manjuappu1375/<your-netflix-repo>",
    image: "/images/episodes/netflix.jpg",
  },

  "lambda-cleanup": {
    id: "lambda-cleanup",
    title: "AWS Lambda Auto-Cleanup – Cost Optimization",
    subtitle: "Episode II · The Serverless Purge",
    role: "Cloud Engineer",
    impact:
      "Reduced AWS bill by automatically finding and cleaning idle resources that humans forget about.",
    problem:
      "Old EC2 instances, EBS volumes and snapshots were left running, wasting money every month.",
    solution: [
      "Wrote Python Lambda functions to scan EC2, EBS and snapshots for idle or orphaned resources.",
      "Used EventBridge schedules to trigger Lambdas on a regular cadence.",
      "Tagged resources with owners and environments to avoid deleting critical systems.",
      "Sent reports & alerts via CloudWatch + email before destructive actions.",
      "Implemented a safe-delete flow: mark → notify → delete after grace period.",
    ],
    tooling: [
      "AWS Lambda & EventBridge",
      "EC2, EBS, Snapshots APIs",
      "CloudWatch Logs & Alarms",
      "IAM roles with least privilege",
      "Python + boto3",
    ],
    metrics: [
      "30%+ cost reduction by removing idle compute and storage.",
      "Automation running on schedule with zero manual intervention.",
      "Clear audit trail via logs and tagged resources.",
    ],
    github: "https://github.com/manjuappu1375/<your-lambda-repo>",
    image: "/images/episodes/lambda-cleanup.jpg",
  },

  "iot-shipment": {
    id: "iot-shipment",
    title: "IoT Shipment Monitor – Real-Time Anomaly Alerts",
    subtitle: "Episode III · The Product Shield",
    role: "Full-stack Maker (Hardware + Cloud)",
    impact:
      "Protected shipped products by detecting shock/tampering and sending instant alerts.",
    problem:
      "No visibility into what happens to physical products during shipping – damage and tampering went unnoticed.",
    solution: [
      "Built ESP32-based device with accelerometer/gyroscope sensors to detect shock and tilt.",
      "Streamed sensor data to a backend and evaluated thresholds for anomalies.",
      "When abnormal events were detected, triggered email alerts via SMTP.",
      "Logged events for later analysis and audit trail.",
      "Designed firmware to be low-power and reliable during long shipments.",
    ],
    tooling: [
      "ESP32 microcontroller",
      "Sensors (accelerometer / gyro)",
      "Python for backend logic",
      "MQTT / HTTP for data transport (depending on version)",
      "SMTP email integration",
    ],
    metrics: [
      "Real-time anomaly alerts at the moment of impact.",
      "Actionable logs for understanding how/when damage occurred.",
      "Foundation for future dashboard & analytics layer.",
    ],
    github: "https://github.com/manjuappu1375/<your-iot-repo>",
    image: "/images/episodes/iot-shipment.jpg",
  },
};

export default function EpisodePage({
  params,
}: {
  params: { id: string };
}) {
  const episode = episodes[params.id];

  if (!episode) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="section-shell flex items-center justify-between py-3 text-[11px]">
          <Link href="/" className="flex items-center gap-2 text-gray-300">
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs">
              ←
            </span>
            <span>Back to portfolio</span>
          </Link>

          <a
            href={episode.github}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            View on GitHub
          </a>
        </div>
      </header>

      <section className="section-shell py-10 grid gap-8 lg:grid-cols-[1.2fr_minmax(0,0.9fr)]">
        {/* LEFT – TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            {episode.subtitle}
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold">
            {episode.title}
          </h1>
          <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-gray-400">
            Role: {episode.role}
          </p>

          <p className="mt-5 text-sm text-gray-200">{episode.impact}</p>

          <div className="mt-6 space-y-4 text-sm text-gray-200">
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Problem
              </h2>
              <p>{episode.problem}</p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                What I built
              </h2>
              <ul className="list-disc list-inside space-y-1.5">
                {episode.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Tools & Stack
              </h2>
              <ul className="list-disc list-inside space-y-1.5">
                {episode.tooling.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-1.5">
                {episode.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex gap-3 text-[11px]">
            <a
              href={episode.github}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Open GitHub Repo
            </a>
            <Link href="/" className="footer-link border-gray-500/60">
              Back to Home
            </Link>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative h-64 md:h-80 lg:h-full glass-card overflow-hidden">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>
      </section>
    </main>
  );
}
