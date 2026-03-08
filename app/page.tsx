import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/tech-stack/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
