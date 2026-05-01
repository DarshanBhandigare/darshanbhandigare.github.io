export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { icon: "⚙️", name: "C / C++", level: "Core Language", width: 80 },
  { icon: "🐍", name: "Python", level: "Scripting & AI", width: 65 },
  { icon: "🌐", name: "HTML CSS & JS", level: "Web Development", width: 75 },
  { icon: "🧠", name: "Data Structures", level: "Algorithms & Problem Solving", width: 70 },
  { icon: "🤖", name: "Generative AI", level: "Oracle Certified", width: 60 },
  { icon: "🔧", name: "Git & GitHub", level: "Version Control", width: 72 },
  { icon: "☕", name: "Java", level: "Object-Oriented Programming", width: 55 },
];

export const projects = [
  {
    type: "Fix My Itch by Razorpay",
    title: "InvoVault",
    description:
      "A secure AI invoice management platform designed for freelancers and micro-SMEs. Features dynamic dashboards, client management, and automated PDF generation.",
    tags: ["Next.js 15", "Supabase", "Tailwind v4", "TypeScript"],
    live: "https://invovault.vercel.app/",
    github: "https://github.com/DarshanBhandigare/InvoVault",
  },
  {
    type: "Web App",
    title: "Paletto",
    description:
      "A responsive web application that generates clean, useful color palettes for design inspiration and frontend projects. Built for designers and developers alike.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://paletto-color-generator.vercel.app/",
    github: "https://github.com/darshanbhandigare/paletto-color-generator",
  },
  {
    type: "Portfolio",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase skills, projects, and certifications. Designed and built from scratch with HTML, CSS and JS, deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://darshanbhandigare.github.io/",
    github: "https://github.com/DarshanBhandigare/darshanbhandigare.github.io",
  },
];

export const certifications = [
  {
    color: "var(--accent2)",
    name: "Oracle Cloud Infrastructure 2025 - Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E271C625D729BC583FD445257FB25C0DD47CED1CDB3B73675C885EDD4680DE49",
    label: "View Credential ->",
  },
  {
    color: "var(--accent3)",
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM / Credly",
    year: "2025",
    link: "https://www.credly.com/badges/e5dfd0f6-cb8b-4b20-8dab-dc0ea95a2f70/linked_in_profile",
    label: "View Credential ->",
  },
  {
    color: "var(--green)",
    name: "Web Development Fundamentals",
    issuer: "IBM / Credly",
    year: "2025",
    link: "https://www.credly.com/badges/7d8f1ef0-1ac2-401e-83af-e566c59e7a8b",
    label: "View Credential ->",
  },
  {
    color: "var(--accent)",
    name: "Deloitte Job Simulation - Technology Virtual Internship",
    issuer: "Deloitte / The Forage",
    year: "2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68f110ef8e645218889eb542_1760631026251_completion_certificate.pdf",
    label: "View Certificate ->",
  },
];
