// import Image from "next/image";
import { DatasetsSection } from "./components/datasets-section";
import { ExperienceSection } from "./components/experience-section";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { ResearchSection } from "./components/research-section";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ResearchSection />
      <DatasetsSection />
    </div>
  );
}
