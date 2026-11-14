// Single source of content for the site. Edit here to update the page.
// Case studies: fill `useCases` with your real numbers when ready.
import resumeData from "./resume.json";

// Resume shown in the Resume section. Publish or replace it with:
//   npm run resume -- /path/to/resume.pdf "Month YYYY"
// Until one is published this is null and the section and its nav link stay hidden.
export const resume = resumeData.pages.length ? resumeData : null;

export const profile = {
  name: "Sk Prithulbin Alam",
  title: "Microsoft Power Platform & Agentic AI Solutions Engineer",
  location: "Kolkata, India",
  email: "alam.98tech@gmail.com",
  linkedin: "https://www.linkedin.com/in/alam-prithulbin",
  calendly: "https://calendly.com/alam-98tech/30min",
  blog: "https://blogs.alamforge.com",
  tagline:
    "I take processes that run on spreadsheets and email and rebuild them as apps and automations on Microsoft Power Platform and Azure. I also build AI agents that handle the routine steps inside those processes.",
  // Phrases the hero headline cycles through after "I forge manual work into".
  forge: ["reliable enterprise systems", "automations that replace email chains", "AI agents that take real actions"],
  intro:
    "Over the last five years I've shipped apps, automations and AI agents for enterprise teams, and I stay with them through go-live and hypercare. What I care about is the solution still running cleanly a year later.",
  mission:
    "I start every project with the problem. The code comes after.",
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
  ...(resume ? [{ label: "Resume", href: "#resume" }] : []),
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { num: "5+", label: "Years in enterprise delivery" },
  { num: "15+", label: "Canvas apps shipped" },
  { num: "70+", label: "Power Automate flows" },
  { num: "10+", label: "AI Builder models" },
];

// "What I Do": the lifecycle from architecture through hypercare.
export const whatIDo = {
  lead: "I take a Power Platform solution from the first design session through development, deployment and hypercare.",
  cards: [
    {
      icon: "app",
      title: "Business app development",
      body: "Canvas and model-driven apps on Dataverse and SharePoint, built for the people who do the work.",
    },
    {
      icon: "flow",
      title: "Process automation",
      body: "Cloud flows, desktop flows and enterprise integrations that take approvals, re-keying and email chains out of a process.",
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
// `level` places the group in the 3D stack diagram: 1 is the bottom layer, 5 the top.
export const expertise = [
  {
    group: "Microsoft Power Platform", level: 4,
    items: [
      { name: "Power Apps", logo: "logos/powerapps.svg" },
      { name: "Power Automate", logo: "logos/powerautomate.svg" },
      { name: "Copilot Studio", logo: "logos/copilotstudio.png" },
      { name: "Power Pages", logo: "logos/powerpages.svg" },
      { name: "Dataverse", logo: "logos/dataverse.svg" },
      { name: "AI Builder", logo: "logos/aibuilder.svg" },
      { name: "SharePoint", logo: "logos/sharepoint.png" },
      { name: "Dynamics 365 Customer Service", logo: "logos/dynamics365.svg" },
      { name: "Dynamics 365 Demand Management", logo: "logos/dynamics365.svg" },
    ],
  },
  {
    group: "Azure", level: 2,
    items: [
      { name: "Azure DevOps", logo: "logos/azuredevops.svg" },
      { name: "Azure Functions", logo: "logos/azurefunctions.png" },
      { name: "Azure AI Foundry", logo: "logos/azureai.svg" },
    ],
  },
  {
    group: "Business process automation", level: 3,
    items: [
      { name: "Make.com", logo: "logos/make.svg" },
      { name: "Zapier", logo: "logos/zapier.svg" },
      { name: "Nintex", logo: "logos/nintex.png" },
    ],
  },
  {
    group: "Programming Languages", level: 1,
    items: [
      { name: "Python", logo: "logos/python.svg" },
      { name: "C#", logo: "logos/csharp.svg" },
      { name: "JavaScript", logo: "logos/javascript.svg" },
    ],
  },
  {
    group: "AI enhancement", level: 5,
    items: [
      { name: "Prompt Engineering", logo: "logos/sparkles.svg" },
      { name: "Generative AI", logo: "logos/sparkles.svg" },
    ],
  },
];

// Case studies. image = illustrative mockup (not a real client screenshot).
// Metrics are conservative, defensible figures. Omit `metrics` to show tech only.
// The Work section shows the first three as small cards; "See all" reveals the rest.
export const useCases = [
  {
    tag: "Self-service portal",
    title: "Customer self-service & case management portal",
    image: "casestudies/portal.png",
    body: "A Power Pages portal where external users raise and track their own cases. A structured Dataverse model sits behind it, and automation routes and updates each case so the team never re-keys anything.",
    stack: ["Power Pages", "Dataverse", "Power Automate"],
  },
  {
    tag: "Public sector",
    title: "Grant / permit / application intake",
    image: "casestudies/intake.png",
    body: "A guided, multi-step intake for public-sector applications. Conditional logic shows only the questions that apply and validates answers as the applicant goes, then hands back-office staff a clean record to review.",
    stack: ["Power Pages", "Dataverse", "Power Automate", "AI Builder"],
  },
  {
    tag: "Dynamics 365",
    title: "Dynamics 365 Customer Service Hub enhancement",
    image: "casestudies/d365.png",
    body: "Extended the Customer Service Hub with custom tables, business rules and embedded automation. Agents now resolve cases on one screen, with queues, SLAs and the customer history in context.",
    stack: ["Dynamics 365", "Dataverse", "Power Automate", "JavaScript"],
  },
  {
    tag: "Document AI",
    title: "Invoice data extraction",
    image: "casestudies/invoice.png",
    body: "An AI Builder model that reads invoices and pushes structured data into the system of record, which cuts manual re-typing.",
    stack: ["AI Builder", "Power Automate", "Dataverse"],
  },
  {
    tag: "AI agent",
    title: "Copilot Studio internal agent",
    image: "casestudies/agent.png",
    body: "An agent that answers team questions and takes real actions inside the business process, and deflects routine tickets.",
    stack: ["Copilot Studio", "Connectors", "Azure"],
  },
  {
    tag: "Operations",
    title: "Operational logging & handover app",
    image: "casestudies/handover.png",
    body: "Replaced paper and email shift handovers with a structured app on Dataverse, with a full audit trail.",
    stack: ["Canvas app", "Dataverse", "Power Automate"],
  },
];

export const experience = [
  { company: "Accenture", role: "Power Platform & Azure", logo: "logos/accenture.png" },
  { company: "GP Strategies Corporation", role: "Power Platform & D365", logo: "logos/gp.png" },
  { company: "Infosys Limited", role: "Power Platform & Gen AI", logo: "logos/infosys.png" },
];

// Certifications. Each card opens when clicked and shows a link.
//   view:   the certification's official page on the issuer's site.
//   verify: (optional) your own credential link, e.g. a Credly badge or Microsoft Learn share link.
//           When set, the card shows "Verify this credential" and uses it instead of `view`.
export const credentials = [
  {
    issuer: "Microsoft Power Platform", site: "Microsoft Learn",
    items: [
      { code: "PL-400", name: "Power Platform Developer Associate", logo: "logos/certs/pl-400.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/" },
      { code: "PL-200", name: "Power Platform Functional Consultant", logo: "logos/certs/pl-200.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-functional-consultant-associate/" },
      { code: "PL-900", name: "Power Platform Fundamentals", logo: "logos/certs/pl-900.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/" },
      { code: "AB-731", name: "AI Transformation Leader", logo: "logos/certs/ab-731.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/ai-transformation-leader/" },
    ],
  },
  {
    issuer: "GitHub", site: "Microsoft Learn",
    items: [
      { code: "GH-300", name: "GitHub Copilot", logo: "logos/certs/gh-300.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/" },
      { code: "GH-900", name: "GitHub Foundations", logo: "logos/certs/gh-900.svg", view: "https://learn.microsoft.com/en-us/credentials/certifications/github-foundations/" },
    ],
  },
  {
    issuer: "Anthropic Claude", site: "Credly",
    items: [
      { code: "CCA", name: "Claude Certified Associate", logo: "logos/certs/cca.png", view: "https://www.credly.com/org/anthropic" },
      { code: "CCD", name: "Claude Certified Developer", logo: "logos/certs/ccd.png", view: "https://www.credly.com/org/anthropic/badge/claude-certified-developer-foundations" },
      { code: "ARCH-F", name: "Claude Architect: Foundations", logo: "logos/certs/arch-f.png", view: "https://www.credly.com/org/anthropic/badge/claude-certified-architect-foundations" },
      { code: "ARCH-P", name: "Claude Architect: Professional", logo: "logos/certs/arch-p.png", view: "https://www.credly.com/org/anthropic/badge/claude-certified-architect-professional" },
    ],
  },
];

export const hobbies = [
  { icon: "car", title: "Driving & travelling" },
  { icon: "book", title: "Reading" },
  { icon: "chart", title: "Stock market" },
];

// About, in Alam's own voice.
export const about = [
  "I'm a Microsoft Power Platform and Agentic AI Solutions Engineer with five years of experience building business solutions. Most of that work is taking a process that eats people's time and cutting the manual steps out of it.",
  "I work across the Power Platform: Power Apps (canvas and model-driven), Power Automate, Power BI, Dataverse and SharePoint Online. I also customize Dynamics 365, write JavaScript, and ship everything through solution-based ALM so it stays maintainable.",
  "Outside low-code I work the way most software teams do, with Agile delivery, Azure DevOps and CI/CD pipelines. I use Azure AI Foundry to build and experiment with AI solutions.",
  "I start with the problem. I spend time with the people who run the process, find out where it breaks, and turn their requirements into something practical that keeps working.",
  "Right now I'm building business applications that combine Power Platform with agentic AI, so teams get routine work done faster. I want to build technology that solves problems people care about.",
];
