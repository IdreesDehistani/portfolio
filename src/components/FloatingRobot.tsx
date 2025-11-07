import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { SimonGame } from "./SimonGame.tsx";

export const FloatingRobot = () => {
  const [position, setPosition] = useState({ x: 80, y: 20 });
  const [isGameOpen, setIsGameOpen] = useState(false);

useEffect(() => {
  const moveRobot = () => {
    const newX = Math.min(90, Math.max(10, Math.random() * 80 + 10));
    const newY = Math.min(80, Math.max(10, Math.random() * 60 + 10));
    setPosition({ x: newX, y: newY });
  };

  if (!isGameOpen) {
    const interval = setInterval(moveRobot, 3000);
    return () => clearInterval(interval);
  }
}, [isGameOpen]);


  return (
    <>
      <button
        title="Click to play a quick Simon Says game"
        onClick={() => setIsGameOpen(true)}
        className="fixed z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transition: "left 2s ease-in-out, top 2s ease-in-out",
        }}
        aria-label="Play Simon Says game"
      >
        <Bot className="w-6 h-6" />
      </button>

      <SimonGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};
