import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, Code2, Database, Globe, Smartphone, Server, Layers } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";

interface Skill {
  name: string;
  icon: any;
  category: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  skills: Skill[];
  isExpandable?: boolean;
  details?: string;
  snapshots?: string[];
}

const Projects = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isOnHeader, setIsOnHeader] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectRoutes = [
    "Multi-web Website",
    "Verse Motion",
    "Online store website",
    "Content Audit logs web-app",
  ];

  const projects: Project[] = [
    {
      title: "Multi-web Website",
      description: "Websites for the university's various departments with integrated event management & news updates.",
      tech: ["Python", "Odoo16", "PostgreSQL", "XML"],
      color: "from-primary to-accent",
      skills: [
        { name: "XML", icon: Code2, category: "Frontend" },
        { name: "Python", icon: Server, category: "Backend" },
        { name: "PostgreSQL", icon: Database, category: "Database" },
        { name: "Odoo16", icon: Code2, category: "Frontend" },
      ],
    },
    {
      title: "Verse Motion",
      description: "A visually stunning web-app for syncing your music with dynamic lyrics in real-time. The UI is customizable and interactive, giving users a unique experience.",
      tech: ["TypeScript", "React", "Python", "Tailwind"],
      color: "from-accent to-secondary",
      skills: [
        { name: "TypeScript", icon: Code2, category: "Frontend" },
        { name: "React", icon: Code2, category: "Frontend" },
        { name: "Python", icon: Database, category: "Backend" },
        { name: "Tailwind", icon: Layers, category: "Frontend" },
      ],
    },
    {
      title: "Online store website",
      description: "An online maarketplace for giving information about products, managing inventory, and processing orders efficiently.",
      tech: ["XML", "Odoo18", "PostgreSQL", "Python"],
      color: "from-secondary to-primary",
      skills: [
        { name: "XML", icon: Code2, category: "Frontend" },
        { name: "Odoo18", icon: Globe, category: "Frontend" },
        { name: "PostgreSQL", icon: Database, category: "Database" },
        { name: "Python", icon: Server, category: "Backend" },
      ],
    },
    {
      title: "Content Audit logs web-app",
      description: "A python module that can capture user activities in Odoo and log them for auditing purposes.",
      tech: ["Odoo16", "PostgreSQL", "Python", "XML"],
      color: "from-primary/80 to-accent/80",
      skills: [
        { name: "XML", icon: Code2, category: "Frontend" },
        { name: "Python", icon: Globe, category: "Backend" },
        { name: "Odoo16", icon: Code2, category: "Frontend" },
        { name: "PostgreSQL", icon: Database, category: "Database" },
      ],
    },
  ];


  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-background">
      <div className="container px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {isVisible && <DecryptedText text="Featured Projects" />}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
                onClick={() => navigate(`/project/${projectRoutes[index]}`)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width;
                  const y = (e.clientY - rect.top) / rect.height;
                  setMousePosition({ x, y });
                  // Check if mouse is on header (approximately first 192px or ~30% of card height)
                  const headerHeight = 192; // h-48 = 192px
                  const relativeY = e.clientY - rect.top;
                  setIsOnHeader(relativeY < headerHeight);
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
                    style={{
                      background: hoveredCard === index
                        ? `radial-gradient(400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${isOnHeader ? 'rgba(255, 255, 255, 0.3)' : 'rgba(220, 38, 38, 0.35)'}, transparent 50%)`
                        : 'none'
                    }}
                  />
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-primary-foreground/20 transition-colors">
                        <Github className="w-5 h-5 text-primary-foreground" />
                      </button>
                      <button className="p-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-primary-foreground/20 transition-colors">
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Skills Section */}
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="group/skill flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300"
                          >
                            <div className="p-2 rounded-lg bg-primary/10 group-hover/skill:bg-primary/20 transition-colors">
                              <skill.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{skill.name}</p>
                              <p className="text-xs text-muted-foreground">{skill.category}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;
