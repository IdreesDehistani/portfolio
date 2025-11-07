import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "SOFTWARE DEVELOPER",
    "WEB DEVELOPER",
    "COMPUTER ENGINEER",
    "I.T SPECIALIST",
    "FULLSTACK DEVELOPER",
    "WEB APPLICATION DEVELOPER",
    "BATMAN FAN",
    "A SIMPLE MAN"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container px-6 relative z-10">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              <DecryptedText key={titleIndex} text={titles[titleIndex]} interval={40} />
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
            <span className="block mb-2">
              <DecryptedText text="Hello, I'm" interval={60} />
            </span>
            <span className="text-primary">
              <DecryptedText text="Idrees Dehistani" interval={50} />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <DecryptedText
              text="Crafting elegant digital experiences through clean code and creative solutions"
              interval={20}
            />
          </p>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
