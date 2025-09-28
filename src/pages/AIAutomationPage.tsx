import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Brain, Cpu, Zap, Shield, Settings, Smartphone } from "lucide-react";

// Import AI automation image
import aiAutomation from "@/assets/ai-automation.jpg";

const AIAutomationPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  // Generate AI automation gallery images
  const aiAutomationImages = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: aiAutomation,
    alt: `AI Automation System ${i + 1}`,
    title: `AI Automation ${i + 1}`,
    features: ["Machine Learning", "Voice Control", "Predictive Analytics", "Smart Scheduling"]
  }));

  const totalPages = Math.ceil(aiAutomationImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAutomation = aiAutomationImages.slice(startIndex, startIndex + itemsPerPage);

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Intelligence",
      description: "Advanced machine learning algorithms for smart automation"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Neural Processing",
      description: "Real-time processing and decision making capabilities"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "Lightning fast response to commands and triggers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Enterprise-grade security with data encryption"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Configuration",
      description: "Tailored automation rules for your specific needs"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Control",
      description: "Complete control through mobile apps and interfaces"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate your home and business operations with cutting-edge technology.
            </p>
            <Button 
              size="lg" 
              onClick={() => setSelectedService({ 
                title: "AI Automation Consultation", 
                description: "Get expert advice on AI automation solutions" 
              })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Enquiry Now
            </Button>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              AI Automation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Automation Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Automation Systems</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our advanced AI automation systems designed to make your life easier and more efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentAutomation.map((automation, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={automation.src} 
                      alt={automation.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{automation.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {automation.features.slice(0, 2).map((feature, featureIdx) => (
                        <Badge key={featureIdx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedService({ 
                        title: `${automation.title} - AI System`, 
                        description: `Get details about ${automation.title} AI automation system` 
                      })}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {selectedService && (
        <EnquiryForm
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default AIAutomationPage;