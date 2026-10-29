// Single source of content for the site. Edit here to update the page.
// Case studies: fill `useCases` with your real numbers when ready.

export const profile = {
  name: "Sk Prithulbin Alam",
  title: "Microsoft Power Platform & Agentic AI Solutions Engineer",
  location: "Kolkata, India",
  email: "alam.98tech@gmail.com",
  linkedin: "https://www.linkedin.com/in/alam-prithulbin",
  calendly: "https://calendly.com/alam-98tech/30min",
  blog: "https://blogs.alamforge.com",
  tagline:
    "I turn manual, spreadsheet-driven work into dependable enterprise systems on Microsoft Power Platform and Azure, and I build the AI agents that run inside them.",
  intro:
    "Over the last five years I've shipped apps, automations and AI agents for enterprise teams, and I stay with them through go-live and hypercare. I care less about the demo and more about the solution still running cleanly a year later.",
  mission:
    "I build technology that solves meaningful problems and creates lasting business impact.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Blog", href: "https://blogs.alamforge.com", external: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { num: "5+", label: "Years in enterprise delivery" },
  { num: "15+", label: "Canvas apps shipped" },
  { num: "70+", label: "Power Automate flows" },
  { num: "10+", label: "AI Builder models" },
];

// "What I Do" — lifecycle from architecture through hypercare.
export const whatIDo = {
  lead: "From architecture and design to development, deployment and hypercare, I own the whole lifecycle of a Power Platform solution.",
  cards: [
    {
      icon: "app",
      title: "Business app development",
      body: "Canvas and model-driven apps on Dataverse and SharePoint, built for the people who actually do the work.",
    },
    {
      icon: "flow",
      title: "Process automation",
      body: "Cloud flows, desktop flows (RPA) and enterprise integrations that remove approvals, re-keying and email chains.",
    },
    {
      icon: "agent",
      title: "AI & Copilot solutions",
      body: "Copilot Studio agents and AI Builder document models that answer questions and take real actions inside a process.",
    },
    {
      icon: "data",
      title: "Data & Dataverse",
      body: "A clean Dataverse model, security roles and reporting so the right people see the right data and nothing more.",
    },
    {
      icon: "support",
      title: "Architecture & hypercare",
      body: "Solution design, ALM, environment strategy, deployment pipelines and the hypercare that keeps it all running.",
    },
  ],
};

// Technology expertise, grouped. `key` maps to a brand logo where one is available;
// otherwise the item renders as a clean labeled tile.
export const expertise = [
  {
    group: "Microsoft Power Platform",
    items: [
      "Power Apps",
      "Power Automate",
      "Copilot Studio",
      "Power Pages",
      "Dataverse",
      "SharePoint",
      "Dynamics 365 — Customer Service",
      "Dynamics 365 — Demand Management",
    ],
  },
  {
    group: "Azure",
    items: ["Azure DevOps", "Azure Functions", "Azure AI"],
  },
  {
    group: "Business process automation",
    items: ["Make.com", "Zapier", "Nintex"],
  },
  {
    group: "Coding",
    items: ["Python", "C#", "JavaScript"],
  },
  {
    group: "AI enhancement",
    items: ["Prompt Engineering", "Generative AI"],
  },
];

// Case studies — PLACEHOLDERS. Replace `metric` dashes and text with real detail.
export const useCases = [
  {
    tag: "Approvals",
    title: "Multi-level approval app",
    body: "Replaced an email-and-spreadsheet approval chain with a structured app and automated routing.",
    metrics: [
      { value: "—", label: "approval time cut" },
      { value: "—", label: "users" },
    ],
    stack: ["Canvas app", "Dataverse", "Power Automate"],
  },
  {
    tag: "Document AI",
    title: "Invoice data extraction",
    body: "AI Builder model that reads invoices and pushes structured data into the system of record.",
    metrics: [
      { value: "—", label: "docs / month" },
      { value: "—", label: "extraction accuracy" },
    ],
    stack: ["AI Builder", "Power Automate", "Dataverse"],
  },
  {
    tag: "AI agent",
    title: "Copilot Studio internal agent",
    body: "An agent that answers team questions and takes actions inside the business process.",
    metrics: [
      { value: "—", label: "queries / week" },
      { value: "—", label: "deflected from team" },
    ],
    stack: ["Copilot Studio", "Connectors", "Azure"],
  },
];

export const experience = [
  { company: "Accenture", role: "Power Platform & Azure", logo: "logos/accenture.png" },
  { company: "GP Strategies Corporation", role: "Power Platform", logo: "logos/gp.png" },
  { company: "Infosys Limited", role: "Power Platform", logo: "logos/infosys.png" },
];

export const credentials = [
  {
    issuer: "Microsoft — Power Platform",
    items: [
      { code: "PL-400", name: "Power Platform Developer Associate" },
      { code: "PL-200", name: "Power Platform Functional Consultant" },
      { code: "PL-900", name: "Power Platform Fundamentals" },
      { code: "AB-731", name: "AI Transformation Leader" },
    ],
  },
  {
    issuer: "GitHub",
    items: [
      { code: "GH-300", name: "GitHub Copilot" },
      { code: "GH-900", name: "GitHub Foundations" },
    ],
  },
  {
    issuer: "Anthropic — Claude",
    items: [
      { code: "CCA", name: "Claude Certified Associate" },
      { code: "CCD", name: "Claude Certified Developer" },
      { code: "ARCH-F", name: "Claude Architect — Foundations" },
      { code: "ARCH-P", name: "Claude Architect — Professional" },
    ],
  },
];

export const hobbies = [
  { icon: "car", title: "Driving & travelling" },
  { icon: "book", title: "Reading" },
  { icon: "chart", title: "Stock market" },
];

// About — Alam's own words.
export const about = [
  "I'm a Microsoft Power Platform & Agentic AI Solutions Engineer with five years of experience designing and building business solutions that simplify complex processes, cut manual effort and deliver measurable value.",
  "My expertise spans the Microsoft Power Platform ecosystem — Power Apps (canvas and model-driven), Power Automate, Power BI, Dataverse and SharePoint Online. I also work with Dynamics 365 customization, JavaScript and solution-based ALM to build scalable, maintainable solutions.",
  "Beyond low-code, I work across the software development lifecycle: Agile delivery, Azure DevOps and CI/CD pipeline configuration. I use Azure AI Foundry to build and experiment with AI-powered solutions, connecting enterprise development with emerging AI capabilities.",
  "What sets me apart is how I approach problems. Great technology starts with understanding the problem, not just writing code or automating what already exists. I work closely with stakeholders, find the opportunities, and turn business requirements into practical, reliable solutions.",
  "Right now I'm focused on building intelligent business applications and combining Power Platform with Agentic AI to help teams work smarter and faster. My goal is simple: build technology that solves meaningful problems and creates lasting impact.",
];
