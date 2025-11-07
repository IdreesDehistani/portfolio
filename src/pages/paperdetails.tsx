import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaperDetail = () => {
  const { paperId } = useParams();

  // Sample paper data - replace with your actual papers
  const papers: Record<string, {
    title: string;
    year: string;
    abstract: string;
    content: string;
    pdfUrl?: string;
  }> = {
    "paper-1": {
      title: "Your Paper Title 1",
      year: "2024",
      abstract: "This is the abstract of your paper. Provide a brief summary of the research question, methodology, and key findings.",
      content: `
# Introduction

Write your paper introduction here. Explain the background, motivation, and objectives of your research.

## Research Question

What problem does this paper address?

# Methodology

Describe the methods and approaches used in your research.

## Data Collection

Explain how you collected your data.

## Analysis

Describe your analysis process.

# Results

Present your findings here.

# Conclusion

Summarize your conclusions and implications.

# References

List your references here.
      `,
      pdfUrl: "/path/to/your/paper.pdf" // Optional: link to PDF file
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
