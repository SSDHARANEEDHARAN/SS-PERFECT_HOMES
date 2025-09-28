import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Home, Palette, Lightbulb, Sofa, Bed, Coffee } from "lucide-react";

// Import interior images
import bgLiving1 from "@/assets/bg-living-1.jpg";
import bgLiving2 from "@/assets/bg-living-2.jpg";
import bgBedroom1 from "@/assets/bg-bedroom-1.jpg";
import bgBedroom2 from "@/assets/bg-bedroom-2.jpg";
import bgDining1 from "@/assets/bg-dining-1.jpg";
import bgDining2 from "@/assets/bg-dining-2.jpg";
import bgOffice1 from "@/assets/bg-office-1.jpg";
import bgKitchen1 from "@/assets/bg-kitchen-1.jpg";
import bgBathroom1 from "@/assets/bg-bathroom-1.jpg";
import bgStudy1 from "@/assets/bg-study-1.jpg";

const InteriorDesignPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  // Generate interior design gallery images
  const interiorImages = [
    bgLiving1, bgLiving2, bgBedroom1, bgBedroom2, bgDining1, 
    bgDining2, bgOffice1, bgKitchen1, bgBathroom1, bgStudy1 
  ];

  const interiorGallery = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: interiorImages[i % interiorImages.length],
    alt: `Interior Design ${i + 1}`,
    title: `Interior Design ${i + 1}`,
    category: ["Living Room", "Bedroom", "Kitchen", "Dining", "Bathroom", "Office"][i % 6],
    features: ["Modern Design", "Premium Materials", "Custom Furniture", "Lighting Design"]
  }));

  const totalPages = Math.ceil(interiorGallery.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInteriors = interiorGallery.slice(startIndex, startIndex + itemsPerPage);

  const interiorServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Complete Home Design",
      description: "Full home interior design with 3D visualization"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Consultation",
      description: "Expert color schemes and material selection"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Lighting Design",
      description: "Architectural and decorative lighting solutions"
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Living Spaces",
      description: "Living room and family area design"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Bedroom Design",
      description: "Master and guest bedroom interior solutions"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Kitchen & Dining",
      description: "Functional and stylish kitchen and dining areas"
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
              Interior Design Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your living spaces with our expert interior design services. From concept to completion, we create beautiful and functional environments.
            </p>
            <Button 
              size="lg" 
              onClick={() => setSelectedService({ 
                title: "Interior Design Consultation", 
                description: "Get expert advice on your interior design project" 
              })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Enquiry Now
            </Button>
          </div>
        </section>

        {/* Interior Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Interior Design Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorServices.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interior Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interior Design Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of stunning interior designs across various spaces and styles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentInteriors.map((interior, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={interior.src} 
                      alt={interior.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{interior.title}</h3>
                    <Badge variant="outline" className="mb-3">
                      {interior.category}
                    </Badge>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {interior.features.slice(0, 2).map((feature, featureIdx) => (
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
                        title: `${interior.title} - Interior Design`, 
                        description: `Get details about ${interior.title} interior design` 
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

export default InteriorDesignPage;