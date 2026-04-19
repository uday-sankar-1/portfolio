export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "DMX Platform",
    description:
      "Architected and developed reusable .NET Core backend libraries forming the foundation for next-generation casino iVIEW applications at Light & Wonder. Implemented low-latency event-driven communication using RabbitMQ and SignalR, synchronized with Angular UIs. Co-inventor on a granted patent recognizing the architectural innovation.",
    tags: [".NET Core", "C#", "RabbitMQ", "SignalR", "Angular", "Microservices", "Azure DevOps"],
    github: "#",
    demo: "#",
  },
  {
    title: "iVIEW Custom Casino Content",
    description:
      "Delivered multiple customer-specific casino content modules with Angular and React, integrated with secure .NET backend services. Implemented REST APIs supporting wallet access, gameplay interactions, staff communication, and real-time data updates for high-profile casino clients.",
    tags: ["Angular", "React", "ASP.NET Web API", "REST APIs", "SQL Server", "JWT", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Promotions Engine",
    description:
      "Built real-time, event-driven promotional engine using SignalR and RabbitMQ to support live gaming workflows across multiple casino deployments globally. Designed scalable service layers handling device communication and event processing.",
    tags: [".NET Core", "SignalR", "RabbitMQ", "C#", "Angular", "Entity Framework Core"],
    github: "#",
    demo: "#",
  },
  {
    title: "Enterprise REST API Suite",
    description:
      "Designed and built robust REST APIs for enterprise casino platforms with JWT authentication, role-based access, performance tuning and production support. Led full-stack feature delivery including API design, CI/CD pipelines and monitoring.",
    tags: ["ASP.NET Web API", "JWT", "SQL Server", "Docker", "Azure", "CI/CD", "C#"],
    github: "#",
    demo: "#",
  },
];
