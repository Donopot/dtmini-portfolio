import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { services, projects } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
    </>
  );
}
