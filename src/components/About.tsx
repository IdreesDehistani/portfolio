import { useEffect, useRef, useState } from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";
import yn from "../assets/yn.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with comments :)",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing creative ideas to life",
    },
    {
      icon: Rocket,
      title: "Design & Performance",
      description: "Building fast, efficient applications with user-centric design",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-muted/30">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-90"}`}>
            <div 
              className="relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setMousePosition({ x, y });
              }}
              onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
            >
              <div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden transition-all duration-150 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -20}deg) rotateY(${(mousePosition.x - 0.5) * 20}deg) scale(1.02)`
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-primary-foreground text-6xl font-bold">
                  <img loading="lazy" src={yn} alt="Idrees" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} />
              <div className={`absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`} />
            </div>
          </div>

          {/* Content side */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                {isVisible && <DecryptedText text="Building digital tools with users in mind" />}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I'm a software developer that puts design and user experience at the forefront of every project. 
                  With expertise in modern web technologies, I transform ideas into elegant, functional applications.
                </p>
                <p>
                  My approach combines technical excellence with user-centered design, ensuring every project 
                  not only meets requirements but exceeds expectations. 
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="space-y-2">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
