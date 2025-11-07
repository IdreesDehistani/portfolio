import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Code2, Database, Globe, Smartphone, Server, Layers } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  why: string;
  how: string;
  accessInfo: string;
  tech: string[];
  color: string;
  snapshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  skills: Array<{
    name: string;
    icon: any;
    category: string;
  }>;
}

const projectsData: Record<string, ProjectData> = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    longDescription: "This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. It features a modern, responsive design with real-time updates and secure payment processing through Stripe integration.",
    why: "Built to address the growing need for small businesses to have a professional online presence without the complexity of traditional e-commerce platforms. The goal was to create something that's both powerful and easy to manage.",
    how: "Developed using React for the frontend with TypeScript for type safety. The backend is powered by Node.js and Express, with MongoDB as the database for flexible data modeling. Stripe handles all payment processing, and real-time inventory updates are managed through WebSocket connections.",
    accessInfo: "The platform is currently in beta testing. You can access the demo version using the Live Demo link above, or check out the source code on GitHub. For production access, please contact for a custom deployment.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "WebSocket", "Express", "Tailwind CSS"],
    color: "from-primary to-accent",
    snapshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/yourname/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    skills: [
      { name: "React", icon: Code2, category: "Frontend" },
      { name: "TypeScript", icon: Code2, category: "Frontend" },
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "Stripe", icon: Globe, category: "Payment" },
      { name: "WebSocket", icon: Server, category: "Real-time" },
    ],
  },
  "task-management": {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team communication features.",
    longDescription: "A modern task management application designed for remote teams. Features include real-time collaboration, task assignments, progress tracking, and integrated team communication.",
    why: "Created to solve the problem of scattered team communication and task tracking across multiple platforms. The aim was to centralize all project management needs in one intuitive interface.",
    how: "Built with TypeScript and React for a robust frontend experience. Firebase provides real-time database capabilities and authentication. Tailwind CSS ensures a beautiful, responsive design across all devices.",
    accessInfo: "The app is live and accepting new users. Sign up using the Live Demo link to create a free account and start managing your projects. The GitHub repository contains setup instructions for self-hosting.",
    tech: ["TypeScript", "React", "Firebase", "Tailwind CSS", "React Query", "Zustand"],
    color: "from-accent to-secondary",
    snapshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/yourname/taskmanager",
    liveUrl: "https://taskmanager-demo.com",
    skills: [
      { name: "TypeScript", icon: Code2, category: "Frontend" },
      { name: "React", icon: Code2, category: "Frontend" },
      { name: "Firebase", icon: Database, category: "Backend" },
      { name: "Tailwind", icon: Layers, category: "Frontend" },
    ],
  },
  "analytics-dashboard": {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence with interactive charts and custom reports.",
    longDescription: "An advanced analytics dashboard that transforms complex data into actionable insights. Features interactive charts, customizable reports, and real-time data processing.",
    why: "Developed to help businesses make data-driven decisions without needing a dedicated data science team. The platform makes complex analytics accessible to everyone.",
    how: "The frontend uses React and D3.js for powerful, interactive data visualizations. PostgreSQL handles complex queries efficiently, while Express provides a robust API layer. Data is processed in real-time and cached for optimal performance.",
    accessInfo: "Currently available as an enterprise solution. Contact for a personalized demo and pricing information. The GitHub repository contains documentation for the API and integration guides.",
    tech: ["React", "D3.js", "PostgreSQL", "Express", "Redis", "Chart.js"],
    color: "from-secondary to-primary",
    snapshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/yourname/analytics",
    liveUrl: "https://analytics-demo.com",
    skills: [
      { name: "React", icon: Code2, category: "Frontend" },
      { name: "D3.js", icon: Globe, category: "Visualization" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Express", icon: Server, category: "Backend" },
    ],
  },
  "social-media-app": {
    id: "social-media-app",
    title: "Social Media App",
    description: "Mobile-first social platform with image sharing, stories, and real-time messaging capabilities.",
    longDescription: "A modern social media application optimized for mobile devices. Features include photo sharing, ephemeral stories, real-time messaging, and an intelligent feed algorithm.",
    why: "Built to explore modern mobile development patterns and create a privacy-focused social platform. The focus is on meaningful connections rather than endless scrolling.",
    how: "Developed using React Native for cross-platform mobile support. GraphQL provides efficient data fetching, AWS handles media storage and CDN distribution, and Redis powers the real-time features and caching layer.",
    accessInfo: "Available on iOS and Android app stores. Download the app to create an account and start connecting with friends. The source code is available on GitHub for developers interested in contributing.",
    tech: ["React Native", "GraphQL", "AWS", "Redis", "Apollo Client", "Node.js"],
    color: "from-primary/80 to-accent/80",
    snapshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/yourname/socialmedia",
    liveUrl: "https://socialmedia-demo.com",
    skills: [
      { name: "React Native", icon: Smartphone, category: "Mobile" },
      { name: "GraphQL", icon: Globe, category: "Backend" },
      { name: "AWS", icon: Server, category: "Cloud" },
      { name: "Redis", icon: Database, category: "Cache" },
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className={`relative h-[400px] bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container px-6 h-full flex flex-col justify-between py-8 relative z-10">
          <Link to="/">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-b border-border bg-card">
        <div className="container px-6 py-6 flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container px-6 py-16 max-w-6xl">
        {/* Snapshots Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Project Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.snapshots.map((snapshot, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={snapshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* Why */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why This Project?</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.why}
            </p>
          </div>
        </section>

        {/* How */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Was Built</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.how}
            </p>
            
            {/* Tech Stack */}
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-background hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Access Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Access</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              {project.accessInfo}
            </p>
            <div className="flex gap-4 mt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Repository
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Tech Tags */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Full Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
