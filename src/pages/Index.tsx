import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import Certifications from "@/components/Certifications";
import Papers from "@/components/papers";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import { FloatingRobot } from "@/components/FloatingRobot";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <FloatingRobot />
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Certifications />
      <Papers />
      <Socials />
      <Contact />
      <Feedback />
    </main>
  );
};

export default Index;
