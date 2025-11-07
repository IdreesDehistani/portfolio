import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  text: string;
  interval?: number;
  className?: string;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.?/";

export const DecryptedText = ({
  text,
  interval = 50,
  className,
}: DecryptedTextProps) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }
    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span className={className}></span>;
  }

  return (
    <span className={cn("font-mono", className)}>
      {outputText}
      <span className="text-primary/40">{remainder}</span>
    </span>
  );
};
