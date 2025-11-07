import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ExternalLink } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Papers = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const papers = [
    {
      id: "paper-1",
      title: "7 Psychology Hacks To Stop Overthinking.",
      description: "7 psychology hacks to stop overthinking and regain control of your mind, Based on lecturers' personal research",
      year: "2023",
    },
    {
      id: "paper-2",
      title: "Does money motivate your team?",
      description: "A short essay exploring the relationship between financial incentives and employee motivation.",
      year: "2022",
    },
    {
      id: "paper-3",
      title: "Easy but convenient habits",
      description: "A short essay written after I read the book Atomic Habits by James Clear.",
      year: "2022",
    },

    {
      id: "paper-4",
      title: "Technology, Nature and humanity",
      description: "A short essay exploring the impact of technology on our relationship with nature and humanity.",
      year: "2021",
    },
  
    {
      id: "paper-5",
      title: "The relationship between innovation and industrial policy.",
      description: "A research paper examining how government policies can foster innovation in various industries.",
      year: "2023",
    },

  ];

  return (
    <section ref={sectionRef} id="papers" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Academic Papers &amp; Essays
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            {isVisible && <DecryptedText text="Essays & Research" />}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {papers.map((paper, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {paper.title}
                  </CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`/paper/${paper.id}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    Read Paper
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers;
