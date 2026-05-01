import ParticleCanvas from "./components/ParticleCanvas";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import useLenis from "./hooks/useLenis";
import useRevealAnimations from "./hooks/useRevealAnimations";
import { certifications, navLinks, projects, skills } from "./data/portfolio";
import AboutSection from "./sections/AboutSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

export default function App() {
  useLenis();
  useRevealAnimations();

  return (
    <>
      <ParticleCanvas />
      <CustomCursor />
      <Navigation links={navLinks} />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <CertificationsSection certifications={certifications} />
      <ContactSection />
      <Footer />
    </>
  );
}
