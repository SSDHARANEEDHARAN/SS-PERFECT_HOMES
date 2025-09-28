import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Wrench, Bot } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import QuoteForm from "./QuoteForm";

const Hero = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern kitchen with smart automation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">Premium Craftsmanship Meets AI Innovation</span>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Space with
              <span className="block text-transparent bg-gradient-to-r from-accent to-craft bg-clip-text">
                Smart Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Expert doors, kitchen design, and interior solutions powered by cutting-edge AI automation 
              for the modern web industry.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setShowQuoteForm(true)}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="h-64 flex flex-col items-center justify-center p-6 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Wrench className="w-12 h-12 text-craft mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-primary-foreground/80 text-center">
                Professional installation of doors, kitchens, and interiors with attention to every detail.
              </p>
            </div>
            
            <div className="h-64 flex flex-col items-center justify-center p-6 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Bot className="w-12 h-12 text-tech mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Automation</h3>
              <p className="text-primary-foreground/80 text-center">
                Smart home integration and web automation solutions for the digital age.
              </p>
            </div>
            
            <div className="h-64 flex flex-col items-center justify-center p-6 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Sparkles className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Solutions</h3>
              <p className="text-primary-foreground/80 text-center">
                End-to-end service from design consultation to final installation and setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showQuoteForm && (
        <QuoteForm
          title="Get Your Free Quote"
          description="Tell us about your project and we'll provide you with a detailed, personalized quote for our doors, kitchen, interiors, and automation services."
          onClose={() => setShowQuoteForm(false)}
        />
      )}
    </section>
  );
};

export default Hero;