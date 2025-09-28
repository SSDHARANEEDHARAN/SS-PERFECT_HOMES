import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, Building, Utensils, Bed, Sunrise, Church, BookOpen, Wifi, Cpu, Shield, Check, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import MainDoorCarousel from "@/components/MainDoorCarousel";

// Door Images
import mainDoor1 from "@/assets/wood-work-1.jpg";
import mainDoor2 from "@/assets/wood-work-2.jpg";
import mainDoor3 from "@/assets/wood-work-3.jpg";
import mainDoor4 from "@/assets/wood-work-4.jpg";
import pujaDoor1 from "@/assets/craft-work-1.jpg";
import pujaDoor2 from "@/assets/craft-work-2.jpg";
import pujaDoor3 from "@/assets/craft-work-3.jpg";
import pujaDoor4 from "@/assets/craft-work-4.jpg";
import kitchenDoor1 from "@/assets/furnished-work-1.jpg";
import kitchenDoor2 from "@/assets/furnished-work-2.jpg";
import kitchenDoor3 from "@/assets/furnished-work-3.jpg";
import kitchenDoor4 from "@/assets/furnished-work-4.jpg";
import bedroomDoor1 from "@/assets/wood-work-13.jpg";
import bedroomDoor2 from "@/assets/wood-work-14.jpg";
import bedroomDoor3 from "@/assets/wood-work-15.jpg";
import bedroomDoor4 from "@/assets/wood-work-16.jpg";
import balconyDoor1 from "@/assets/automatic-gate-1.jpg";
import balconyDoor2 from "@/assets/automatic-gate-2.jpg";
import balconyDoor3 from "@/assets/automatic-gate-3.jpg";
import balconyDoor4 from "@/assets/automatic-gate-4.jpg";
import templeDoor1 from "@/assets/craft-work-13.jpg";
import templeDoor2 from "@/assets/craft-work-14.jpg";
import templeDoor3 from "@/assets/craft-work-15.jpg";
import templeDoor4 from "@/assets/craft-work-16.jpg";
import studyDoor1 from "@/assets/automatic-gate-13.jpg";
import studyDoor2 from "@/assets/automatic-gate-14.jpg";
import studyDoor3 from "@/assets/automatic-gate-15.jpg";
import studyDoor4 from "@/assets/automatic-gate-16.jpg";

// IoT Images
import iotImage1 from "@/assets/iot-integration-1.jpg";
import iotImage2 from "@/assets/iot-integration-2.jpg";
import iotImage3 from "@/assets/iot-integration-3.jpg";
import iotImage4 from "@/assets/iot-integration-4.jpg";
import smartHome1 from "@/assets/smart-home-1.jpg";
import smartHome2 from "@/assets/smart-home-2.jpg";
import smartHome3 from "@/assets/smart-home-3.jpg";
import smartHome4 from "@/assets/smart-home-4.jpg";
import autoGate1 from "@/assets/automatic-gate-5.jpg";
import autoGate2 from "@/assets/automatic-gate-6.jpg";
import autoGate3 from "@/assets/automatic-gate-7.jpg";
import autoGate4 from "@/assets/automatic-gate-8.jpg";
import waterIot1 from "@/assets/iot-water-1.jpg";
import waterIot2 from "@/assets/iot-water-2.jpg";
import waterIot3 from "@/assets/iot-water-3.jpg";
import waterIot4 from "@/assets/iot-water-4.jpg";

const AllServicesPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [showMainDoorCarousel, setShowMainDoorCarousel] = useState(false);

  const handleProjectSelect = () => {};

  const services = [
    {
      id: "doors",
      title: "Door Services",
      subtitle: "Premium Door Solutions",
      icon: Home,
      description: "Comprehensive door installation and customization services",
      categories: [
        {
          id: "main",
          name: "Main Doors",
          icon: Home,
          description: "Premium entrance doors with elegant designs",
          images: [
            { image: mainDoor1, name: "Premium Teak Door", specs: "Teak Wood, 7x3 ft, Natural Polish" },
            { image: mainDoor2, name: "Royal Mahogany Door", specs: "Mahogany Wood, 8x3.5 ft, Glossy Lacquer" },
            { image: mainDoor3, name: "Classic Oak Door", specs: "Oak Wood, 7.5x3 ft, Matte Varnish" },
            { image: mainDoor4, name: "Modern Pine Door", specs: "Pine Wood, 7x3 ft, UV Coating" },
          ]
        },
        {
          id: "puja",
          name: "Puja Doors",
          icon: Church,
          description: "Sacred doors for prayer and meditation spaces",
          images: [
            { image: pujaDoor1, name: "Sacred Teak Temple Door", specs: "Teak Wood, 6x2.5 ft, Natural Oil" },
            { image: pujaDoor2, name: "Divine Carved Door", specs: "Sheesham Wood, 6.5x3 ft, Hand Carved" },
            { image: pujaDoor3, name: "Spiritual Sandalwood Door", specs: "Sandalwood, 5.5x2 ft, Natural Wax" },
            { image: pujaDoor4, name: "Temple Style Door", specs: "Mango Wood, 6x2.5 ft, Traditional Stain" },
          ]
        },
        {
          id: "kitchen",
          name: "Kitchen Doors",
          icon: Utensils,
          description: "Modern and functional kitchen entry solutions",
          images: [
            { image: kitchenDoor1, name: "Modern Kitchen Door", specs: "Marine Plywood, 7x3 ft, Laminate" },
            { image: kitchenDoor2, name: "Contemporary Glass Door", specs: "Toughened Glass, 7x3 ft, Frosted" },
            { image: kitchenDoor3, name: "Rustic Wood Door", specs: "Reclaimed Wood, 6.5x2.5 ft, Distressed" },
            { image: kitchenDoor4, name: "Sleek Panel Door", specs: "MDF, 7x3 ft, High Gloss Paint" },
          ]
        },
        {
          id: "bedroom",
          name: "Bedroom Doors",
          icon: Bed,
          description: "Comfortable and stylish bedroom entrances",
          images: [
            { image: bedroomDoor1, name: "Elegant Bedroom Door", specs: "Engineered Wood, 7x3 ft, Veneer Polish" },
            { image: bedroomDoor2, name: "Sliding Panel Door", specs: "Bamboo, 8x3 ft, Natural Bamboo" },
            { image: bedroomDoor3, name: "French Style Door", specs: "Oak Wood, 7.5x3 ft, White Paint" },
            { image: bedroomDoor4, name: "Minimalist Door", specs: "Plywood, 7x2.5 ft, Smooth Lacquer" },
          ]
        },
        {
          id: "balcony",
          name: "Balcony Doors",
          icon: Sunrise,
          description: "Weather-resistant outdoor access doors",
          images: [
            { image: balconyDoor1, name: "Weather Resistant Door", specs: "Treated Wood, 7x3 ft, Exterior Grade" },
            { image: balconyDoor2, name: "Glass Panel Door", specs: "Aluminum Frame, 8x3.5 ft, Powder Coated" },
            { image: balconyDoor3, name: "Sliding Balcony Door", specs: "UPVC, 7.5x3 ft, UV Resistant" },
            { image: balconyDoor4, name: "French Balcony Door", specs: "Steel Frame, 7x3 ft, Anti-Rust Coating" },
          ]
        },
        {
          id: "temple",
          name: "Temple Doors",
          icon: Church,
          description: "Ornate doors for religious and spiritual spaces",
          images: [
            { image: templeDoor1, name: "Grand Temple Door", specs: "Teak Wood, 8x4 ft, Hand Carved" },
            { image: templeDoor2, name: "Sacred Entry Door", specs: "Rosewood, 7x3.5 ft, Gold Inlay" },
            { image: templeDoor3, name: "Divine Portal Door", specs: "Sandalwood, 6x3 ft, Sacred Oils" },
            { image: templeDoor4, name: "Blessed Sanctuary Door", specs: "Sheesham, 7.5x3 ft, Traditional Art" },
          ]
        },
        {
          id: "study",
          name: "Study Room Doors",
          icon: BookOpen,
          description: "Professional doors for work and study spaces",
          images: [
            { image: studyDoor1, name: "Executive Study Door", specs: "Mahogany, 7x3 ft, Executive Polish" },
            { image: studyDoor2, name: "Library Style Door", specs: "Oak Wood, 7.5x3 ft, Classic Stain" },
            { image: studyDoor3, name: "Modern Office Door", specs: "Engineered Wood, 7x2.5 ft, Professional Look" },
            { image: studyDoor4, name: "Scholar's Door", specs: "Pine Wood, 6.5x3 ft, Book-match Veneer" },
          ]
        }
      ]
    },
    {
      id: "iot",
      title: "IoT Services",
      subtitle: "Smart Technology Solutions",
      icon: Cpu,
      description: "Advanced IoT integration and smart automation systems",
      categories: [
        {
          id: "iot-integration",
          name: "IoT Integration",
          icon: Cpu,
          description: "Complete IoT ecosystem integration and setup",
          images: [
            { image: iotImage1, name: "IoT Sensor Hub", specs: "WiFi 802.11b/g/n, Bluetooth 5.0, 16 sensor inputs" },
            { image: iotImage2, name: "Smart Temperature Sensor", specs: "Temperature range: -40°C to +85°C, ±0.5°C accuracy" },
            { image: iotImage3, name: "WiFi Security Camera", specs: "1080p HD video, Night vision, Motion detection" },
            { image: iotImage4, name: "Smart Door Lock", specs: "Fingerprint + PIN access, Battery backup, WiFi enabled" },
          ]
        },
        {
          id: "smart-home",
          name: "Smart Home Automation",
          icon: Home,
          description: "Complete home automation and control systems",
          images: [
            { image: smartHome1, name: "Smart Home Controller", specs: "Central hub, Voice control, App integration" },
            { image: smartHome2, name: "Automated Lighting", specs: "LED smart bulbs, Color changing, Scheduling" },
            { image: smartHome3, name: "Climate Control", specs: "Smart thermostat, Energy saving, Remote access" },
            { image: smartHome4, name: "Security System", specs: "Motion sensors, Cameras, Mobile alerts" },
          ]
        },
        {
          id: "automatic-gate",
          name: "Automatic Gate",
          icon: Shield,
          description: "Automated gate systems with smart controls",
          images: [
            { image: autoGate1, name: "Motor Drive System", specs: "Heavy duty motor, Remote control, Safety sensors" },
            { image: autoGate2, name: "Access Control Panel", specs: "Keypad entry, RFID reader, Mobile app" },
            { image: autoGate3, name: "Security Integration", specs: "Camera monitoring, Intercom system, Alert notifications" },
            { image: autoGate4, name: "Smart Gate Controller", specs: "WiFi enabled, Smartphone control, Timer functions" },
          ]
        },
        {
          id: "iot-water",
          name: "IoT Water Management",
          icon: Droplets,
          description: "Smart water monitoring and management solutions",
          images: [
            { image: waterIot1, name: "Water Quality Monitor", specs: "pH, TDS, Temperature monitoring, Real-time alerts" },
            { image: waterIot2, name: "Smart Water Meter", specs: "Digital display, Usage tracking, Leak detection" },
            { image: waterIot3, name: "Automated Irrigation", specs: "Soil moisture sensors, Weather integration, Scheduling" },
            { image: waterIot4, name: "Water Tank Monitor", specs: "Level sensors, Pump automation, Mobile notifications" },
          ]
        }
      ]
    }
  ];

  const handleEnquiryClick = (categoryName: string, productName: string, specs: string) => {
    setSelectedService({
      title: `${categoryName} - ${productName}`,
      description: `Get detailed information about ${productName}. Specifications: ${specs}`
    });
  };

  const handleMainDoorClick = () => {
    setShowMainDoorCarousel(true);
  };

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">All Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Complete <span className="text-primary">Door & IoT Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From premium door installations to cutting-edge IoT integrations - we provide comprehensive solutions for your modern living needs.
              </p>
            </div>
          </div>
        </section>

        {services.map((service) => (
          <section key={service.id} className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <service.icon className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">{service.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>

              <div className="space-y-12">
                {service.categories.map((category) => (
                  <div key={category.id} className="bg-muted/20 rounded-2xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                      {category.id === "main" && (
                        <Button
                          onClick={handleMainDoorClick}
                          className="ml-auto"
                          size="lg"
                        >
                          View All Main Doors
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.images.map((product, idx) => (
                        <Card 
                          key={idx} 
                          className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {product.specs}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full group/button"
                              onClick={() => handleEnquiryClick(category.name, product.name, product.specs)}
                            >
                              Enquiry Now
                              <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/button:translate-x-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
                <p className="text-muted-foreground">
                  Professional installation services with quality guarantee
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  High-quality materials and components for lasting durability
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock customer support and maintenance services
                </p>
              </div>
            </div>
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

      {showMainDoorCarousel && (
        <MainDoorCarousel
          onClose={() => setShowMainDoorCarousel(false)}
        />
      )}
    </div>
  );
};

export default AllServicesPage;