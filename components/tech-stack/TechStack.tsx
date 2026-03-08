import Container from "@/app/container";
import TechCard from "./TechCard";

import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiApachekafka,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "React", icon: <FaReact /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-28 bg-neutral-950 border-y border-neutral-800"
    >
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Kullandığım Teknolojiler ve Araçlar
          </h2>

          <p className="mt-4 text-neutral-400">
            Modern, güncel ve yüksek performanslı uygulamalar geliştirmek için
            kullandığım teknolojiler.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
