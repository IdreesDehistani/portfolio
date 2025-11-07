import { useEffect, useState } from "react";
import { Award, Users } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("certifications");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const certificates = [
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      date: "2023",
      description: "Introductory course on Python programming fundamentals"
    },

    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      issuer: "Udemy",
      date: "2025",
      description: "Comprehensive Python programming bootcamp covering various projects, games and applications"
    },
    {
      title: "Foreign Trade Training Program Certificate for International Students",
      issuer: "Ostim OSB (Organized Industrial Zone), Ankara Development Agency with cooperation from OSTIM Technical University and Gaziteknopark.",
      date: "2024",
      description: "Awarded for participation in the 2024 International Student Foreign Trade Training Program organized by Ostim OSB and Ankara Development Agency."
    }
  ];

  const voluntaryWork = [
    {
      title: "Talk Over Tea - Producer & Host",
      organization: "OSTIM Technical University",
      period: "2022 - 2023",
      description: "Producing and hosting a podcast series discussing technology and innovation topics with the university's professors and students"
    },
    {
      title: "TEDxOSTIMTechnicalUniversity - Operations Team Member",
      organization: "TEDx with collaboration from OSTIM Technical University",
      period: "2025",
      description: "Contributed to organizing and managing the TEDx event at OSTIM Technical University, ensuring smooth operations and logistics"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isVisible && <DecryptedText text="Certifications & Contributions" />}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and community involvement
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Voluntary Work */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Voluntary Work</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {voluntaryWork.map((work, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{work.title}</CardTitle>
                  <CardDescription>{work.organization} • {work.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
