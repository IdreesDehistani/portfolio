import { useEffect, useRef, useState } from "react";
import { DecryptedText } from "./ui/decrypted-text";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import seventh from "../assets/seventh.jpg";
import eight from "../assets/eight.jpg";
import nine from "../assets/nine.jpg";



const Socials = () => {
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [first,second,third,fourth,fifth,sixth,seventh,eight,nine];

  return (
    <section ref={sectionRef} className="py-32 bg-background">
      <div className="px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Connect With Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {isVisible && <DecryptedText text="What's Up In Socials" />}
          </h2>
        </div>
          {/*Hover effect for pics */}
        <div className="flex justify-center items-center gap-4 w-full overflow-x-auto pb-4 py-8">
          {images.map((image, index) => {
              const getTransform = () => {
              if (hoveredIndex === null) return "translateX(0px) scale(1)";
              if (hoveredIndex === index) return "translateX(0px) scale(1.15)";
              
              const distance = index - hoveredIndex;
              const offset = distance * 60;
              return `translateX(${offset}px) scale(0.95)`;
            };

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: getTransform(),
                  transition: "all 0.3s ease-out",
                  zIndex: hoveredIndex === index ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <div className="relative rounded-2xl border-4 border-primary/20 hover:border-primary cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-visible">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`images ${index + 1}`}
                    className="w-56 h-56 object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                    }}
                    />
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Socials;
