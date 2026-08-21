import { Hero } from "@/components/home/Hero";
import { OffersSection } from "@/components/home/OffersSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { services, projects } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <OffersSection />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
    </>
  );
}
