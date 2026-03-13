import { SkillGroup, Project, Article, ExpItem } from '../types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Runtime',
    tags: [
      { name: 'Node.js', url: 'https://nodejs.org/en/docs' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'C++17', url: 'https://en.cppreference.com/w/cpp' },
      { name: 'Python', url: 'https://docs.python.org/3/' },
    ],
  },
  {
    label: 'Backend',
    tags: [
      { name: 'Express.js', url: 'https://expressjs.com/en/4x/api.html' },
      { name: 'gRPC', url: 'https://grpc.io/docs/' },
      { name: 'WebSockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
      { name: 'REST', url: 'https://restfulapi.net/' },
      { name: 'JWT', url: 'https://jwt.io/introduction' },
      { name: 'RBAC', url: 'https://en.wikipedia.org/wiki/Role-based_access_control' },
    ],
  },
  {
    label: 'Data',
    tags: [
      { name: 'MongoDB', url: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/docs/' },
      { name: 'Redis', url: 'https://redis.io/docs/latest/' },
      { name: 'Kafka', url: 'https://kafka.apache.org/documentation/' },
      { name: 'Prisma', url: 'https://www.prisma.io/docs' },
    ],
  },
  {
    label: 'Observability',
    tags: [
      { name: 'Prometheus', url: 'https://prometheus.io/docs/introduction/overview/' },
    ],
  },
  {
    label: 'Infra',
    tags: [
      { name: 'Docker', url: 'https://docs.docker.com/' },
      { name: 'AWS', url: 'https://docs.aws.amazon.com/' },
      { name: 'CI/CD', url: 'https://docs.github.com/en/actions' },
      { name: 'Cloudflare', url: 'https://developers.cloudflare.com/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/docs/home/' },
      { name: 'Turborepo', url: 'https://turbo.build/repo/docs' },
    ],
  },
  {
    label: 'Frontend',
    tags: [
      { name: 'React', url: 'https://react.dev/reference/react' },
      { name: 'Next.js', url: 'https://nextjs.org/docs' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Canvas — Real-Time Collaborative Whiteboard',
    lang: 'TypeScript',
    desc: 'Fully stateless, horizontally scalable real-time whiteboard. Sub-10ms stroke sync across distributed instances via Redis Pub/Sub. Custom WebSocket server with JWT enforced at HTTP upgrade handshake.',
    bullets: [
      'Stateless architecture — scales horizontally behind any load balancer',
      'Redis Pub/Sub for cross-instance broadcast — sub-10ms sync latency',
      'JWT auth at WebSocket upgrade handshake, not client payload',
      'Custom ws server (no Socket.io) — full control over connection lifecycle',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/Light1300/Canvas' }],
  },
  {
    name: 'Real-Time Orderbook Exchange',
    lang: 'TypeScript',
    desc: 'High-performance matching engine with Price-Time Priority algorithm. Decoupled modular architecture using Docker for independent scaling. Real-time data streaming via WebSockets.',
    bullets: [
      'Price-Time Priority matching engine with efficient data structures',
      'WebSocket streams cut UI sync latency vs polling',
      'Dockerized microservices — engine and API scale independently',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/Light1300/Exchange' }],
  },
  {
    name: 'OraKey — gRPC Service',
    lang: 'TypeScript / gRPC',
    desc: 'A gRPC-based service demonstrating efficient binary protocol communication and strongly typed service contracts for microservice communication at scale.',
    bullets: [
      'Protocol Buffers for strongly typed inter-service contracts',
      'gRPC streaming and unary RPC patterns',
      'Designed for microservice-to-microservice communication',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Light1300/OraKey' },
      { label: 'gRPC Repo', url: 'https://github.com/Light1300/Grpc' },
    ],
  },
  {
    name: 'Redis-Compatible In-Memory DB Server',
    lang: 'C++17',
    desc: 'High-performance TCP server implementing the RESP protocol from scratch. Built to understand Redis internals — multithreaded, concurrent clients, sub-10ms latency.',
    bullets: [
      'Multithreaded TCP server — sub-10ms latency under concurrent load',
      '8+ Redis-compatible commands with full RESP protocol compliance',
      'Custom command parser — zero protocol mismatches across 100+ test cases',
    ],
    links: [],
  },
  {
    name: 'Paytm Clone — Payment System',
    lang: 'TypeScript',
    desc: 'Full-stack payments platform with wallet infrastructure, transaction handling, and user account management.',
    bullets: ['Wallet system with atomic transactions', 'Auth, user management, and payment flows'],
    links: [{ label: 'GitHub', url: 'https://github.com/Light1300/Paytm' }],
  },
];

export const ARTICLES: Article[] = [
  {
    num: '01',
    title: 'Building a Streak for Gamification Architecture',
    meta: 'Feb 2026 · 12 min · streak systems, user retention, UTC date logic',
    url: 'https://unraveller.hashnode.dev/building-a-streak-for-gamification-architecture',
  },
  {
    num: '02',
    title: "What happens after you press 'Submit'",
    meta: 'Oct 2025 · 11 min · judge systems, code execution, sandboxing',
    url: 'https://unraveller.hashnode.dev/what-happens-after-you-press-submit',
  },
  {
    num: '03',
    title: 'Creating a PDF Template for AsyncAPI Specifications Using React',
    meta: 'Oct 2024 · 4 min · asyncapi, open-source, templating',
    url: 'https://unraveller.hashnode.dev/creating-a-pdf-template-for-asyncapi-specifications-using-react',
  },
  {
    num: '04',
    title: 'AsyncAPI Generator: A Comprehensive Guide',
    meta: 'Oct 2024 · 5 min · asyncapi, open-source, code generation',
    url: 'https://unraveller.hashnode.dev/asyncapi-generator-a-comprehensive-guide-to-generator-project',
  },
  {
    num: '05',
    title: 'Introduction to Linux: Why You Should Shift from Windows',
    meta: 'Oct 2024 · 6 min · linux, developer environment',
    url: 'https://unraveller.hashnode.dev/why-every-developer-should-shift-to-linux',
  },
];

export const EXPERIENCE: ExpItem[] = [
  {
    company: 'Flickit Pvt. Ltd.',
    role: 'Backend Developer',
    period: 'Oct 2025 → Present · 6 months · Remote',
    status: 'live',
    bullets: [
      'Led V2 backend architecture migration — redesigned MongoDB schema, serverless Node.js Lambda-style handlers with async/await patterns',
      'Engineered advanced aggregation pipelines using $lookup, $expr, $group for leaderboards, drill analytics, cross-collection joins',
      'Built UTC-based streak tracking with timezone-safe date logic and consecutive day validation for user retention',
      'Implemented automated PDF report generation for batch performance analytics with container-based storage',
      'Managed DevOps: Docker containerization, Git workflows, Kubernetes networking (Pods, ClusterIP, NodePort)',
      'Resolved API timeout bugs, socket hang-up errors; implemented concurrency control for high-traffic scoring',
    ],
    stack: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'TypeScript', 'AWS Lambda'],
  },
  {
    company: 'AsyncAPI Generator',
    role: 'Open-Source Maintainer',
    period: 'Oct 2024 → May 2025 · Remote · Hall of Fame',
    status: 'oss',
    bullets: [
      'Core contributor to globally-adopted AsyncAPI Generator — featured in official Hall of Fame Oct 2024',
      'Engineered dependency validation tooling using Arborist & Pacote — reduced CI failures by 30%',
      'Contributed high-impact PRs including #1329 (dependency update validation)',
    ],
    stack: ['Node.js', 'Arborist', 'Pacote', 'CI/CD'],
  },
  {
    company: 'Blink42',
    role: 'Web Development Intern',
    period: 'Apr 2024 → Aug 2024 · Belgaum, IN',
    status: 'past',
    bullets: [
      'Built and deployed YellowShuttl — Next.js production platform serving 600+ daily users',
      'Improved Lighthouse scores 40% via code-splitting, asset optimization, SEO',
      'Led web dev and testing teams, improved end-to-end delivery pace',
    ],
    stack: ['Next.js', 'React', 'Express.js'],
  },
];
