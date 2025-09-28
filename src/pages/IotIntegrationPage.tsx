import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wifi, Cpu, Shield, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Import all IoT Integration images
import iotImage1 from "@/assets/iot-integration-1.jpg";
import iotImage2 from "@/assets/iot-integration-2.jpg";
import iotImage3 from "@/assets/iot-integration-3.jpg";
import iotImage4 from "@/assets/iot-integration-4.jpg";
import iotImage5 from "@/assets/iot-integration-5.jpg";
import iotImage6 from "@/assets/iot-integration-6.jpg";
import iotImage7 from "@/assets/iot-integration-7.jpg";
import iotImage8 from "@/assets/iot-integration-8.jpg";
import iotImage9 from "@/assets/iot-integration-9.jpg";
import iotImage10 from "@/assets/iot-integration-10.jpg";
import iotImage11 from "@/assets/iot-integration-11.jpg";
import iotImage12 from "@/assets/iot-integration-12.jpg";
import iotImage13 from "@/assets/iot-integration-13.jpg";
import iotImage14 from "@/assets/iot-integration-14.jpg";
import iotImage15 from "@/assets/iot-integration-15.jpg";
import iotImage16 from "@/assets/iot-integration-16.jpg";
import iotImage17 from "@/assets/iot-integration-17.jpg";
import iotImage18 from "@/assets/iot-integration-18.jpg";
import iotImage19 from "@/assets/iot-integration-19.jpg";
import iotImage20 from "@/assets/iot-integration-20.jpg";

const IotIntegrationPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; description: string } | null>(null);

  const handleProjectSelect = () => {};

  const products = [
    {
      id: 1,
      name: "IoT Sensor Hub",
      image: iotImage1,
      dimensions: "120mm x 80mm x 35mm",
      specifications: "WiFi 802.11b/g/n, Bluetooth 5.0, 16 sensor inputs, IP65 rated",
      features: ["Multi-protocol support", "Cloud connectivity", "Real-time monitoring", "Mobile app control"]
    },
    {
      id: 2,
      name: "Smart Temperature Sensor",
      image: iotImage2,
      dimensions: "45mm x 25mm x 15mm",
      specifications: "Temperature range: -40°C to +85°C, ±0.5°C accuracy, Battery life: 2 years",
      features: ["Wireless connectivity", "Low power consumption", "Weather resistant", "Data logging"]
    },
    {
      id: 3,
      name: "WiFi Security Camera",
      image: iotImage3,
      dimensions: "110mm x 85mm x 60mm",
      specifications: "1080p HD video, Night vision, Motion detection, Cloud storage",
      features: ["24/7 monitoring", "Mobile alerts", "Two-way audio", "Cloud backup"]
    },
    {
      id: 4,
      name: "Smart Door Lock",
      image: iotImage4,
      dimensions: "150mm x 70mm x 25mm",
      specifications: "Fingerprint + PIN access, Battery backup, WiFi enabled, 1000 user capacity",
      features: ["Multiple access methods", "Remote control", "Access logs", "Emergency key override"]
    },
    {
      id: 5,
      name: "Motion Sensor",
      image: iotImage5,
      dimensions: "65mm x 45mm x 30mm",
      specifications: "PIR technology, 10m detection range, Battery powered, IP54 rated",
      features: ["Pet immunity", "Adjustable sensitivity", "Tamper protection", "Wireless installation"]
    },
    {
      id: 6,
      name: "Water Leak Detector",
      image: iotImage6,
      dimensions: "80mm diameter x 20mm height",
      specifications: "Water detection sensor, 85dB alarm, WiFi alerts, 3-year battery life",
      features: ["Instant notifications", "Floor protection", "Easy installation", "Smart home integration"]
    },
    {
      id: 7,
      name: "Smart Switch Panel",
      image: iotImage7,
      dimensions: "120mm x 75mm x 8mm",
      specifications: "Touch sensitive, WiFi enabled, Glass panel, 10A switching capacity",
      features: ["Voice control", "Scene automation", "Remote access", "Energy monitoring"]
    },
    {
      id: 8,
      name: "Air Quality Monitor",
      image: iotImage8,
      dimensions: "100mm x 100mm x 40mm",
      specifications: "PM2.5, CO2, Temperature, Humidity monitoring, LCD display",
      features: ["Real-time data", "Health alerts", "Historical tracking", "Smart ventilation control"]
    },
    {
      id: 9,
      name: "Smart Plug",
      image: iotImage9,
      dimensions: "65mm x 45mm x 30mm",
      specifications: "16A capacity, Energy monitoring, WiFi controlled, Compact design",
      features: ["Remote control", "Scheduling", "Energy tracking", "Voice assistant compatible"]
    },
    {
      id: 10,
      name: "Window Sensor",
      image: iotImage10,
      dimensions: "35mm x 15mm x 8mm",
      specifications: "Magnetic contact, 2-year battery, Wireless range: 100m, IP44 rated",
      features: ["Door/window monitoring", "Intrusion detection", "Low battery alerts", "Easy installation"]
    },
    {
      id: 11,
      name: "Smoke Detector",
      image: iotImage11,
      dimensions: "120mm diameter x 45mm height",
      specifications: "Photoelectric sensor, 85dB alarm, WiFi connected, 10-year sealed battery",
      features: ["Smart alerts", "Self-testing", "Hush feature", "Interconnected system"]
    },
    {
      id: 12,
      name: "Smart Doorbell",
      image: iotImage12,
      dimensions: "150mm x 80mm x 25mm",
      specifications: "1080p camera, Two-way audio, Motion detection, Night vision",
      features: ["Live video streaming", "Visitor identification", "Package detection", "Cloud recording"]
    },
    {
      id: 13,
      name: "Garage Door Opener",
      image: iotImage13,
      dimensions: "200mm x 150mm x 60mm",
      specifications: "WiFi enabled, Smartphone control, Security features, Battery backup",
      features: ["Remote operation", "Status monitoring", "Timer controls", "Safety sensors"]
    },
    {
      id: 14,
      name: "Smart Thermostat",
      image: iotImage14,
      dimensions: "120mm x 120mm x 25mm",
      specifications: "Color touchscreen, WiFi connected, Energy saving algorithms, Voice control",
      features: ["Learning capability", "Remote control", "Energy reports", "Multi-zone support"]
    },
    {
      id: 15,
      name: "Smart LED Bulb",
      image: iotImage15,
      dimensions: "60mm diameter x 108mm height",
      specifications: "9W LED, 16 million colors, WiFi controlled, 25,000 hour lifespan",
      features: ["Color changing", "Dimming control", "Scene presets", "Energy efficient"]
    },
    {
      id: 16,
      name: "Irrigation Controller",
      image: iotImage16,
      dimensions: "250mm x 180mm x 80mm",
      specifications: "8-zone control, Weather integration, WiFi enabled, Rain sensor input",
      features: ["Smart scheduling", "Water conservation", "Remote monitoring", "Weather adaptive"]
    },
    {
      id: 17,
      name: "Pet Feeder",
      image: iotImage17,
      dimensions: "300mm x 250mm x 350mm",
      specifications: "5L capacity, Scheduled feeding, Camera monitoring, Mobile app control",
      features: ["Portion control", "Pet recognition", "Voice recording", "Fresh food preservation"]
    },
    {
      id: 18,
      name: "Weather Station",
      image: iotImage18,
      dimensions: "150mm x 150mm x 200mm",
      specifications: "Temperature, Humidity, Wind, Rain measurement, Solar powered, WiFi data",
      features: ["Comprehensive monitoring", "Historical data", "Weather alerts", "Solar charging"]
    },
    {
      id: 19,
      name: "Smart Mirror",
      image: iotImage19,
      dimensions: "800mm x 600mm x 50mm",
      specifications: "Touch display, Weather info, Calendar, Music control, LED lighting",
      features: ["Interactive display", "Voice control", "Smart home hub", "Customizable widgets"]
    },
    {
      id: 20,
      name: "Central Hub",
      image: iotImage20,
      dimensions: "200mm diameter x 50mm height",
      specifications: "Multi-protocol support, Voice assistant, Local processing, Cloud connectivity",
      features: ["Device management", "Automation rules", "Voice control", "Offline operation"]
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
                <Cpu className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">IoT Integration</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect Your World with <span className="text-primary">Smart IoT</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your space with intelligent IoT devices that communicate, automate, and optimize your environment for maximum efficiency and comfort.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT Integration Products</h2>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive range of IoT devices and solutions
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
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Connectivity</h3>
                <p className="text-muted-foreground">
                  All devices connect effortlessly to your existing network infrastructure
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade encryption and security protocols protect your data
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Integration</h3>
                <p className="text-muted-foreground">
                  Intelligent automation that learns and adapts to your lifestyle
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

export default IotIntegrationPage;