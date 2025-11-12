import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { SimonGame } from "./SimonGame";

const Feedback = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 1000); // bounce lasts 1s
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button
        title="Click to play a quick Simon Says game"
        onClick={() => setIsGameOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer ${
          isBouncing ? "animate-bounce" : ""
        }`}
        aria-label="Play Simon Says game"
      >
        <Bot className="w-6 h-6" />
      </button>

      <SimonGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default Feedback;
