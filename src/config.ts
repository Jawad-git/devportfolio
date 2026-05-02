export const siteConfig = {
  name: "Mohammad Al Moussawi",
  title: "Senior Software Architect & Engineering Lead",
  tagline: "Building resilient distributed systems at planetary scale — 20 years of turning impossible requirements into production reality.",
  description:
    "Portfolio of Mohammad Al Moussawi — Senior Software Architect & Engineering Lead specializing in distributed systems, cloud architecture, and large-scale platform engineering.",
  accentColor: "#00D2FF",
  social: {
    email: "mohammad.almoussawi@gmail.com",
    linkedin: "https://linkedin.com/in/mohammadalmoussawi/",
    github: "https://github.com/malmoussawi",
  },
  aboutMe:
    "I'm a systems architect and engineering leader with two decades of experience designing and shipping software that operates at scale. From bootstrapping real-time trading platforms handling millions of events per second, to leading cloud-native transformations for Fortune 100 companies, I specialize in making complex distributed systems simple, reliable, and fast. I believe great engineering is invisible — when infrastructure just works, teams can focus on what matters.",
  skills: [
    "Distributed Systems",
    "System Design",
    "Cloud Architecture",
    "Machine Learning",
    "DevOps & SRE",
    "Kubernetes",
    "Go",
    "Rust",
    "Python",
    "TypeScript",
    "React",
    "C++",
    "AWS",
    "Google Cloud",
    "Terraform",
    "Event-Driven Architecture",
    "Microservices",
    "Database Engineering",
  ],
  projects: [
    {
      name: "Enterprise Microservices Platform",
      description:
        "Designed and led the development of a company-wide microservices platform serving 200+ services across 12 business units, processing 4.2M requests/second at peak with 99.999% uptime SLA.",
      link: "",
      skills: ["Kubernetes", "Go", "gRPC", "Envoy", "PostgreSQL"],
    },
    {
      name: "AI-Powered Analytics Dashboard",
      description:
        "Architected a real-time analytics platform leveraging ML models for anomaly detection and predictive insights, reducing incident response time by 73% and processing 50TB of streaming data daily.",
      link: "",
      skills: ["Python", "TensorFlow", "Apache Kafka", "React", "ClickHouse"],
    },
    {
      name: "Cloud Migration Framework",
      description:
        "Built an internal framework that automated the migration of 300+ legacy applications from on-premises data centers to multi-cloud infrastructure, completing the 18-month program 3 months ahead of schedule.",
      link: "",
      skills: ["Terraform", "AWS", "Python", "Docker", "Ansible"],
    },
    {
      name: "Real-Time Trading System",
      description:
        "Led the architecture of a low-latency trading engine processing 2.4M orders/second with sub-millisecond P99 latency, supporting equities, futures, and crypto markets across 14 exchanges.",
      link: "",
      skills: ["Rust", "C++", "Kafka", "Redis", "eBPF"],
    },
    {
      name: "Global CDN Optimization Engine",
      description:
        "Designed an intelligent content delivery system with predictive caching and edge computation, reducing global latency by 42% and saving $8.2M annually in bandwidth costs across 180+ edge locations.",
      link: "",
      skills: ["Go", "Cloudflare Workers", "Lua", "Prometheus", "Grafana"],
    },
    {
      name: "Healthcare Data Platform",
      description:
        "Architected a HIPAA-compliant data platform handling 15M patient records with real-time streaming analytics, enabling clinical researchers to run cohort studies in seconds instead of days.",
      link: "",
      skills: ["AWS", "Apache Spark", "Python", "PostgreSQL", "Kubernetes"],
    },
    {
      name: "Autonomous Deployment Pipeline",
      description:
        "Designed a zero-downtime deployment system with canary analysis, automated rollback, and progressive delivery, reducing deployment failures by 94% across 500+ microservices.",
      link: "",
      skills: ["Go", "Kubernetes", "ArgoCD", "Prometheus", "Istio"],
    },
    {
      name: "Distributed Ledger Settlement System",
      description:
        "Led a team of 14 engineers building a settlement engine for cross-border payments processing $2.1B daily, with full regulatory compliance across 23 jurisdictions.",
      link: "",
      skills: ["Rust", "TypeScript", "PostgreSQL", "RabbitMQ", "AWS"],
    },
    {
      name: "Observability & Reliability Platform",
      description:
        "Built an internal observability stack handling 50M metrics/second with custom tracing, log aggregation, and intelligent alerting, replacing 3 commercial tools and saving $4.5M/year.",
      link: "",
      skills: ["Go", "OpenTelemetry", "ClickHouse", "Grafana", "Kafka"],
    },
    {
      name: "Edge Computing Gateway",
      description:
        "Created a lightweight edge runtime for IoT data processing at 12,000+ remote sites, enabling real-time ML inference at the edge with 200ms response times on constrained hardware.",
      link: "",
      skills: ["Rust", "Python", "MQTT", "TensorFlow Lite", "Docker"],
    },
  ],
  experience: [
    {
      company: "Google",
      title: "Principal Engineer, Distributed Systems",
      dateRange: "2019 – Present",
      bullets: [
        "Lead architecture for Cloud Run's multi-region data plane, serving 2M+ active deployments across 40 regions with 99.99%+ availability.",
        "Drove the adoption of service mesh architecture (Istio/envoy) across Google Cloud Platform, reducing service-to-service latency by 35%.",
        "Mentor a team of 18 senior engineers and serve on the company-wide Architecture Review Board.",
        "Authored 3 internal RFCs that became foundational design documents for Google's next-generation serverless platform.",
        "Reduced global cold-start latency by 58% through novel container pre-warming and scheduling strategies.",
      ],
    },
    {
      company: "Amazon Web Services",
      title: "Senior Staff Engineer, Platform Architecture",
      dateRange: "2013 – 2019",
      bullets: [
        "Architected the next-generation ECS scheduler handling 8M+ container launches/day, reducing scheduling latency by 40%.",
        "Led the design of AWS Fargate's networking stack, enabling serverless container execution for 500K+ customers.",
        "Owned the operational excellence charter for the container platform, achieving 99.97% SLA across 25 regions.",
        "Drove migration from monolithic orchestration to microservices, cutting deployment time from 4 hours to 12 minutes.",
        "Received the AWS Inventor Award for 7 patents related to container placement and auto-scaling algorithms.",
      ],
    },
    {
      company: "Microsoft",
      title: "Senior Software Engineer, Azure DevOps",
      dateRange: "2007 – 2013",
      bullets: [
        "Core contributor to Azure Service Fabric's reliability subsystem, achieving 99.95% uptime for stateful microservices.",
        "Designed and implemented the CI/CD pipeline framework used internally by 200+ engineering teams at Microsoft.",
        "Led the performance optimization initiative that reduced Azure DevOps build times by 65% across the platform.",
        "Built real-time log aggregation and search system processing 2TB/day of build and deployment telemetry.",
      ],
    },
    {
      company: "Intel Corporation",
      title: "Software Engineer, Systems Software",
      dateRange: "2005 – 2007",
      bullets: [
        "Developed firmware and low-level drivers for next-generation Xeon processors, contributing to a 22% IPC improvement.",
        "Wrote high-performance memory allocators and threading primitives used across Intel's compiler toolchain.",
        "Built internal benchmarking frameworks for CPU microarchitecture validation, adopted by 5 product lines.",
      ],
    },
  ],
  education: [
    {
      school: "MIT",
      degree: "M.S. Computer Science — Distributed Systems & Theory",
      dateRange: "2003 – 2005",
      achievements: [
        "Thesis: 'Consensus Protocols in Asynchronous Distributed Networks' — cited 340+ times.",
        "Research assistant in the Parallel & Distributed Operating Systems group.",
        "Published 2 papers at SOSP and OSDI on fault-tolerant distributed computation.",
      ],
    },
    {
      school: "American University of Beirut",
      degree: "B.S. Computer Science — Summa Cum Laude",
      dateRange: "1999 – 2003",
      achievements: [
        "Valedictorian, graduating first in the Faculty of Engineering & Computer Science.",
        "Won 3 ACM-ICPC regional medals and represented the university at World Finals.",
        "Undergraduate thesis on real-time operating system schedulers awarded departmental honors.",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect — Professional",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      year: "2020",
    },
  ],
  testimonials: [
    {
      quote:
        "Mohammad is the rare engineer who can architect a system that handles a billion requests and explain the design to a room full of executives without missing a beat. His technical depth and leadership transformed our entire platform organization.",
      name: "Sarah Chen",
      title: "VP of Engineering, Google Cloud",
    },
    {
      quote:
        "I've worked with hundreds of engineers over my career, and Mohammad stands in a category of his own. He doesn't just solve problems — he dissolves them by designing systems where the problems can't exist in the first place.",
      name: "David Park",
      title: "Distinguished Engineer, Amazon Web Services",
    },
    {
      quote:
        "When our trading system was falling apart at 2M orders/sec, Mohammad walked in, redesigned the core architecture over a weekend, and we've been running at 99.999% uptime ever since. The man operates at a different frequency.",
      name: "Elena Volkov",
      title: "CTO, Apex Capital Markets",
    },
    {
      quote:
        "Mohammad's ability to balance long-term architectural vision with short-term delivery needs is unmatched. He built our entire cloud migration framework and somehow made migrating 300 services feel routine.",
      name: "Marcus Thompson",
      title: "Senior Director of Platform Engineering, Stripe",
    },
  ],
  currentlyLearning: [
    "WebAssembly (Wasm) for edge computing and serverless runtimes",
    "Formal verification of distributed systems using TLA+ and Lean",
    "Advanced eBPF programming for kernel-level observability",
    "Large language model (LLM) inference optimization and quantization techniques",
  ],
};