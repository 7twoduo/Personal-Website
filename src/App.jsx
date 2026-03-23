import React from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, MapPin, Shield, Cloud, Server, FileText, Github, Linkedin } from "lucide-react";

const profile = {
  name: "Gavin Fogwe",
  shortName: "GAVIN FOGWE",
  title: "Cloud / DevOps Engineer",
  subtitle:
    "I build secure cloud infrastructure designed for scale, resilience, and real-world operations.",
  location: "United States",
  citizenship: "US Citizen",
  email: "cerogavin@gmail.com",
  linkedin: "https://www.linkedin.com/in/gavin-fogwe",
  github: "https://github.com/gavinxenon0-arch",
  resumePdf: "#",
};

const projects = [
  {
    title: "Multi-Cloud Secure Healthcare Infrastructure",
    blurb:
      "Production-style healthcare infrastructure built across AWS and GCP with secure networking, observability, compliance-oriented logging, AI-assisted incident response, and domain + HTTPS provisioning through Route 53 and ACM.",
    bullets: [
      "Connected AWS and GCP through VPN and AWS Transit Gateway for secure cross-cloud communication.",
      "Deployed stateless compute in AWS São Paulo and GCP Iowa with a centralized database in Japan.",
      "Used CloudFront, WAF, origin restrictions, Secrets Manager, and Parameter Store to strengthen security.",
      "Provisioned the Route 53 domain and created HTTPS connectivity with ACM certificates across the stack, including CloudFront-to-origin certificate handling.",
      "Built monitoring and alerting with CloudWatch, SNS, S3 log retention, and a Kinesis pipeline prepared for SIEM integration.",
      "Provisioned infrastructure with Terraform and standardized instance deployment with golden AMIs.",
    ],
    stack:
      "AWS, GCP, Terraform, EC2, ALB, ASG, CloudFront, WAF, Transit Gateway, VPN, Route 53, ACM, CloudWatch, SNS, S3, Kinesis, Lambda",
    repo: "https://github.com/gavinxenon0-arch/Multi-Cloud-Secure-Healthcare-Infrastructure",
  },
  {
    title: "Domain Grounded AI Chat System on AWS",
    blurb:
      "Hallucination-resistant RAG system on AWS that uploads source documents to S3, stores embeddings in S3 Vectors, serves retrieval through Bedrock Knowledge Bases, and exposes a Lambda-powered chat API with optional CloudFront, Route 53, and ACM-based frontend hosting.",
    bullets: [
      "Built a full RAG pipeline using S3 document storage, S3 Vectors, Bedrock Knowledge Base, and a Lambda chat handler behind API Gateway.",
      "Provisioned the stack with Terraform to automate document ingestion, vector indexing, Bedrock retrieval, and API deployment.",
      "Added optional website hosting through S3 + CloudFront + Route 53 + ACM, alongside an alternate EC2 + Nginx path.",
      "Applied security-minded design with IAM least privilege, private networking through VPC and subnets, API throttling, CloudFront Origin Access Control, and no public exposure of vector storage.",
      "Designed the system to reduce hallucinations by grounding responses in uploaded source material instead of relying on raw model output alone.",
    ],
    stack:
      "AWS, Terraform, Amazon Bedrock, S3, S3 Vectors, Lambda, API Gateway, CloudFront, Route 53, ACM, IAM, VPC, CloudWatch",
    repo: "https://github.com/gavinxenon0-arch/Domain-Grounded-AI-Chat-System-on-AWS",
  },
];

const experience = [
  {
    role: "Infrastructure / Cloud / DevSecOps Consultant",
    company: "Galabe & Sons LLC",
    dates: "Jun 2025 – Present",
    bullets: [
      "Led the transition from locally managed infrastructure toward AWS and GCP cloud environments.",
      "Designed and deployed infrastructure with Terraform for repeatable provisioning and stronger operational consistency.",
      "Implemented DevSecOps practices in deployment workflows and CI/CD processes.",
      "Managed IAM, networking, secure configuration, logging, and hardening across cloud environments.",
      "Built and supported containerized workloads using Docker and Kubernetes.",
    ],
  },
  {
    role: "Cloud Security Engineer",
    company: "BlueLine Security Services, LLC",
    dates: "Jun 2024 – Present",
    bullets: [
      "Monitored and responded to cloud security events across AWS and GCP using Splunk and Google Chronicle.",
      "Performed vulnerability assessment support and remediation coordination across cloud workloads.",
      "Integrated security controls into CI/CD pipelines to strengthen DevSecOps practices.",
      "Automated infrastructure provisioning with Terraform to reduce manual drift.",
      "Supported IAM enforcement, secure configuration, incident response documentation, and operational runbooks.",
    ],
  },
  {
    role: "Junior Cloud Engineer",
    company: "BlueLine Security Services, LLC",
    dates: "Jun 2024 – Jan 2025",
    bullets: [
      "Supported AWS cloud deployments and day-to-day operational tasks under senior engineering guidance.",
      "Assisted with security audits, vulnerability scanning, and environment reviews.",
      "Monitored security alerts and contributed to incident response workflows.",
      "Built hands-on experience with Linux administration, IAM, cloud networking, troubleshooting, and monitoring.",
    ],
  },
];

const certifications = [
  "AWS Security Specialty",
  "AWS Solutions Architect Associate",
  "AWS AI Practitioner",
  "CompTIA CySA+",
  "HashiCorp Terraform Associate",
];

const skills = [
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Terraform",
  "Cloud Security",
  "DevSecOps",
  "Docker",
  "Kubernetes",
  "CloudFront",
  "IAM",
  "VPC Networking",
  "Monitoring & Logging",
  "Incident Response",
];

const navLinkClass = ({ isActive }) =>
  `transition-colors ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"}`;

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#04101f] text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(23,66,112,0.35),_transparent_35%),linear-gradient(90deg,rgba(22,57,97,0.22)_0%,rgba(5,16,31,0.0)_12%,rgba(22,57,97,0.15)_24%,rgba(5,16,31,0.0)_36%,rgba(22,57,97,0.12)_48%,rgba(5,16,31,0.0)_60%,rgba(22,57,97,0.16)_72%,rgba(5,16,31,0.0)_84%,rgba(22,57,97,0.22)_100%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03111f]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 py-5 lg:px-10">
          <NavLink to="/" className="text-sm font-semibold tracking-[0.28em] text-slate-100">
            {profile.shortName}
          </NavLink>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/resume" className={navLinkClass}>
              Resume
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-[1520px] px-6 pt-14 lg:px-10 lg:pt-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">{eyebrow}</p>
      <h1 className="max-w-6xl font-serif text-4xl leading-tight text-white md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-slate-950/35 p-8 shadow-2xl shadow-black/20 ${className}`}>{children}</div>;
}

function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-[1520px] gap-10 px-8 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Cloud Infrastructure • DevSecOps • Cloud Security</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[1.02] text-white md:text-7xl xl:text-[6.4rem]">
            {profile.name} builds cloud systems that are designed to be secure, scalable, and hard to break.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300 md:text-[1.45rem]">{profile.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              View Projects <ArrowRight size={18} />
            </NavLink>
            <NavLink
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
            >
              Resume Page <FileText size={18} />
            </NavLink>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="h-full">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Positioning</p>
            <div className="space-y-4">
              {[
                "Secure AWS and GCP infrastructure built with Terraform",
                "Cloud security, observability, and failure-aware design",
                "Production-minded DevSecOps with automation and control",
                "Multi-cloud project work with monitoring and incident response",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 text-lg leading-8 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-300" />
                <span>{profile.location}</span>
              </div>
              <div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 w-fit">
                {profile.citizenship}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1520px] px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Cloud className="text-emerald-300" />,
              title: "Cloud Architecture",
              text: "AWS and GCP infrastructure designed for repeatability, security, and operational resilience.",
            },
            {
              icon: <Shield className="text-emerald-300" />,
              title: "Security-First Design",
              text: "IAM, network controls, origin protection, logging, and hardening built into the system from day one.",
            },
            {
              icon: <Server className="text-emerald-300" />,
              title: "Operational Thinking",
              text: "Monitoring, alerting, incident response, and failure handling treated as core architecture work.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="mb-5">{item.icon}</div>
              <h3 className="font-serif text-3xl text-white">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1520px] px-6 pb-16 lg:px-10 lg:pb-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Why this site</p>
        <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
          A curated technical profile, not a generic portfolio
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          This site is meant to present real technical direction clearly. It focuses on cloud infrastructure, security, observability, automation, and projects that show how I think about production systems.
        </p>
        <Card className="mt-10 max-w-5xl">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">LinkedIn profile export</p>
              <p className="mt-3 text-lg leading-8 text-slate-300">
                "Cloud / DevOps Engineer focused on AWS, Terraform, infrastructure as code, cloud security, and DevSecOps."
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Production-minded systems</p>
              <p className="mt-3 text-lg leading-8 text-slate-300">
                "I focus on systems that are secure, scalable, observable, and designed to keep working when conditions get rough."
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-[1520px] px-6 pb-20 lg:px-10 lg:pb-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Flagship work</p>
        <h2 className="max-w-5xl font-serif text-4xl leading-tight text-white md:text-6xl">
          Projects that best support cloud, DevSecOps, and infrastructure positioning
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          The homepage highlights projects that show secure automation, multi-cloud architecture, production operations, and infrastructure depth.
        </p>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {[
            {
              label: "Multi-Cloud Architecture",
              title: "Multi-Cloud Secure Healthcare Infrastructure",
              body: "A production-style healthcare system connecting AWS and GCP with secure networking, origin protection, observability, compliance-minded logging, and AI-assisted incident response.",
            },
            {
              label: "AI Infrastructure",
              title: "Domain Grounded AI Chat System on AWS",
              body: "A hallucination-resistant RAG system on AWS using S3 documents, S3 Vectors, Bedrock Knowledge Bases, and a Lambda chat API, with optional CloudFront, Route 53, and ACM-based frontend hosting.",
            },
            {
              label: "Infrastructure Positioning",
              title: "Resume and Project Site",
              body: "A static technical profile site built to present architecture depth, project proof, and recruiter-friendly technical signals without unnecessary backend complexity.",
            },
          ].map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">{item.label}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-white">{item.title}</h3>
              <p className="mt-5 flex-1 text-lg leading-8 text-slate-300">{item.body}</p>
              <NavLink to="/projects" className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-100 hover:text-white">
                See project detail <ArrowRight size={17} />
              </NavLink>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="About"
        title="Technical background shaped by infrastructure, security controls, and operational failure modes"
        description="My work centers on building cloud systems that stay reliable under pressure. I focus on infrastructure as code, secure architecture, observability, and DevSecOps practices that make systems easier to operate in the real world."
      />
      <section className="mx-auto grid max-w-[1520px] gap-6 px-6 py-12 lg:px-10 lg:py-16">
        <Card>
          <h2 className="font-serif text-4xl text-white">Current Positioning</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Strongest themes across my work are cloud infrastructure, Terraform-based provisioning, cloud security, containerized workloads, and production-minded monitoring. I care about systems that are not only built, but supportable.
          </p>
        </Card>
        <Card>
          <h2 className="font-serif text-4xl text-white">Operating Style</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I prefer simple, resilient architecture over unnecessary complexity. My approach is security-first, automation-heavy, and focused on reducing failure points before they become operational problems.
          </p>
        </Card>
        <Card>
          <h2 className="font-serif text-4xl text-white">Focus Areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Projects"
        title="Selected infrastructure projects that show cloud architecture, security depth, and operational thinking"
        description="These projects are positioned to show how I approach real systems: networking, secure access, observability, compliance-minded logging, automation, and infrastructure design that can scale beyond a one-off build."
      />
      <section className="mx-auto max-w-[1520px] space-y-8 px-6 py-12 lg:px-10 lg:py-16">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="font-serif text-4xl text-white">{project.title}</h2>
                <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">{project.blurb}</p>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-slate-200">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 leading-8">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Stack</p>
              <p className="mt-3 text-lg leading-8 text-slate-300">{project.stack}</p>
            </div>
            {project.repo && (
              <div className="mt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
                >
                  View GitHub Repo <ExternalLink size={18} />
                </a>
              </div>
            )}
          </Card>
        ))}
      </section>
    </div>
  );
}

function ResumePage() {
  return (
    <div>
      <PageIntro
        eyebrow="Resume"
        title="Experience, credentials, and skills organized for quick technical review"
        description="This page is intentionally scannable. It favors clear evidence over a dense wall of text and gives recruiters or hiring managers a faster way to understand technical direction."
      />
      <section className="mx-auto max-w-[1520px] space-y-8 px-6 py-12 lg:px-10 lg:py-16">
        {experience.map((item) => (
          <Card key={`${item.role}-${item.company}`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="font-serif text-4xl text-white">{item.role}</h2>
                <p className="mt-2 text-lg text-slate-300">{item.company}</p>
              </div>
              <div className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300">{item.dates}</div>
            </div>
            <ul className="mt-8 space-y-4 text-slate-200">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-8">
                  • {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="font-serif text-3xl text-white">Certifications</h3>
            <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
              {certifications.map((cert) => (
                <li key={cert}>• {cert}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-serif text-3xl text-white">Core Skills</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-white">Downloadable Resume</h3>
              <p className="mt-3 text-lg leading-8 text-slate-300">
                Replace the placeholder link in the code with your PDF if you want a direct download button here.
              </p>
            </div>
            <a
              href={profile.resumePdf}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Download PDF <ExternalLink size={18} />
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Contact"
        title="Direct and low-friction contact"
        description="This site is static, so the contact setup is intentionally simple. Use direct links for email, LinkedIn, and GitHub instead of adding a backend form you do not need."
      />
      <section className="mx-auto grid max-w-[1520px] gap-6 px-6 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <Card>
          <h2 className="font-serif text-4xl text-white">Primary Links</h2>
          <div className="mt-8 space-y-5 text-lg text-slate-300">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail size={20} className="text-emerald-300" /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
              <Linkedin size={20} className="text-emerald-300" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
              <Github size={20} className="text-emerald-300" /> GitHub
            </a>
          </div>
        </Card>
        <Card>
          <h2 className="font-serif text-4xl text-white">Why this setup</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A mail link and public profile links keep the site fully static for Cloudflare Pages. That means simpler hosting, lower maintenance, and much less risk of turning a portfolio into a billable application.
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${profile.email}?subject=Website%20Inquiry`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Compose Email <ArrowRight size={18} />
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Shell>
    </HashRouter>
  );
}
