import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import paper1 from "@/assets/papers/paper1.pdf";

const PaperDetail = () => {
  const { paperId } = useParams();
  const papers: Record<string, {
    title: string;
    year: string;
    abstract: string;
    content: string;
    pdfUrl?: string;
  }> = {
    "paper-1": {
      title: "7 Psychology Hacks To Stop Overthinking.",
      year: "2023",
      abstract: "7 psychology hacks to stop overthinking and regain control of your mind, Based on lecturers' personal research",
      content: `
# 7 Psychology Hacks To Stop Overthinking.

Before you read these “hacks” or “tips,” remember that most of them aren’t new; you’ve probably heard them many times before. But knowing something and applying it are two different things. Think of this as a friendly reminder, not a lecture. Approach these ideas with an open mind and a genuine willingness to make small changes that can lead to a big difference in how you think and feel.


1.Change the way you talk to yourself.

Overthinkers often keep saying negative things to themselves. 
If you keep repeating “I can’t be on time” or “I can’t do anything” your brain starts to believe it. 
Replacing negative self-talk with constructive phrases like “I’m improving” or “I can handle this” will have effects that you can not imagine. 

2.Let go of the past. 

Overthinkers often keep thinking “I wish”, “I should have ..” 
You cannot change the past, you cannot even change a second that just passed by.
Learn the lessons from your past and ensure never to repeat the same mistakes again. It is easier said than done but at least trying will help you in the long run. 

3.Live in the moment. 

Overthinkers find it hard to live in the present. The past or future is always on their mind. 
Focus on the current moment; Focus on what is happening right now.  
Notice the world around you, how you feel now and what you can do to make this moment meaningful. 

4.Challenge your thoughts. 

Overthinkers can get lost in thoughts little more than usual. 
When a negative or useless thought appears, write it down, then tear and throw it away.
This small act helps your brain release that thought physically and mentally.

5.Focus on what you can control. 

Overthinkers often worry about things out of their control.
Take a minute to analyze the situation; Is there something you have control over, is it something you can actually influence?
Focus exclusively on what is within your power, when you focus on that your energy and confidence grow. 

6. Identify your fears. 

Overthinkers usually have irrational fears and tend to suffer more often in imagination (of what “might be”) than in reality. 
Best strategy to overcome fear? Take action!
The moment you take action is the moment you win a battle with your overthinking. Every step weakens fear and strengthens your control over overthinking.

7. Write down solutions. 

Overthinkers keep thinking only of the problems. 
Instead, divert your thinking towards the solutions. 
Write down the problems and think of one clear solution for each problem. 
This way your brain shifts its attention from the worry to problem solving.
I hope these tips spark something in your mind and help you see that overthinking doesn’t have to control you. Once you start applying even one of them, you’ll notice that fear and hesitation begin to fade and action slowly takes their place.
      `,
      pdfUrl: paper1, // link to PDF file
    },
    "paper-2": {
      title: "Your Paper Title 2",
      year: "2024",
      abstract: "Brief abstract for paper 2.",
      content: "Full content of paper 2...",
    },
    "essay-1": {
      title: "Your Essay Title 1",
      year: "2023",
      abstract: "Brief abstract for essay 1.",
      content: "Full content of essay 1...",
    }
  };

  const paper = papers[paperId || ""];

  if (!paper) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Paper Not Found</h1>
          <Link to="/">
            <Button variant="outline">
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
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container px-6 py-4">
          <Link to="/#papers">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Papers
            </Button>
          </Link>
        </div>
      </header>

      {/* Paper Content */}
      <main className="container px-6 py-12 max-w-4xl mx-auto">
        {/* Paper Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-primary" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{paper.year}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {paper.title}
          </h1>
          <div className="bg-secondary/50 border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">Abstract</h2>
            <p className="text-muted-foreground leading-relaxed">{paper.abstract}</p>
          </div>
        </div>

        {/* PDF Viewer or Text Content */}
        {paper.pdfUrl ? (
          <div className="mb-8">
            <div className="bg-card border border-border rounded-lg p-4 mb-4">
              <a 
                href={paper.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                Download PDF
              </a>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              <iframe
                src={paper.pdfUrl}
                className="w-full h-[800px]"
                title={paper.title}
              />
            </div>
          </div>
        ) : (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              className="text-foreground leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: paper.content.replace(/\n/g, '<br />').replace(/# (.*?)(<br \/>|$)/g, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>').replace(/## (.*?)(<br \/>|$)/g, '<h2 class="text-2xl font-semibold mt-6 mb-3">$2</h2>') }}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default PaperDetail;
