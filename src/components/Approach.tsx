import { useEffect, useState } from "react";
import { DecryptedText } from "./ui/decrypted-text";

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("approach");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const phases = [
    {
      number: 1,
      title: "Understanding & Research",
      description: "Understanding your vision, goals, and requirements through detailed consultation and research (A conversation :) )."
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Creating wireframes, architecture, and technical roadmap to ensure simple and optimal user experience."
    },
    {
      number: 3,
      title: "Development",
      description: "Building scalable solutions with clean code, following best practices and scrum methodology."
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "Deploying to production, monitoring performance, and providing ongoing maintenance and updates."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-muted/30">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isVisible && <DecryptedText text="My Approach" />}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic process to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="relative group"
              onMouseEnter={() => setHoveredPhase(phase.number)}
              onMouseLeave={() => setHoveredPhase(null)}
            >
              <div
  className="relative h-64 bg-card border border-border rounded-lg p-6 overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105"
  style={{ willChange: "transform" }}
>

                {/* Animated dots background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Phase number */}
                <div className={`relative z-10 transition-all duration-500 ${hoveredPhase === phase.number ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {phase.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Phase {phase.number}
                  </h3>
                  <p className="text-xl text-primary mt-2">{phase.title}</p>
                </div>

                {/* Description on hover */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 ${hoveredPhase === phase.number ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="text-sm text-muted-foreground mb-2">Phase {phase.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-500 ${hoveredPhase === phase.number ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
