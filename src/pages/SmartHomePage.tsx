import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, Smartphone, Zap, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Import all Smart Home images
import smartHomeImage1 from "@/assets/smart-home-1.jpg";
import smartHomeImage2 from "@/assets/smart-home-2.jpg";
import smartHomeImage3 from "@/assets/smart-home-3.jpg";
import smartHomeImage4 from "@/assets/smart-home-4.jpg";
import smartHomeImage5 from "@/assets/smart-home-5.jpg";
import smartHomeImage6 from "@/assets/smart-home-6.jpg";
import smartHomeImage7 from "@/assets/smart-home-7.jpg";
import smartHomeImage8 from "@/assets/smart-home-8.jpg";
import smartHomeImage9 from "@/assets/smart-home-9.jpg";
import smartHomeImage10 from "@/assets/smart-home-10.jpg";
import smartHomeImage11 from "@/assets/smart-home-11.jpg";
import smartHomeImage12 from "@/assets/smart-home-12.jpg";
import smartHomeImage13 from "@/assets/smart-home-13.jpg";
import smartHomeImage14 from "@/assets/smart-home-14.jpg";
import smartHomeImage15 from "@/assets/smart-home-15.jpg";
import smartHomeImage16 from "@/assets/smart-home-16.jpg";
import smartHomeImage17 from "@/assets/smart-home-17.jpg";
import smartHomeImage18 from "@/assets/smart-home-18.jpg";
import smartHomeImage19 from "@/assets/smart-home-19.jpg";
import smartHomeImage20 from "@/assets/smart-home-20.jpg";

const SmartHomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; description: string } | null>(null);

  const handleProjectSelect = () => {};

  const products = [
    {
      id: 1,
      name: "Smart Control Panel",
      image: smartHomeImage1,
      dimensions: "200mm x 150mm x 25mm",
      specifications: "7-inch touchscreen, WiFi/Zigbee hub, Voice control, Wall mounted",
      features: ["Central control", "Scene management", "Voice commands", "Mobile app sync"]
    },
    {
      id: 2,
      name: "Voice Assistant Speaker",
      image: smartHomeImage2,
      dimensions: "100mm diameter x 160mm height",
      specifications: "360° audio, Far-field voice recognition, Multi-room audio, WiFi/Bluetooth",
      features: ["Voice control", "Music streaming", "Smart home hub", "Hands-free operation"]
    },
    {
      id: 3,
      name: "LED Strip Controller",
      image: smartHomeImage3,
      dimensions: "120mm x 80mm x 30mm",
      specifications: "RGB+W control, WiFi enabled, 24V output, IP65 rated",
      features: ["Color changing", "Music sync", "Scene presets", "App control"]
    },
    {
      id: 4,
      name: "Smart Ceiling Fan",
      image: smartHomeImage4,
      dimensions: "1320mm diameter x 400mm height",
      specifications: "DC motor, WiFi controlled, LED lighting, Reversible operation",
      features: ["Variable speed", "Remote control", "Energy efficient", "Lighting integration"]
    },
    {
      id: 5,
      name: "Automated Curtains",
      image: smartHomeImage5,
      dimensions: "Motor: 350mm x 60mm diameter",
      specifications: "Quiet operation, WiFi/RF control, Solar charging option, Timer functions",
      features: ["Scheduled operation", "Light sensors", "Manual override", "Easy installation"]
    },
    {
      id: 6,
      name: "Security Keypad",
      image: smartHomeImage6,
      dimensions: "120mm x 80mm x 15mm",
      specifications: "Backlit keys, Multiple user codes, Panic button, Battery backup",
      features: ["User management", "Entry logging", "Duress codes", "Wireless connectivity"]
    },
    {
      id: 7,
      name: "WiFi 6 Router",
      image: smartHomeImage7,
      dimensions: "250mm x 180mm x 50mm",
      specifications: "WiFi 6 standard, Mesh capability, 4 Gigabit ports, MU-MIMO",
      features: ["High-speed internet", "Smart device priority", "Parental controls", "Guest network"]
    },
    {
      id: 8,
      name: "Multi-Room Audio",
      image: smartHomeImage8,
      dimensions: "280mm x 180mm x 120mm",
      specifications: "Wireless speakers, Synchronized playback, Hi-Fi quality, Voice control",
      features: ["Whole home audio", "Streaming services", "Voice activation", "Zone control"]
    },
    {
      id: 9,
      name: "Kitchen Automation",
      image: smartHomeImage9,
      dimensions: "300mm x 200mm x 50mm",
      specifications: "Appliance control, Recipe integration, Voice commands, Touch interface",
      features: ["Appliance sync", "Recipe assistance", "Timer management", "Shopping lists"]
    },
    {
      id: 10,
      name: "Smart Bathroom Fan",
      image: smartHomeImage10,
      dimensions: "250mm x 250mm x 100mm",
      specifications: "Humidity sensor, Timer control, Quiet operation, Energy efficient",
      features: ["Auto humidity control", "Timer functions", "Low noise", "LED indicator"]
    },
    {
      id: 11,
      name: "Water Heater Control",
      image: smartHomeImage11,
      dimensions: "150mm x 100mm x 40mm",
      specifications: "Temperature control, WiFi enabled, Energy monitoring, Safety features",
      features: ["Remote control", "Schedule heating", "Energy reports", "Safety shutoff"]
    },
    {
      id: 12,
      name: "Video Intercom",
      image: smartHomeImage12,
      dimensions: "200mm x 150mm x 30mm",
      specifications: "HD video, Two-way audio, Night vision, Mobile notifications",
      features: ["Video calling", "Door release", "Recording capability", "Mobile alerts"]
    },
    {
      id: 13,
      name: "Pool Controller",
      image: smartHomeImage13,
      dimensions: "300mm x 250mm x 150mm",
      specifications: "Chemical monitoring, Temperature control, Pump scheduling, WiFi enabled",
      features: ["Water quality", "Auto chemical dosing", "Energy scheduling", "Remote monitoring"]
    },
    {
      id: 14,
      name: "Energy Monitor",
      image: smartHomeImage14,
      dimensions: "180mm x 120mm x 40mm",
      specifications: "Real-time usage, Circuit monitoring, Cost tracking, Historical data",
      features: ["Usage tracking", "Cost analysis", "Peak demand alerts", "Conservation tips"]
    },
    {
      id: 15,
      name: "Backup Battery System",
      image: smartHomeImage15,
      dimensions: "400mm x 300mm x 150mm",
      specifications: "Lithium battery, 2000Wh capacity, Automatic switching, UPS function",
      features: ["Power backup", "Seamless switching", "Battery monitoring", "Grid-tie capability"]
    },
    {
      id: 16,
      name: "Garage Sensor",
      image: smartHomeImage16,
      dimensions: "80mm x 50mm x 25mm",
      specifications: "Vehicle detection, WiFi connectivity, Battery powered, Weather resistant",
      features: ["Car presence", "Mobile alerts", "Automation triggers", "Easy mounting"]
    },
    {
      id: 17,
      name: "Tablet Wall Mount",
      image: smartHomeImage17,
      dimensions: "250mm x 180mm x 50mm",
      specifications: "Adjustable angle, Power delivery, Cable management, Security lock",
      features: ["Flexible positioning", "Clean installation", "Cable hiding", "Theft protection"]
    },
    {
      id: 18,
      name: "Protocol Bridge",
      image: smartHomeImage18,
      dimensions: "100mm x 80mm x 30mm",
      specifications: "Multi-protocol support, Zigbee/Z-Wave/WiFi, Range extender, Local control",
      features: ["Device compatibility", "Range extension", "Local processing", "Cloud backup"]
    },
    {
      id: 19,
      name: "Scene Controller",
      image: smartHomeImage19,
      dimensions: "120mm x 80mm x 15mm",
      specifications: "Programmable buttons, Wireless control, LED indicators, Battery powered",
      features: ["One-touch scenes", "Multiple functions", "Status feedback", "Portable design"]
    },
    {
      id: 20,
      name: "Central Server",
      image: smartHomeImage20,
      dimensions: "430mm x 300mm x 44mm (1U)",
      specifications: "Rack mounted, Local processing, Cloud sync, Redundant storage",
      features: ["Professional grade", "Local control", "Data security", "Scalable system"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Smart Home Automation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Intelligent Home <span className="text-primary">Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of living with comprehensive smart home solutions that automate, optimize, and enhance every aspect of your daily life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Home Products</h2>
              <p className="text-lg text-muted-foreground">
                Complete automation solutions for modern living
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card 
                  key={product.id} 
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
                      <span className="font-semibold">Dimensions:</span> {product.dimensions}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">Specifications:</p>
                        <p className="text-xs text-muted-foreground">{product.specifications}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold mb-2">Features:</p>
                        <ul className="space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-xs">
                              <Check className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group/button"
                        onClick={() => setSelectedProduct({ 
                          title: `${product.name} Enquiry Request`, 
                          description: `Get detailed information about ${product.name}. ${product.specifications}` 
                        })}
                      >
                        Enquiry Now
                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/button:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Control</h3>
                <p className="text-muted-foreground">
                  Control your entire home from anywhere with our intuitive mobile app
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
                <p className="text-muted-foreground">
                  Smart automation reduces energy consumption while maintaining comfort
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Whole Home Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate all systems for unified smart home experience
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <EnquiryForm
          title={selectedProduct.title}
          description={selectedProduct.description}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default SmartHomePage;