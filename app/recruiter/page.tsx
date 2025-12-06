import type { Metadata } from "next";
import PrintBar from "./PrintBar";

export const metadata: Metadata = {
  title: "Manjunath R – Cloud & DevOps Engineer (Recruiter View)",
};

export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-[#050709] text-white print:bg-white print:text-black">
      {/* Top print/back bar (hidden in PDF) */}
      <PrintBar />

      {/* Wrapper */}
      <section className="max-w-3xl mx-auto px-6 py-10 mt-2 print:px-6 print:py-6">
        {/* Header */}
        <header className="border-b border-white/15 pb-4 mb-4 print:border-black/20">
          <h1 className="text-2xl font-semibold tracking-wide print:text-black">
            Manjunath R
          </h1>

          <p className="mt-1 text-sm text-gray-300 print:text-black">
            Cloud &amp; DevOps Engineer
          </p>

          <div className="mt-2 text-[11px] text-gray-400 space-y-0.5 print:text-black">
            <p>📞 +91 9019631922</p>
            <p>📧 manjuappu1375@gmail.com</p>
            <p>🌐 LinkedIn · GitHub</p>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4 break-inside-avoid">
          <h2 className="resume-heading">SUMMARY</h2>
          <p className="resume-body">
            Cloud &amp; DevOps Engineer with hands-on experience designing secure,
            scalable infrastructure on AWS using CI/CD automation (Jenkins),
            Infrastructure as Code (Terraform, Ansible), containers (Docker), and
            observability stacks (Prometheus, Grafana, CloudWatch). Strong in
            security automation with SonarQube and Trivy, and scripting with Bash
            for workflow automation and incident response.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-4 break-inside-avoid">
          <h2 className="resume-heading">CORE SKILLS</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] resume-body">
            <ul className="space-y-1">
              <li>
                <strong>Programming &amp; Scripting:</strong> Bash, YAML
              </li>
              <li>
                <strong>Cloud:</strong> AWS (EC2, S3, VPC, IAM, Lambda, EKS,
                Route 53, CloudWatch, Auto Scaling, ELB)
              </li>
              <li>
                <strong>IaC:</strong> Terraform, Ansible
              </li>
              <li>
                <strong>CI/CD:</strong> Jenkins, Maven, SonarQube, Trivy
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <strong>Containers &amp; Orchestration:</strong> Docker, Kubernetes
              </li>
              <li>
                <strong>Monitoring:</strong> Prometheus, Grafana, CloudWatch
              </li>
              <li>
                <strong>Automation:</strong> Ansible Playbooks, Docker Compose, Bash
              </li>
              <li>
                <strong>Security:</strong> IAM policies, image scanning, code analysis
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4 break-inside-avoid">
          <h2 className="resume-heading">PROJECTS</h2>

          <div className="resume-project">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                Netflix Clone Deployment on AWS (DevSecOps Project)
              </span>
              <span className="text-gray-400 print:text-black">
                AWS · Jenkins · Docker · Terraform
              </span>
            </div>
            <p className="resume-subline">
              Tech Stack: AWS, Jenkins, Docker, Terraform, Prometheus, Grafana,
              SonarQube, Trivy
            </p>
            <ul className="resume-list">
              <li>
                Designed a CI/CD pipeline with Jenkins for automated builds, tests
                and deployments.
              </li>
              <li>
                Deployed containerized services on AWS EC2 with auto-scaling and
                monitoring via Prometheus &amp; Grafana.
              </li>
              <li>
                Secured pipelines using SonarQube (code quality) and Trivy (image
                scanning).
              </li>
            </ul>
          </div>

          <div className="resume-project">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                AWS Lambda EC2 Automation (Hands-on Lab)
              </span>
              <span className="text-gray-400 print:text-black">
                AWS Lambda · Python · EventBridge
              </span>
            </div>
            <ul className="resume-list">
              <li>
                Built a Lambda + Python workflow to identify and terminate old EC2
                instances.
              </li>
              <li>
                Used EventBridge for scheduled automation and on-demand infra
                cleanup.
              </li>
            </ul>
          </div>

          <div className="resume-project">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                E-Product Shield – IoT-Based Shipment Monitoring
              </span>
              <span className="text-gray-400 print:text-black">
                ESP32 · Sensors · Python · SMTP
              </span>
            </div>
            <p className="resume-subline">
              Real-time anomaly detection for shock, motion and unauthorized access.
            </p>
            <ul className="resume-list">
              <li>
                Built an IoT system that raises instant email alerts on abnormal
                events.
              </li>
              <li>
                Proposed blockchain logging &amp; GPS tracking for auditability and
                reliability.
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4 break-inside-avoid">
          <h2 className="resume-heading">EXPERIENCE</h2>

          <div className="resume-job">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                System Administrator (Part-time) – Intellic Solutions
              </span>
              <span className="text-gray-400 print:text-black">
                Jan 2017 – Jun 2019
              </span>
            </div>
            <ul className="resume-list">
              <li>
                Installed, configured and managed Linux/Windows servers and
                networking.
              </li>
              <li>
                Automated routine tasks and monitored systems to improve
                reliability.
              </li>
              <li>
                Troubleshot OS, hardware and networking issues to improve ticket
                resolution times.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                Full Stack Web Development Intern – Take it Smart
              </span>
              <span className="text-gray-400 print:text-black">
                Apr 2024 – May 2024
              </span>
            </div>
            <ul className="resume-list">
              <li>
                Built and optimized backend features using Django, HTML, CSS.
              </li>
              <li>
                Debugged APIs and improved system performance and scalability.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold">
                Hardware &amp; Networking Intern – Alpha Tech Academy Solutions
              </span>
              <span className="text-gray-400 print:text-black">
                Jun 2019 – Jul 2019
              </span>
            </div>
            <ul className="resume-list">
              <li>
                Supported system troubleshooting, software upgrades and LAN/WAN
                configuration.
              </li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-4 break-inside-avoid">
          <h2 className="resume-heading">CERTIFICATIONS</h2>
          <ul className="resume-list">
            <li>Cloud DevOps Certification – Intel</li>
            <li>DevOps Certification – JSpiders</li>
            <li>Networking Basics – Cisco</li>
            <li>Linux System Administration – The Linux Foundation</li>
            <li>A+ &amp; N+ – Indian Institute of Hardware Technology</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-2 break-inside-avoid">
          <h2 className="resume-heading">EDUCATION</h2>
          <ul className="resume-list">
            <li>
              <strong>
                B.E – Computer Science &amp; Engineering – Global Academy of
                Technology, Bangalore
              </strong>{" "}
              | 2024 | CGPA: 7.24
            </li>
            <li>
              <strong>
                Diploma – Computer Science &amp; Engineering – V.E.T B.V.L
                Polytechnic, Bangalore
              </strong>{" "}
              | 2020 | 65.23%
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
