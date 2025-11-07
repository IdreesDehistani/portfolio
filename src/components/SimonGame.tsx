import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SimonGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SimonGame = ({ isOpen, onClose }: SimonGameProps) => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [highlightedLight, setHighlightedLight] = useState<number | null>(null);

  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500"];

  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    setScore(0);
    setGameStarted(true);
    nextRound([]);
  };

  const nextRound = (currentSequence: number[]) => {
    const newLight = Math.floor(Math.random() * 3);
    const newSequence = [...currentSequence, newLight];
    setSequence(newSequence);
    setUserSequence([]);
    playSequence(newSequence);
  };

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true);
    setIsUserTurn(false);
    
    const delay = Math.max(300, 800 - score * 50); // Gets faster as score increases
    
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setHighlightedLight(seq[i]);
      await new Promise(resolve => setTimeout(resolve, delay));
      setHighlightedLight(null);
    }
    
    setIsPlaying(false);
    setIsUserTurn(true);
  };

  const handleLightClick = (index: number) => {
    if (!isUserTurn || isPlaying) return;

    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    // Flash the clicked light
    setHighlightedLight(index);
    setTimeout(() => setHighlightedLight(null), 200);

    if (sequence[newUserSequence.length - 1] !== index) {
      toast.error(`Game Over! Final Score: ${score}`);
      setGameStarted(false);
      setIsUserTurn(false);
      return;
    }

    if (newUserSequence.length === sequence.length) {
      const newScore = score + 1;
      setScore(newScore);
      toast.success(`Correct! Score: ${newScore}`);
      setTimeout(() => nextRound(sequence), 1000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Simon Says Memory Game</DialogTitle>
          <DialogDescription>
            Watch the sequence and repeat it back. It gets faster as you progress!
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="text-2xl font-bold">Score: {score}</div>
          
          <div className="flex gap-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => handleLightClick(index)}
                disabled={!isUserTurn || isPlaying}
                className={`w-20 h-20 rounded-lg transition-all duration-200 ${
                  highlightedLight === index
                    ? `${colors[index]} scale-110 shadow-lg`
                    : "bg-muted"
                } ${isUserTurn && !isPlaying ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed"}`}
              />
            ))}
          </div>

          {isPlaying && (
            <div className="text-sm text-muted-foreground">Watch carefully...</div>
          )}
          
          {isUserTurn && (
            <div className="text-sm text-muted-foreground">Your turn!</div>
          )}

          {!gameStarted && (
            <Button onClick={startGame} size="lg">
              {score > 0 ? "Play Again" : "Start Game"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
