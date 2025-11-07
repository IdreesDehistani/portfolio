import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { DecryptedText } from "./ui/decrypted-text";

const Contact = () => {
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

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/IdreesDehistani" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/idrees-dehistani-63734621a/" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {isVisible && <DecryptedText text="Let's Work Together" />}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <a 
              href="mailto:idreesdehistani@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>

          <div className={`flex justify-center gap-6 mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {socials.map((social, index) => (
             <a
  key={index}
  href={social.href}
  aria-label={social.label}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border-2 border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
>
  <social.icon className="w-6 h-6 text-foreground" />
</a>

            ))}
          </div>
        </div>
      </div>

      <footer className="mt-32 border-t border-border">
        <div className="container px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yours Truly Idrees. Built with passion and React.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
