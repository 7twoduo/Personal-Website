import React from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Network,
  Server,
  Shield,
  Terminal,
} from "lucide-react";

const profile = {
  name: "Gavin Fogwe",
  shortName: "GAVIN FOGWE",
  title: "Cloud Engineer • AWS Engineer • DevOps Engineer",
  subtitle:
    "I build secure, observable, production-minded cloud systems with AWS, GCP, Terraform, CI/CD, and security-first infrastructure design.",
  positioning:
    "Cloud infrastructure builder focused on security, reliability, automation, and real business outcomes.",
  location: "United States",
  citizenship: "US Citizen",
  email: "davekabello@gmail.com",
  github: "https://github.com/7twoduo",
  linkedin: "https://www.linkedin.com/in/sama-engineer",
  website: "https://gavinfogwe.win/#/",
};

const projectLinks = {
  p1: "https://github.com/7twoduo/Secure-Multi-Tier-AWS-Application-Platform-with-Private-Database-Connectivity",
  p2: "https://github.com/7twoduo/Zero-Trust-Vendor-Access-Control-Plane-on-AWS",
  p3: "https://github.com/7twoduo/Enterprise-Serverless-API-Security-Platform-on-AWS",
  p4: "https://github.com/7twoduo/GCP-Runtime-Domain-Load-Balancer",
  p5: "https://github.com/7twoduo/Secure-Multi-Cloud-Medical-Application-Platform-with-Japan-Resident-Database-Connectivity",
  p6: "https://gitlab.com/7twoduo/guardian-lite",
};

const projects = [
  {
    id: "01",
    tier: "AWS Production Build",
    title: "Secure Multi-Tier AWS Application Platform",
    subtitle: "Private database connectivity, hardened network tiers, and production-style operations.",
    problem:
      "Businesses need application platforms where public traffic can reach the app layer without exposing the database or weakening the network boundary.",
    solution:
      "Designed a multi-tier AWS environment with isolated networking, controlled ingress, private database access, monitoring, and repeatable Terraform provisioning.",
    impact: [
      "Demonstrates VPC design, private subnets, routing, security groups, and application-to-database isolation.",
      "Shows infrastructure-as-code discipline with a deployment pattern that can be reviewed, repeated, and improved.",
      "Positions the build as production-minded instead of a simple public EC2 demo.",
    ],
    stack: ["AWS", "Terraform", "VPC", "ALB", "EC2", "RDS", "IAM", "CloudWatch", "Security Groups"],
    repo: projectLinks.p1,
  },
  {
    id: "02",
    tier: "Zero Trust Access",
    title: "Zero-Trust Vendor Access Control Plane on AWS",
    subtitle: "Controlled third-party access without treating the network as automatically trusted.",
    problem:
      "Organizations need vendor access that is limited, auditable, temporary, and aligned to least privilege instead of permanent broad access.",
    solution:
      "Built a control-plane style access design focused on identity boundaries, conditional access, audit evidence, and reduced exposure for external operators.",
    impact: [
      "Highlights IAM thinking, access governance, session visibility, and operational control.",
      "Shows how vendor workflows can be designed around traceability instead of blind trust.",
      "Strong signal for cloud security, GRC-aware engineering, and enterprise access patterns.",
    ],
    stack: ["AWS", "IAM", "CloudTrail", "SSM", "Terraform", "Least Privilege", "Audit Logging"],
    repo: projectLinks.p2,
  },
  {
    id: "03",
    tier: "Serverless Security",
    title: "Enterprise Serverless API Security Platform on AWS",
    subtitle: "Secured API patterns with serverless compute, edge controls, logging, and throttling.",
    problem:
      "APIs become business-critical quickly, but weak auth, missing rate limits, and poor logging turn them into security and reliability risks.",
    solution:
      "Built a serverless API security platform with API Gateway, Lambda, WAF-style controls, usage limits, logging, and operational visibility.",
    impact: [
      "Demonstrates secure API architecture without maintaining servers.",
      "Shows cloud-native security controls around request handling, throttling, observability, and deployment repeatability.",
      "Useful proof for AWS, DevSecOps, and platform engineering conversations.",
    ],
    stack: ["AWS", "API Gateway", "Lambda", "WAF", "IAM", "CloudWatch", "Terraform", "DevSecOps"],
    repo: projectLinks.p3,
  },
  {
    id: "04",
    tier: "GCP Runtime Platform",
    title: "GCP Runtime Domain Load Balancer",
    subtitle: "Runtime deployment with managed load balancing, domain routing, HTTPS, and security policy design.",
    problem:
      "Cloud applications need a clean path from domain to load balancer to healthy runtime instances while keeping security and reliability visible.",
    solution:
      "Built a GCP platform using runtime instances, load balancing, domain configuration, managed certificate flow, and edge policy controls.",
    impact: [
      "Shows GCP infrastructure skills beyond AWS-only positioning.",
      "Demonstrates load balancing, DNS, TLS, health checks, and runtime operations.",
      "Strengthens multi-cloud credibility for Cloud Engineer and DevOps Engineer roles.",
    ],
    stack: ["GCP", "Terraform", "Cloud DNS", "HTTPS Load Balancer", "Cloud Armor", "MIG", "Certificate Manager"],
    repo: projectLinks.p4,
  },
  {
    id: "05",
    tier: "Multi-Cloud Architecture",
    title: "Secure Multi-Cloud Medical Application Platform",
    subtitle: "Japan-resident database connectivity with AWS + GCP networking and security controls.",
    problem:
      "Healthcare-style systems often need strict data locality, secure cross-cloud routing, private connectivity, and compliance-minded logging.",
    solution:
      "Designed a multi-cloud platform with Japan-resident database connectivity, AWS and GCP application tiers, controlled traffic flow, WAF protection, and observability.",
    impact: [
      "Demonstrates advanced network architecture across providers.",
      "Shows security design for sensitive workloads, data residency, origin protection, and logging.",
      "Creates a flagship architecture story for senior technical interviews.",
    ],
    stack: ["AWS", "GCP", "Terraform", "Transit Gateway", "VPN", "BGP", "CloudFront", "WAF", "RDS", "CloudWatch"],
    repo: projectLinks.p5,
    featured: true,
  },
  {
    id: "06",
    tier: "CI/CD Security Gate",
    title: "Guardian Lite",
    subtitle: "GitLab security gate that reviews infrastructure risk before deployment.",
    problem:
      "Infrastructure changes can introduce public exposure, weak IAM, unencrypted storage, or missing governance before teams notice the damage.",
    solution:
      "Built a lightweight security gate for Terraform-driven workflows that checks infrastructure intent before changes move forward in CI/CD.",
    impact: [
      "Shows DevSecOps thinking through pipeline-level enforcement.",
      "Demonstrates Go, GitLab CI, Terraform plan review, and deployment governance.",
      "Gives interviewers a clear example of preventing cloud risk before runtime.",
    ],
    stack: ["Go", "GitLab CI", "Terraform", "OIDC", "AWS", "DevSecOps", "Policy Checks"],
    repo: projectLinks.p6,
    featured: true,
  },
];

const proof = [
  { label: "Flagship Builds", value: "6", detail: "AWS, GCP, multi-cloud, API security, zero trust, and CI/CD security." },
  { label: "Core Direction", value: "Cloud", detail: "Infrastructure, security, automation, networking, observability, and operations." },
  { label: "Primary Tools", value: "IaC", detail: "Terraform-first delivery with reproducible architecture and reviewable changes." },
];

const experience = [
  {
    role: "Cloud Engineer",
    company: "BlueLine Security Services",
    dates: "2024 – Present",
    bullets: [
      "Built and supported AWS infrastructure patterns involving IAM, VPC networking, compute, monitoring, and secure configuration.",
      "Used Terraform to make infrastructure changes repeatable, reviewable, and easier to troubleshoot.",
      "Supported cloud security workflows through logging, alert review, access control, remediation, and operational documentation.",
      "Worked across production-style troubleshooting scenarios involving Linux, networking, CloudWatch, IAM permissions, and deployment failures.",
      "Integrated security thinking into cloud delivery instead of treating security as a final checklist item.",
    ],
  },
];

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Security – Specialty",
  "AWS Certified AI Practitioner",
  "HashiCorp Terraform Associate",
  "CompTIA Security+",
  "CompTIA CySA+",
  "ISC2 Certified in Cybersecurity",
];

const strengths = [
  "AWS Infrastructure",
  "GCP Infrastructure",
  "Terraform / IaC",
  "Cloud Security",
  "DevSecOps",
  "CI/CD Pipelines",
  "VPC Networking",
  "IAM / Least Privilege",
  "CloudWatch / Logging",
  "API Gateway / Lambda",
  "Cloudflare Pages",
  "Linux Troubleshooting",
];

const navLinkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? "bg-red-500/15 text-red-100 ring-1 ring-red-300/30"
      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
  }`;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Shell({ children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050006] text-zinc-100">
      <div className="eclipse-background" />
      <div className="ember-field" />
      <header className="sticky top-0 z-50 border-b border-red-100/10 bg-[#050006]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 lg:px-8">
          <NavLink to="/" className="group inline-flex items-center gap-3" end>
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-red-300/20 bg-red-500/10 text-lg font-black text-red-100 shadow-[0_0_40px_rgba(220,38,38,0.25)] transition group-hover:rotate-[-8deg]">
              GF
            </span>
            <span>
              <span className="block text-xs font-bold tracking-[0.32em] text-zinc-100">{profile.shortName}</span>
              <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-red-200/70">Cloud systems under pressure</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
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

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-red-300/40 hover:bg-red-500/10 md:inline-flex md:items-center md:gap-2"
          >
            <Github size={17} /> GitHub
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-16 lg:px-8 lg:pt-24">
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-red-200/80">{eyebrow}</p>
        <h1 className="max-w-6xl text-balance font-serif text-4xl leading-[1.03] text-white md:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{description}</p>
      </motion.div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card-void rounded-[2rem] border border-white/10 bg-zinc-950/55 p-6 shadow-2xl shadow-black/30 lg:p-8 ${className}`}>{children}</div>;
}

function Badge({ children }) {
  return <span className="rounded-full border border-red-200/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-zinc-300">{children}</span>;
}

function EclipseSigil() {
  return (
    <div className="hero-stage mx-auto aspect-square w-full max-w-[560px]">
      <motion.div
        className="sigil-system"
        initial={{ opacity: 0, rotateX: 14, rotateY: -18, scale: 0.92 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="sigil-ring ring-one" />
        <div className="sigil-ring ring-two" />
        <div className="sigil-ring ring-three" />
        <div className="sigil-core">
          <div className="sigil-blade" />
          <div className="sigil-blade sigil-blade-two" />
          <div className="sigil-node node-one">AWS</div>
          <div className="sigil-node node-two">GCP</div>
          <div className="sigil-node node-three">IaC</div>
          <div className="sigil-node node-four">SEC</div>
        </div>
        <div className="sigil-terminal">
          <span className="text-red-200">$</span> terraform plan
          <br />
          <span className="text-red-200">$</span> deploy --hardened --observable
        </div>
      </motion.div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1480px] items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="mb-5 inline-flex rounded-full border border-red-200/15 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-red-100 shadow-[0_0_40px_rgba(127,29,29,0.25)]">
            Dark fantasy theme • enterprise cloud execution
          </div>
          <h1 className="text-balance font-serif text-5xl leading-[0.98] text-white md:text-7xl xl:text-[6.8rem]">
            Build like the system is already under attack.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-300 md:text-2xl">{profile.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">{profile.positioning}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <NavLink to="/projects" className="btn-primary">
              View flagship projects <ArrowRight size={18} />
            </NavLink>
            <NavLink to="/resume" className="btn-secondary">
              Resume signal <FileText size={18} />
            </NavLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-red-200/80">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <EclipseSigil />
      </section>

      <section className="mx-auto max-w-[1480px] px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <Cloud />,
              title: "Cloud Engineering",
              text: "AWS and GCP infrastructure with networking, compute, domains, load balancing, TLS, monitoring, and automation.",
            },
            {
              icon: <Shield />,
              title: "Security by Design",
              text: "IAM boundaries, private connectivity, logging, WAF controls, zero-trust access patterns, and secure-by-default architecture.",
            },
            {
              icon: <Terminal />,
              title: "DevOps Execution",
              text: "Terraform, CI/CD, GitLab/GitHub workflows, deployment gates, repeatable environments, and operational troubleshooting.",
            },
          ].map((item) => (
            <Card key={item.title} className="project-3d min-h-[280px]">
              <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl border border-red-200/10 bg-red-500/10 text-red-100">{item.icon}</div>
              <h2 className="font-serif text-3xl text-white">{item.title}</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.34em] text-red-200/80">Recruiter-facing proof</p>
            <h2 className="max-w-5xl font-serif text-4xl leading-tight text-white md:text-6xl">Six projects. One message: I can build cloud systems that survive pressure.</h2>
          </div>
          <NavLink to="/projects" className="btn-secondary w-fit">
            Full project room <ArrowRight size={18} />
          </NavLink>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.filter((p) => p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, compact = false }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className="project-3d card-void group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/60 p-6 shadow-2xl shadow-black/30 lg:p-8"
    >
      <div className="absolute right-6 top-6 text-6xl font-black text-white/[0.035] transition group-hover:text-red-200/10 md:text-8xl">{project.id}</div>
      <div className="relative z-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-red-200/15 bg-red-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-red-100">{project.tier}</span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">{project.stack.slice(0, 3).join(" • ")}</span>
        </div>
        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-4xl">{project.title}</h2>
        <p className="mt-4 text-lg leading-8 text-zinc-300">{project.subtitle}</p>

        <div className={`mt-7 grid gap-4 ${compact ? "" : "xl:grid-cols-3"}`}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-red-200/80">Problem</p>
            <p className="text-sm leading-7 text-zinc-300">{project.problem}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-red-200/80">Solution</p>
            <p className="text-sm leading-7 text-zinc-300">{project.solution}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-red-200/80">Signal</p>
            <p className="text-sm leading-7 text-zinc-300">{project.impact[0]}</p>
          </div>
        </div>

        {!compact && (
          <ul className="mt-7 grid gap-3 lg:grid-cols-3">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-red-200" size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={`${project.id}-${item}`}>{item}</Badge>
          ))}
        </div>

        <div className="mt-8">
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn-primary">
            Open repository <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project war room"
        title="Infrastructure evidence built for cloud engineering, AWS engineering, DevOps, and security interviews."
        description="Each project is framed around business risk, architecture decisions, operational controls, and the hiring signal it creates. This is not a gallery. It is technical proof."
      />
      <section className="mx-auto max-w-[1480px] space-y-8 px-5 pb-20 lg:px-8 lg:pb-28">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}

function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Resume signal"
        title="Cloud engineer profile built around security, automation, networking, and production troubleshooting."
        description="This page is intentionally fast to scan. Recruiters should understand the target roles, strongest technical signals, certifications, and project depth without digging through the entire site."
      />
      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28">
        <div className="space-y-6">
          <Card>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-red-200/10 bg-red-500/10 text-red-100">
              <FileText />
            </div>
            <h2 className="font-serif text-3xl text-white">Target Roles</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Cloud Engineer", "AWS Engineer", "DevOps Engineer", "Cloud Security Engineer", "Infrastructure Engineer"].map((role) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-red-200/10 bg-red-500/10 text-red-100">
              <Award />
            </div>
            <h2 className="font-serif text-3xl text-white">Certifications</h2>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-red-200" size={18} />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={`${job.role}-${job.company}`}>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-red-200/80">Experience</p>
                  <h2 className="mt-3 font-serif text-4xl text-white">{job.role}</h2>
                  <p className="mt-2 text-lg text-zinc-300">{job.company}</p>
                </div>
                <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">{job.dates}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-zinc-300">
                    <CheckCircle2 className="mt-1 shrink-0 text-red-200" size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          <Card>
            <h2 className="font-serif text-3xl text-white">Core Technical Signals</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="For cloud, AWS, DevOps, infrastructure, and security-focused opportunities."
        description="The site stays static for Cloudflare Pages. Contact stays simple: email, GitHub, LinkedIn, and the live portfolio."
      />
      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <Card>
          <h2 className="font-serif text-4xl text-white">Primary Links</h2>
          <div className="mt-8 space-y-4">
            <a className="contact-link" href={`mailto:${profile.email}?subject=Cloud%20Engineering%20Opportunity`}>
              <Mail size={20} /> {profile.email}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={20} /> GitHub Profile
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} /> LinkedIn Profile
            </a>
            <a className="contact-link" href={profile.website} target="_blank" rel="noreferrer">
              <Globe2 size={20} /> Live Portfolio
            </a>
          </div>
        </Card>

        <Card>
          <h2 className="font-serif text-4xl text-white">What I am looking for</h2>
          <div className="mt-8 space-y-4">
            {[
              "Cloud Engineer roles focused on AWS infrastructure, Terraform, networking, monitoring, and production support.",
              "AWS Engineer roles involving VPCs, IAM, compute, load balancing, CloudWatch, automation, and secure deployments.",
              "DevOps Engineer roles involving CI/CD, infrastructure as code, deployment reliability, and cloud operations.",
              "Cloud Security roles involving IAM, logging, hardening, access control, detection, and remediation.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-base leading-7 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}

function HomeMobileNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border border-white/10 bg-black/70 p-1 backdrop-blur-xl md:hidden">
      <NavLink to="/" className={navLinkClass} end>
        Home
      </NavLink>
      <NavLink to="/projects" className={navLinkClass}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <HomeMobileNav />
      </Shell>
    </HashRouter>
  );
}
