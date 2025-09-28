import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { ChefHat, Lightbulb, Thermometer, Clock, Wifi, Shield } from "lucide-react";

// Import smart kitchen images
import smartKitchen1 from "@/assets/bg-kitchen-1.jpg";
import smartKitchen2 from "@/assets/bg-kitchen-2.jpg";

const SmartKitchenPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  // Generate smart kitchen gallery images
  const smartKitchenImages = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: i % 2 === 0 ? smartKitchen1 : smartKitchen2,
    alt: `Smart Kitchen Design ${i + 1}`,
    title: `Smart Kitchen ${i + 1}`,
    features: ["IoT Integration", "Smart Appliances", "Voice Control", "Energy Efficient"]
  }));

  const totalPages = Math.ceil(smartKitchenImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentKitchens = smartKitchenImages.slice(startIndex, startIndex + itemsPerPage);

  const smartFeatures = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Smart Cooking",
      description: "Intelligent cooking systems with automated controls"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "LED Lighting",
      description: "Automated lighting with mood and task settings"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Climate Control",
      description: "Smart ventilation and temperature management"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Management",
      description: "Automated timers and cooking schedules"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Connected",
      description: "All appliances connected through smart home network"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Features",
      description: "Advanced safety monitoring and alerts"
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
              Smart Kitchen Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your kitchen with intelligent automation, IoT integration, and modern design for the ultimate cooking experience.
            </p>
            <Button 
              size="lg" 
              onClick={() => setSelectedService({ 
                title: "Smart Kitchen Consultation", 
                description: "Get expert advice on smart kitchen automation" 
              })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Enquiry Now
            </Button>
          </div>
        </section>

        {/* Smart Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Smart Kitchen Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smartFeatures.map((feature, index) => (
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

        {/* Kitchen Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Smart Kitchen Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of smart kitchen designs featuring cutting-edge technology and modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentKitchens.map((kitchen, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={kitchen.src} 
                      alt={kitchen.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{kitchen.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {kitchen.features.slice(0, 2).map((feature, featureIdx) => (
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
                        title: `${kitchen.title} - Smart Kitchen`, 
                        description: `Get details about ${kitchen.title} smart kitchen design` 
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

export default SmartKitchenPage;