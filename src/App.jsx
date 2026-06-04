import React, { useMemo, useState } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  Layers3,
  Lock,
  Mail,
  Network,
  Server,
  Shield,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import "./index.css";

const CALENDLY_URL = ""; // Add later: "https://calendly.com/YOUR-HANDLE/30min"

const profile = {
  name: "Gavin Fogwe",
  label: "CLOUD ENGINEER",
  title: "Cloud Engineer building secure, automated infrastructure that proves business value.",
  pitch:
    "I design AWS, GCP, DevSecOps, and infrastructure-as-code systems with the mindset hiring teams care about: security, reliability, automation, observability, and production readiness.",
  email: "davekabello@gmail.com",
  github: "https://github.com/7twoduo",
  linkedin: "https://www.linkedin.com/in/sama-engineer",
};

const heroSkills = ["AWS", "Terraform", "DevSecOps", "Cloud Security", "CI/CD", "GCP", "Kubernetes", "Monitoring"];

const cubeNodes = [
  { label: "AWS", detail: "Multi-account infrastructure, IAM, VPCs, CloudFront, WAF, RDS" },
  { label: "Terraform", detail: "Repeatable IaC, modules, environment separation, import-ready design" },
  { label: "CI/CD", detail: "GitHub/GitLab pipelines with security gates and deployment controls" },
  { label: "K8s", detail: "Containers, service exposure, deployment health, platform fundamentals" },
  { label: "GCP", detail: "Runtime platforms, load balancing, domains, Cloud Armor patterns" },
  { label: "Security", detail: "Zero trust, logging, least privilege, WAF, detection, hardening" },
];

const certifications = [
  "AWS Certified Security – Specialty",
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified AI Practitioner",
  "HashiCorp Terraform Associate",
  "CompTIA CySA+",
  "CompTIA Security+",
  "ISC2 Certified in Cybersecurity",
];

const projects = [
  {
    id: "aws-private-db",
    eyebrow: "AWS • VPC • Private Database",
    title: "Secure Multi-Tier AWS Application Platform",
    description:
      "A private-database application platform built to demonstrate production network segmentation, controlled application access, and secure AWS infrastructure design.",
    impact: "Shows core cloud engineering ability: VPC design, application tiers, private data access, and operational security controls.",
    tags: ["AWS", "VPC", "EC2", "RDS", "Security Groups", "Terraform"],
    repo: "https://github.com/7twoduo/Secure-Multi-Tier-AWS-Application-Platform-with-Private-Database-Connectivity",
    diagram: "/diagrams/project-1-secure-multitier.svg",
  },
  {
    id: "zero-trust-vendor",
    eyebrow: "Zero Trust • IAM • Access Control",
    title: "Zero-Trust Vendor Access Control Plane on AWS",
    description:
      "A vendor access model designed around controlled entry, least privilege, identity boundaries, and auditable security decisions.",
    impact: "Demonstrates how cloud access can be granted without turning vendor access into permanent standing privilege.",
    tags: ["IAM", "Zero Trust", "Access Control", "Audit", "AWS"],
    repo: "https://github.com/7twoduo/Zero-Trust-Vendor-Access-Control-Plane-on-AWS",
    diagram: "/diagrams/project-2-zero-trust.svg",
  },
  {
    id: "serverless-api-security",
    eyebrow: "Serverless • API Gateway • WAF",
    title: "Enterprise Serverless API Security Platform",
    description:
      "A secure serverless API platform with security controls, API protection, logging, and automated operational patterns.",
    impact: "Proves ability to think beyond code execution and design APIs around protection, observability, and reliability.",
    tags: ["Lambda", "API Gateway", "WAF", "CloudWatch", "IAM", "Security"],
    repo: "https://github.com/7twoduo/Enterprise-Serverless-API-Security-Platform-on-AWS",
    diagram: "/diagrams/project-3-serverless-api.svg",
  },
  {
    id: "gcp-runtime-lb",
    eyebrow: "GCP • Load Balancing • Runtime",
    title: "GCP Runtime Domain Load Balancer",
    description:
      "A Google Cloud runtime deployment with domain routing, load balancing, edge controls, and production-style exposure patterns.",
    impact: "Expands the portfolio beyond AWS and shows practical multi-cloud readiness for infrastructure roles.",
    tags: ["GCP", "Load Balancer", "DNS", "Cloud Armor", "Runtime"],
    repo: "https://github.com/7twoduo/GCP-Runtime-Domain-Load-Balancer",
    diagram: "/diagrams/project-4-gcp-runtime.svg",
  },
  {
    id: "multi-cloud-medical",
    eyebrow: "AWS + GCP • VPN • Healthcare Pattern",
    title: "Secure Multi-Cloud Medical Application Platform",
    description:
      "A multi-cloud medical application architecture with Japan-resident database connectivity, private network paths, edge security, and monitoring.",
    impact: "This is the flagship architecture project: multi-region, multi-cloud, security-aware, and built around real business constraints.",
    tags: ["AWS", "GCP", "TGW", "VPN", "CloudFront", "WAF", "RDS"],
    repo: "https://github.com/7twoduo/Secure-Multi-Cloud-Medical-Application-Platform-with-Japan-Resident-Database-Connectivity",
    diagram: "/diagrams/project-5-multicloud-medical.svg",
  },
  {
    id: "guardian-lite",
    eyebrow: "GitLab • Terraform Plan Security • DevSecOps",
    title: "Guardian Lite Security Gate",
    description:
      "A DevSecOps security gate that scans Terraform plan output and blocks unsafe cloud infrastructure changes before deployment.",
    impact: "Shows cloud security engineering in the pipeline, where risk is stopped before it reaches production.",
    tags: ["GitLab", "Terraform", "Security Gate", "Policy", "DevSecOps"],
    repo: "https://gitlab.com/7twoduo/guardian-lite",
    diagram: "/diagrams/project-6-guardian-lite.svg",
  },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "Cloud Engineering Portfolio Buildout",
    type: "AWS / GCP / Terraform / DevSecOps",
    text: "Built a focused project portfolio around secure infrastructure, private networking, serverless API security, multi-cloud patterns, and deployment automation.",
  },
  {
    year: "2024 – Present",
    title: "BlueLine Security Services",
    type: "Cloud Security / Cloud Engineering",
    text: "Worked across cloud security operations, IAM, monitoring, remediation support, and infrastructure automation patterns.",
  },
  {
    year: "Certification Track",
    title: "Security + Cloud + Terraform Credentials",
    type: "AWS / CompTIA / HashiCorp / ISC2",
    text: "Built a credential stack that supports cloud engineering, DevSecOps, cloud security, and infrastructure automation roles.",
  },
];

const navItems = [
  { href: "#tech", label: "TECH" },
  { href: "#certs", label: "CERTS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#timeline", label: "TIMELINE" },
  { href: "#contact", label: "CONTACT" },
];

function scrollToId(id) {
  const element = document.querySelector(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToId("#home"); }}>
        <span className="brand-bracket">&lt;</span>GAVIN.FOGWE<span className="brand-bracket">/&gt;</span>
      </a>
      <nav className="top-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); scrollToId(item.href); }}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Badge({ children, icon }) {
  return (
    <span className="mini-badge">
      {icon}
      {children}
    </span>
  );
}

function CloudCube({ activeNode, setActiveNode }) {
  return (
    <div className="cube-stage" aria-label="Interactive cloud engineering cube">
      <div className="cube-orbit orbit-one" />
      <div className="cube-orbit orbit-two" />
      <div className="cube-grid" />
      <div className="cube">
        <div className="cube-face cube-front">AWS</div>
        <div className="cube-face cube-back">IAM</div>
        <div className="cube-face cube-right">CI/CD</div>
        <div className="cube-face cube-left">GCP</div>
        <div className="cube-face cube-top">TF</div>
        <div className="cube-face cube-bottom">SEC</div>
      </div>
      <div className="cube-nodes">
        {cubeNodes.map((node, index) => (
          <button
            key={node.label}
            className={`cube-node node-${index + 1} ${activeNode.label === node.label ? "active" : ""}`}
            onClick={() => setActiveNode(node)}
            type="button"
          >
            {node.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [activeNode, setActiveNode] = useState(cubeNodes[0]);

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-copy">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge icon={<Sparkles size={14} />}>{profile.label}</Badge>
          <h1 className="hero-title">
            <span>GAVIN</span>
            <span className="neon-word">FOGWE</span>
          </h1>
          <p className="hero-subtitle">{profile.pitch}</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollToId("#projects")} type="button">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="secondary-btn" onClick={() => scrollToId("#contact")} type="button">
              Contact Me <Mail size={18} />
            </button>
          </div>
          <div className="hero-tags">
            {heroSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="hero-proof">
            <div>
              <strong>6</strong>
              <span>flagship builds</span>
            </div>
            <div>
              <strong>AWS</strong>
              <span>security focus</span>
            </div>
            <div>
              <strong>IaC</strong>
              <span>automation-first</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
        <CloudCube activeNode={activeNode} setActiveNode={setActiveNode} />
        <div className="cube-caption">
          <span>{activeNode.label}</span>
          <p>{activeNode.detail}</p>
        </div>
      </motion.div>
      <button className="scroll-cue" type="button" onClick={() => scrollToId("#tech")}>
        <span>Scroll for proof</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}

function TechSection() {
  const cards = [
    {
      icon: <Cloud />,
      title: "Cloud Infrastructure",
      text: "AWS and GCP systems built around VPCs, edge routing, private services, domains, compute, and secure application delivery.",
    },
    {
      icon: <Shield />,
      title: "Security Engineering",
      text: "IAM boundaries, zero-trust access, WAF controls, least privilege, logging, and security-first architecture decisions.",
    },
    {
      icon: <Workflow />,
      title: "DevSecOps Automation",
      text: "Terraform, CI/CD, plan review, security gates, deployment discipline, and repeatable infrastructure workflows.",
    },
    {
      icon: <Network />,
      title: "Networking & Reliability",
      text: "Private connectivity, load balancing, DNS, VPN patterns, monitoring, alerting, and production-style failure awareness.",
    },
  ];

  return (
    <section id="tech" className="content-section section-shell">
      <SectionHeader kicker="TECH STACK" title="Built for the roles hiring teams are actually trying to fill." text="The site is structured around signals that matter for Cloud Engineer, AWS Engineer, DevOps Engineer, Cloud Security Engineer, and Infrastructure Engineer roles." />
      <div className="tech-grid">
        {cards.map((card) => (
          <motion.article className="glass-card tech-card" key={card.title} whileHover={{ y: -8, rotateX: 2 }}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function CertificationSection() {
  const [guess, setGuess] = useState(null);
  const correct = certifications.length;
  const options = [4, 5, 6, 7, 8];
  const isCorrect = guess === correct;

  return (
    <section id="certs" className="cert-section section-shell">
      <SectionHeader kicker="INTERACTIVE" title={<>How many cloud/security certifications do I hold?</>} text="A fast proof section for recruiters who want credentials before reading every project." />
      <div className="guess-row">
        {options.map((option) => (
          <button key={option} className={`guess-btn ${guess === option ? "selected" : ""}`} onClick={() => setGuess(option)} type="button">
            {option}
          </button>
        ))}
      </div>
      {guess && (
        <div className="guess-result">
          {isCorrect ? <CheckCircle2 size={18} /> : <Award size={18} />}
          <span>{isCorrect ? "Correct — 7 verified cloud/security credentials." : `Close — higher than ${guess}.`}</span>
        </div>
      )}
      <div className="cert-orbit-panel">
        <div className="cert-core">
          <span>{correct}</span>
          <p>certifications</p>
        </div>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div className={`cert-pill cert-${index + 1}`} key={cert}>
              <Award size={16} />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-shell">
      <SectionHeader kicker="CLOUD PROJECTS" title={<>Featured infrastructure projects</>} text="Each card is built with a custom architecture-style visual so the project grid looks recruiter-ready, not like plain repository links." />
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article className="project-card" key={project.id} whileHover={{ y: -10 }}>
            <div className="project-image-wrap">
              <img src={project.diagram} alt={`${project.title} architecture diagram`} className="project-image" loading="lazy" />
            </div>
            <div className="project-body">
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-impact">
                <Lock size={16} />
                <span>{project.impact}</span>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Github size={17} /> Source <ExternalLink size={15} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="timeline" className="timeline-section section-shell">
      <SectionHeader kicker="CAREER TIMELINE" title="A direct path toward cloud engineering impact." text="This section keeps the story simple: security foundation, cloud infrastructure, automation, and production-minded project proof." />
      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.article className="timeline-item" key={item.title} initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p className="timeline-type">{item.type}</p>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section section-shell">
      <SectionHeader kicker="BOOK A CALL" title={<>Let&apos;s chat</>} text="This final section is ready for Calendly. Add your Calendly URL once you create the event type." />
      <div className="contact-grid">
        <div className="contact-card glass-card">
          <h3>Direct links</h3>
          <p>Use this site as a conversion page: recruiter lands here, sees proof, clicks the profile, then books or emails.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub Profile</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn</a>
          </div>
        </div>
        <div className="calendly-card">
          {CALENDLY_URL ? (
            <iframe title="Calendly scheduling" src={CALENDLY_URL} className="calendly-frame" />
          ) : (
            <div className="calendly-placeholder">
              <Calendar size={42} />
              <h3>Calendly embed goes here</h3>
              <p>Paste your Calendly event URL into <code>CALENDLY_URL</code> in <code>src/App.jsx</code>.</p>
              <div className="mock-calendly">
                <div><span /> <strong>30 Minute Meeting</strong></div>
                <div className="mock-slots">
                  <button type="button">9:00am</button>
                  <button type="button">10:30am</button>
                  <button type="button">2:00pm</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, text }) {
  return (
    <div className="section-header">
      <Badge icon={<Sparkles size={13} />}>{kicker}</Badge>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Background() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="grain" />
      <div className="eclipse eclipse-one" />
      <div className="eclipse eclipse-two" />
      <div className="vertical-light left" />
      <div className="vertical-light right" />
    </div>
  );
}

export default function App() {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Cloud Engineer",
    url: "https://gavinfogwe.win/",
    sameAs: [profile.github, profile.linkedin],
  }), []);

  return (
    <HashRouter>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="app-shell">
        <Background />
        <Header />
        <main>
          <Hero />
          <TechSection />
          <CertificationSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <footer className="site-footer">
          <span>Gavin Fogwe</span>
          <span>Cloud Engineering • DevSecOps • Security</span>
        </footer>
      </div>
    </HashRouter>
  );
}
