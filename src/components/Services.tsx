import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DoorOpen, ChefHat, Home, Bot, ArrowRight, Check } from "lucide-react";
import doorsImage from "@/assets/doors-service.jpg";
import interiorsImage from "@/assets/interiors-service.jpg";
import aiImage from "@/assets/ai-automation.jpg";
import QuoteForm from "./QuoteForm";

const Services = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);

  const services = [
    {
      id: "iot-integrations",
      icon: Bot,
      title: "IoT Integrations",
      description: "Complete IoT ecosystem for connected living",
      image: aiImage,
      features: [
        "Smart device connectivity",
        "Sensor networks",
        "Real-time monitoring",
        "Cloud integration"
      ],
      color: "accent"
    },
    {
      id: "smart-homes",
      icon: Home,
      title: "Smart Homes",
      description: "Intelligent home automation systems",
      image: interiorsImage,
      features: [
        "Voice control systems",
        "Automated lighting",
        "Climate control",
        "Security integration"
      ],
      color: "tech"
    },
    {
      id: "smart-systems",
      icon: DoorOpen,
      title: "Smart Systems",
      description: "Advanced control and monitoring systems",
      image: doorsImage,
      features: [
        "Central control panels",
        "Mobile app control",
        "System monitoring",
        "Remote diagnostics"
      ],
      color: "primary"
    },
    {
      id: "power-windows",
      icon: ChefHat,
      title: "Power Windows",
      description: "Automated window control solutions",
      image: "/placeholder.svg",
      features: [
        "Motorized window systems",
        "Remote control operation",
        "Weather integration",
        "Energy efficiency"
      ],
      color: "craft"
    },
    {
      id: "gate-automations",
      icon: DoorOpen,
      title: "Gate Automations",
      description: "Smart gate and access control systems",
      image: doorsImage,
      features: [
        "Automatic gate operation",
        "Access control systems",
        "RFID integration",
        "Security cameras"
      ],
      color: "primary"
    },
    {
      id: "electrical-tables",
      icon: Bot,
      title: "Electrical Tables",
      description: "Smart electrical distribution and control",
      image: aiImage,
      features: [
        "Smart distribution panels",
        "Load monitoring",
        "Energy management",
        "Safety systems"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional craftsmanship to cutting-edge AI solutions, we deliver excellence across every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="h-[600px] group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 rounded-lg bg-${service.color} shadow-lg`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}-foreground`} />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group mt-auto"
                    onClick={() => setSelectedService({ 
                      title: `${service.title} Quote Request`, 
                      description: `Get a personalized quote for ${service.title.toLowerCase()} services. ${service.description}` 
                    })}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <QuoteForm
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;