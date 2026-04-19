import {
  SiSharp,
  SiDotnet,
  SiRabbitmq,
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiDocker,
  SiGit,
  SiJira,
} from "react-icons/si";
import {
  FaCloud,
  FaDatabase,
  FaServer,
  FaTools,
  FaCode,
  FaInfinity,
  FaKey,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: "Backend" | "Frontend" | "Cloud & DevOps" | "Tools";
}

export const skills: Skill[] = [
  // Backend
  { name: "C#", icon: SiSharp, color: "#68217A", category: "Backend" },
  { name: ".NET Core", icon: SiDotnet, color: "#512BD4", category: "Backend" },
  { name: "ASP.NET Web API", icon: SiDotnet, color: "#512BD4", category: "Backend" },
  { name: "Entity Framework Core", icon: FaDatabase, color: "#512BD4", category: "Backend" },
  { name: "SignalR", icon: FaNetworkWired, color: "#512BD4", category: "Backend" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600", category: "Backend" },
  { name: "SQL Server", icon: FaDatabase, color: "#CC2927", category: "Backend" },
  { name: "REST APIs", icon: FaServer, color: "#3B82F6", category: "Backend" },
  { name: "JWT", icon: FaKey, color: "#D63AFF", category: "Backend" },
  { name: "Microservices", icon: FaLayerGroup, color: "#0EA5E9", category: "Backend" },
  { name: "LINQ", icon: FaCode, color: "#68217A", category: "Backend" },

  // Frontend
  { name: "Angular", icon: SiAngular, color: "#DD0031", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Frontend" },

  // Cloud & DevOps
  { name: "Microsoft Azure", icon: FaCloud, color: "#0078D4", category: "Cloud & DevOps" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Cloud & DevOps" },
  { name: "Azure DevOps", icon: FaInfinity, color: "#0078D4", category: "Cloud & DevOps" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Cloud & DevOps" },
  { name: "CI/CD", icon: FaInfinity, color: "#3B82F6", category: "Cloud & DevOps" },
  { name: "Perforce", icon: FaNetworkWired, color: "#404040", category: "Cloud & DevOps" },

  // Tools
  { name: "Visual Studio", icon: VscVscode, color: "#5C2D91", category: "Tools" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC", category: "Tools" },
  { name: "Jira", icon: SiJira, color: "#0052CC", category: "Tools" },
  { name: "Agile/Scrum", icon: FaTools, color: "#0052CC", category: "Tools" },
];

export const skillCategories = ["Backend", "Frontend", "Cloud & DevOps", "Tools"] as const;
export type SkillCategory = (typeof skillCategories)[number];
