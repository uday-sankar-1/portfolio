export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  tags: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Light & Wonder",
    duration: "Aug 2022 – Present",
    location: "Bengaluru, Karnataka",
    description:
      "Designed and implemented scalable .NET Core backend services supporting enterprise casino platforms used across global deployments. Built real-time, event-driven systems using SignalR and RabbitMQ. Developed and maintained Angular and React frontend modules, owning features end-to-end. Co-inventor on a granted patent for the DMX Platform architecture.",
    tags: [".NET Core", "C#", "Angular", "React", "RabbitMQ", "SignalR", "Azure", "Docker"],
    type: "work",
  },
  {
    role: "Software Engineer Intern",
    company: "Mindtree",
    duration: "Jan 2022 – Jun 2022",
    location: "Bengaluru, Karnataka",
    description:
      "Worked on backend API development and frontend integration as part of an Agile full-stack application team.",
    tags: ["REST APIs", "JavaScript", "Agile", "Git"],
    type: "work",
  },
  {
    role: "Bachelor of Engineering — ECE",
    company: "Prathyusha Engineering College, Anna University",
    duration: "Graduated 2021",
    location: "Tamil Nadu",
    description: "Electronics and Communication Engineering. GPA: 8.61/10",
    tags: ["Electronics", "Communication Engineering", "GPA: 8.61"],
    type: "education",
  },
];
