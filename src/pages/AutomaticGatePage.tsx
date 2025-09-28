import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DoorOpen, Shield, Radio, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Import all Automatic Gate images
import gateImage1 from "@/assets/automatic-gate-1.jpg";
import gateImage2 from "@/assets/automatic-gate-2.jpg";
import gateImage3 from "@/assets/automatic-gate-3.jpg";
import gateImage4 from "@/assets/automatic-gate-4.jpg";
import gateImage5 from "@/assets/automatic-gate-5.jpg";
import gateImage6 from "@/assets/automatic-gate-6.jpg";
import gateImage7 from "@/assets/automatic-gate-7.jpg";
import gateImage8 from "@/assets/automatic-gate-8.jpg";
import gateImage9 from "@/assets/automatic-gate-9.jpg";
import gateImage10 from "@/assets/automatic-gate-10.jpg";
import gateImage11 from "@/assets/automatic-gate-11.jpg";
import gateImage12 from "@/assets/automatic-gate-12.jpg";
import gateImage13 from "@/assets/automatic-gate-13.jpg";
import gateImage14 from "@/assets/automatic-gate-14.jpg";
import gateImage15 from "@/assets/automatic-gate-15.jpg";
import gateImage16 from "@/assets/automatic-gate-16.jpg";
import gateImage17 from "@/assets/automatic-gate-17.jpg";
import gateImage18 from "@/assets/automatic-gate-18.jpg";
import gateImage19 from "@/assets/automatic-gate-19.jpg";
import gateImage20 from "@/assets/automatic-gate-20.jpg";

const AutomaticGatePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; description: string } | null>(null);

  const handleProjectSelect = () => {};

  const products = [
    {
      id: 1,
      name: "Sliding Gate Motor",
      image: gateImage1,
      dimensions: "450mm x 300mm x 200mm",
      specifications: "24V DC motor, 800kg capacity, Built-in receiver, LED indicators",
      features: ["Heavy duty operation", "Soft start/stop", "Manual release", "Safety features"]
    },
    {
      id: 2,
      name: "Access Control Keypad",
      image: gateImage2,
      dimensions: "120mm x 80mm x 25mm",
      specifications: "Weatherproof IP65, 1000 user codes, Backlit display, Relay output",
      features: ["Weather resistant", "User management", "Audit trail", "Tamper protection"]
    },
    {
      id: 3,
      name: "RFID Card Reader",
      image: gateImage3,
      dimensions: "100mm x 65mm x 20mm",
      specifications: "125kHz/13.56MHz, Read range: 10cm, Vandal resistant, LED feedback",
      features: ["Dual frequency", "Anti-vandal design", "Visual feedback", "Easy programming"]
    },
    {
      id: 4,
      name: "Remote Control",
      image: gateImage4,
      dimensions: "65mm x 40mm x 15mm",
      specifications: "433MHz frequency, 4-button design, Rolling code, 100m range",
      features: ["Long range operation", "Secure encryption", "Multiple gates", "Battery indicator"]
    },
    {
      id: 5,
      name: "Safety Sensor Beam",
      image: gateImage5,
      dimensions: "80mm x 60mm x 40mm each",
      specifications: "Infrared beam, 20m range, Weatherproof IP67, Auto alignment",
      features: ["Vehicle detection", "Weather resistant", "Easy alignment", "Safety compliance"]
    },
    {
      id: 6,
      name: "Swing Gate Operator",
      image: gateImage6,
      dimensions: "400mm x 150mm x 120mm",
      specifications: "Underground installation, 400kg per leaf, Hydraulic system, Manual override",
      features: ["Hidden installation", "Powerful operation", "Smooth movement", "Emergency access"]
    },
    {
      id: 7,
      name: "Gate Control Panel",
      image: gateImage7,
      dimensions: "300mm x 250mm x 100mm",
      specifications: "Microprocessor control, LCD display, Multiple inputs/outputs, Programming keys",
      features: ["Advanced control", "User interface", "Expandable I/O", "Diagnostic features"]
    },
    {
      id: 8,
      name: "Video Intercom",
      image: gateImage8,
      dimensions: "180mm x 120mm x 40mm",
      specifications: "Color camera, Night vision, Two-way audio, Weather resistant IP65",
      features: ["Video communication", "Night operation", "Clear audio", "Durable construction"]
    },
    {
      id: 9,
      name: "Backup Battery",
      image: gateImage9,
      dimensions: "200mm x 100mm x 160mm",
      specifications: "12V/18Ah capacity, Automatic charging, Low battery warning, 50 cycles backup",
      features: ["Extended operation", "Auto charging", "Status monitoring", "Reliable backup"]
    },
    {
      id: 10,
      name: "Magnetic Lock",
      image: gateImage10,
      dimensions: "250mm x 45mm x 35mm",
      specifications: "600kg holding force, 12/24V operation, LED status, Emergency release",
      features: ["High security", "Fail-safe operation", "Status indication", "Emergency unlock"]
    },
    {
      id: 11,
      name: "Loop Detector",
      image: gateImage11,
      dimensions: "120mm x 80mm x 40mm",
      specifications: "Vehicle detection, Frequency adjustment, Sensitivity control, Relay output",
      features: ["Accurate detection", "Adjustable settings", "Reliable operation", "Easy installation"]
    },
    {
      id: 12,
      name: "Warning Light",
      image: gateImage12,
      dimensions: "150mm diameter x 200mm height",
      specifications: "LED strobe beacon, Amber color, 12/24V operation, IP65 rated",
      features: ["High visibility", "Energy efficient", "Weather proof", "Long lifespan"]
    },
    {
      id: 13,
      name: "Receiver Module",
      image: gateImage13,
      dimensions: "100mm x 70mm x 30mm",
      specifications: "433MHz receiver, Rolling code, 2-channel output, LED indicators",
      features: ["Secure reception", "Dual outputs", "Status display", "Easy installation"]
    },
    {
      id: 14,
      name: "Gate Track System",
      image: gateImage14,
      dimensions: "6000mm length x 80mm x 60mm",
      specifications: "Galvanized steel, V-groove design, Roller guides, Modular sections",
      features: ["Smooth operation", "Corrosion resistant", "Precision guides", "Easy assembly"]
    },
    {
      id: 15,
      name: "Digital Keypad",
      image: gateImage15,
      dimensions: "130mm x 90mm x 30mm",
      specifications: "LED display, 500 user codes, Time zones, Anti-passback",
      features: ["Advanced features", "Time control", "Security functions", "User friendly"]
    },
    {
      id: 16,
      name: "Smartphone Controller",
      image: gateImage16,
      dimensions: "Virtual app interface",
      specifications: "iOS/Android app, WiFi/GSM connectivity, Real-time status, Remote control",
      features: ["Mobile access", "Real-time updates", "Multiple users", "Activity logs"]
    },
    {
      id: 17,
      name: "Solar Panel Kit",
      image: gateImage17,
      dimensions: "1000mm x 670mm x 35mm",
      specifications: "100W monocrystalline, Charge controller, Battery included, Weather resistant",
      features: ["Renewable energy", "Off-grid operation", "Complete kit", "Eco-friendly"]
    },
    {
      id: 18,
      name: "Safety Edge",
      image: gateImage18,
      dimensions: "2000mm length x 40mm x 15mm",
      specifications: "Pressure sensitive, Rubber construction, NC/NO contacts, IP67 rated",
      features: ["Collision protection", "Flexible mounting", "Weather resistant", "Safety compliance"]
    },
    {
      id: 19,
      name: "Wireless Keypad",
      image: gateImage19,
      dimensions: "120mm x 80mm x 25mm",
      specifications: "Battery powered, 433MHz wireless, Backlit keys, 2-year battery life",
      features: ["Wire-free installation", "Long battery life", "Clear visibility", "Easy programming"]
    },
    {
      id: 20,
      name: "Master Control System",
      image: gateImage20,
      dimensions: "500mm x 400mm x 150mm",
      specifications: "Multi-gate control, Network connectivity, Central monitoring, Scalable system",
      features: ["Multiple gates", "Network integration", "Central management", "Expandable design"]
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
                <DoorOpen className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Automatic Gate Systems</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Secure Access with <span className="text-primary">Automatic Gates</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional automatic gate solutions combining security, convenience, and reliability for residential and commercial properties.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gate Automation Products</h2>
              <p className="text-lg text-muted-foreground">
                Complete solutions for automatic gate systems and access control
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
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Advanced access control and monitoring for maximum property security
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Remote Operation</h3>
                <p className="text-muted-foreground">
                  Control gates from anywhere with smartphone apps and remote controls
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DoorOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Expert installation and maintenance services for optimal performance
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

export default AutomaticGatePage;