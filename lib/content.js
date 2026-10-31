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
    "Great software starts with the problem, not the code. That's how I build.",
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
// logo: path under /public, or null to fall back to a neutral mark (pending official logo)
export const expertise = [
  {
    group: "Microsoft Power Platform",
    items: [
      { name: "Power Apps", logo: "logos/powerapps.svg" },
      { name: "Power Automate", logo: "logos/powerautomate.svg" },
      { name: "Copilot Studio", logo: "logos/copilotstudio.png" },
      { name: "Power Pages", logo: "logos/powerpages.svg" },
      { name: "Dataverse", logo: "logos/dataverse.svg" },
      { name: "AI Builder", logo: "logos/aibuilder.svg" },
      { name: "SharePoint", logo: "logos/sharepoint.png" },
      { name: "Dynamics 365 — Customer Service", logo: "logos/dynamics365.svg" },
      { name: "Dynamics 365 — Demand Management", logo: "logos/dynamics365.svg" },
    ],
  },
  {
    group: "Azure",
    items: [
      { name: "Azure DevOps", logo: "logos/azuredevops.svg" },
      { name: "Azure Functions", logo: "logos/azurefunctions.png" },
      { name: "Azure AI Foundry", logo: "logos/azureai.svg" },
    ],
  },
  {
    group: "Business process automation",
    items: [
      { name: "Make.com", logo: "logos/make.svg" },
      { name: "Zapier", logo: "logos/zapier.svg" },
      { name: "Nintex", logo: "logos/nintex.png" },
    ],
  },
  {
    group: "Coding",
    items: [
      { name: "Python", logo: "logos/python.svg" },
      { name: "C#", logo: "logos/csharp.svg" },
      { name: "JavaScript", logo: "logos/javascript.svg" },
    ],
  },
  {
    group: "AI enhancement",
    items: [
      { name: "Prompt Engineering", logo: "logos/sparkles.svg" },
      { name: "Generative AI", logo: "logos/sparkles.svg" },
    ],
  },
];

// Case studies. image = illustrative mockup (not a real client screenshot).
// Metrics are conservative, defensible figures — omit `metrics` to show tech only.
export const useCases = [
  {
    tag: "Self-service portal",
    title: "Customer self-service & case management portal",
    image: "casestudies/portal.png",
    body: "A Power Pages portal where external users raise and track their own cases, backed by a structured Dataverse model and automation that routes, updates and closes the loop without the team re-keying anything.",
    metrics: [
      { value: "1,000+", label: "external users served" },
      { value: "8–12", label: "Dataverse tables" },
      { value: "10+", label: "automated flows" },
    ],
    stack: ["Power Pages", "Dataverse", "Power Automate"],
  },
  {
    tag: "Public sector",
    title: "Grant / permit / application intake",
    image: "casestudies/intake.png",
    body: "A guided, multi-step intake for public-sector applications — conditional logic shows only the questions that apply, validates as the applicant goes, and hands a clean, reviewable record to back-office staff.",
    metrics: [
      { value: "1,000s", label: "submissions / cycle" },
      { value: "5-step", label: "conditional intake" },
      { value: "10–25", label: "automated flows" },
    ],
    stack: ["Power Pages", "Dataverse", "Power Automate", "AI Builder"],
  },
  {
    tag: "Dynamics 365",
    title: "Dynamics 365 Customer Service Hub enhancement",
    image: "casestudies/d365.png",
    body: "Extended the Customer Service Hub with custom tables, business rules and embedded automation so agents resolve cases inside one screen — queues, SLAs and the customer history all in context, no tab-hopping.",
    stack: ["Dynamics 365", "Dataverse", "Power Automate", "JavaScript"],
  },
  {
    tag: "Document AI",
    title: "Invoice data extraction",
    image: "casestudies/invoice.png",
    body: "AI Builder model that reads invoices and pushes structured data into the system of record, cutting manual re-typing.",
    metrics: [
      { value: "—", label: "docs / month" },
      { value: "—", label: "extraction accuracy" },
    ],
    stack: ["AI Builder", "Power Automate", "Dataverse"],
  },
  {
    tag: "AI agent",
    title: "Copilot Studio internal agent",
    image: "casestudies/agent.png",
    body: "An agent that answers team questions and takes real actions inside the business process, deflecting routine tickets.",
    metrics: [
      { value: "—", label: "queries / week" },
      { value: "—", label: "deflected from team" },
    ],
    stack: ["Copilot Studio", "Connectors", "Azure"],
  },
  {
    tag: "Operations",
    title: "Operational logging & handover app",
    image: "casestudies/handover.png",
    body: "Replaced paper and email shift handovers with a structured app on Dataverse, with a full audit trail.",
    metrics: [
      { value: "—", label: "users" },
      { value: "—", label: "handover errors cut" },
    ],
    stack: ["Canvas app", "Dataverse", "Power Automate"],
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
      { code: "PL-400", name: "Power Platform Developer Associate", logo: "logos/certs/pl-400.svg" },
      { code: "PL-200", name: "Power Platform Functional Consultant", logo: "logos/certs/pl-200.svg" },
      { code: "PL-900", name: "Power Platform Fundamentals", logo: "logos/certs/pl-900.svg" },
      { code: "AB-731", name: "AI Transformation Leader", logo: "logos/certs/ab-731.svg" },
    ],
  },
  {
    issuer: "GitHub",
    items: [
      { code: "GH-300", name: "GitHub Copilot", logo: "logos/certs/gh-300.svg" },
      { code: "GH-900", name: "GitHub Foundations", logo: "logos/certs/gh-900.svg" },
    ],
  },
  {
    issuer: "Anthropic — Claude",
    items: [
      { code: "CCA", name: "Claude Certified Associate", logo: "logos/certs/cca.png" },
      { code: "CCD", name: "Claude Certified Developer", logo: "logos/certs/ccd.png" },
      { code: "ARCH-F", name: "Claude Architect — Foundations", logo: "logos/certs/arch-f.png" },
      { code: "ARCH-P", name: "Claude Architect — Professional", logo: "logos/certs/arch-p.png" },
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
