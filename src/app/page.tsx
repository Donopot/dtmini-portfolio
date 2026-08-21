import { Hero } from "@/components/home/Hero";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { OffersSection } from "@/components/home/OffersSection";
import { MethodSection } from "@/components/home/MethodSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { projects } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <OffersSection />
      <MethodSection />
      <ProjectsSection projects={projects} />
      <FaqSection />
      <FinalCta />
    </>
  );
}
