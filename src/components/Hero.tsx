import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
            GRADEMATE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            faster.fairer.smarter
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            GradeMate automates exam paper evaluation using OCR and AI, saving time for 
            educators and providing instant reports. Upload. Evaluate. Report – all in minutes.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link to="/auth">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;