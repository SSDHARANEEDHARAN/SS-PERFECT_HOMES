import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Droplets, Activity, Leaf, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Import all IoT Water Management images
import waterImage1 from "@/assets/iot-water-1.jpg";
import waterImage2 from "@/assets/iot-water-2.jpg";
import waterImage3 from "@/assets/iot-water-3.jpg";
import waterImage4 from "@/assets/iot-water-4.jpg";
import waterImage5 from "@/assets/iot-water-5.jpg";
import waterImage6 from "@/assets/iot-water-6.jpg";
import waterImage7 from "@/assets/iot-water-7.jpg";
import waterImage8 from "@/assets/iot-water-8.jpg";
import waterImage9 from "@/assets/iot-water-9.jpg";
import waterImage10 from "@/assets/iot-water-10.jpg";
import waterImage11 from "@/assets/iot-water-11.jpg";
import waterImage12 from "@/assets/iot-water-12.jpg";
import waterImage13 from "@/assets/iot-water-13.jpg";
import waterImage14 from "@/assets/iot-water-14.jpg";
import waterImage15 from "@/assets/iot-water-15.jpg";
import waterImage16 from "@/assets/iot-water-16.jpg";
import waterImage17 from "@/assets/iot-water-17.jpg";
import waterImage18 from "@/assets/iot-water-18.jpg";
import waterImage19 from "@/assets/iot-water-19.jpg";
import waterImage20 from "@/assets/iot-water-20.jpg";

const IotWaterPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; description: string } | null>(null);

  const handleProjectSelect = () => {};

  const products = [
    {
      id: 1,
      name: "Smart Flow Sensor",
      image: waterImage1,
      dimensions: "100mm x 50mm x 30mm",
      specifications: "Flow range: 1-100 L/min, ±2% accuracy, WiFi connectivity, Battery: 2 years",
      features: ["Real-time monitoring", "Leak detection", "Usage analytics", "Mobile alerts"]
    },
    {
      id: 2,
      name: "Automatic Shut-off Valve",
      image: waterImage2,
      dimensions: "150mm x 120mm x 80mm",
      specifications: "1/2\" to 2\" pipe sizes, 24V motorized, WiFi controlled, Manual override",
      features: ["Emergency shutoff", "Remote control", "Leak prevention", "Manual operation"]
    },
    {
      id: 3,
      name: "Water Quality Sensor",
      image: waterImage3,
      dimensions: "200mm x 60mm x 40mm",
      specifications: "pH, TDS, Temperature monitoring, Digital display, Data logging, Calibration",
      features: ["Multi-parameter", "Data storage", "Quality alerts", "Easy calibration"]
    },
    {
      id: 4,
      name: "Tank Level Sensor",
      image: waterImage4,
      dimensions: "80mm x 60mm x 40mm",
      specifications: "Ultrasonic technology, 0-10m range, ±1% accuracy, Wireless transmission",
      features: ["Non-contact measurement", "High accuracy", "Weather resistant", "Long range"]
    },
    {
      id: 5,
      name: "Irrigation Controller",
      image: waterImage5,
      dimensions: "300mm x 250mm x 100mm",
      specifications: "8-zone control, Weather integration, Soil moisture input, Solar option",
      features: ["Smart scheduling", "Weather adaptive", "Zone control", "Water conservation"]
    },
    {
      id: 6,
      name: "Pressure Monitor",
      image: waterImage6,
      dimensions: "120mm x 80mm x 50mm",
      specifications: "0-100 PSI range, Digital display, High/low alarms, Data logging",
      features: ["Pressure monitoring", "Alarm system", "Historical data", "Diagnostic alerts"]
    },
    {
      id: 7,
      name: "Sump Pump Controller",
      image: waterImage7,
      dimensions: "200mm x 150mm x 80mm",
      specifications: "Float switch input, WiFi enabled, Backup power, Status monitoring",
      features: ["Flood prevention", "Remote monitoring", "Backup operation", "Status alerts"]
    },
    {
      id: 8,
      name: "Filter Monitor",
      image: waterImage8,
      dimensions: "150mm x 100mm x 60mm",
      specifications: "Filter life tracking, Flow monitoring, Replacement alerts, Easy installation",
      features: ["Filter tracking", "Maintenance alerts", "Usage monitoring", "Simple setup"]
    },
    {
      id: 9,
      name: "Water Heater Thermostat",
      image: waterImage9,
      dimensions: "120mm x 80mm x 40mm",
      specifications: "Temperature control, WiFi enabled, Energy monitoring, Safety features",
      features: ["Smart heating", "Energy savings", "Remote control", "Safety protection"]
    },
    {
      id: 10,
      name: "Soil Moisture Sensor",
      image: waterImage10,
      dimensions: "300mm length x 20mm diameter",
      specifications: "Moisture detection, Wireless transmission, Weather resistant, Long battery life",
      features: ["Garden monitoring", "Irrigation control", "Weather proof", "Long lasting"]
    },
    {
      id: 11,
      name: "Usage Analytics Display",
      image: waterImage11,
      dimensions: "180mm x 120mm x 30mm",
      specifications: "Touchscreen interface, Usage graphs, Cost tracking, Export data",
      features: ["Visual analytics", "Cost monitoring", "Data export", "User friendly"]
    },
    {
      id: 12,
      name: "Rainwater Controller",
      image: waterImage12,
      dimensions: "250mm x 200mm x 100mm",
      specifications: "Collection monitoring, Pump control, Weather integration, Storage management",
      features: ["Rain harvesting", "Pump automation", "Weather sensing", "Storage tracking"]
    },
    {
      id: 13,
      name: "Pool Chemical Dispenser",
      image: waterImage13,
      dimensions: "400mm x 300mm x 200mm",
      specifications: "Automated dosing, pH/Chlorine control, WiFi monitoring, Safety interlocks",
      features: ["Auto chemical balance", "Pool monitoring", "Safety features", "Remote control"]
    },
    {
      id: 14,
      name: "Temperature Probe",
      image: waterImage14,
      dimensions: "150mm length x 12mm diameter",
      specifications: "Temperature range: -40°C to +125°C, ±0.1°C accuracy, Waterproof IP68",
      features: ["High precision", "Waterproof design", "Wide range", "Reliable measurement"]
    },
    {
      id: 15,
      name: "Greywater System",
      image: waterImage15,
      dimensions: "500mm x 400mm x 300mm",
      specifications: "Recycling control, Filtration monitoring, Pump management, Usage tracking",
      features: ["Water recycling", "Eco-friendly", "Filter monitoring", "Usage optimization"]
    },
    {
      id: 16,
      name: "Hydroponic Monitor",
      image: waterImage16,
      dimensions: "300mm x 200mm x 150mm",
      specifications: "Nutrient monitoring, pH control, Automated dosing, Growth optimization",
      features: ["Nutrient management", "pH balancing", "Growth tracking", "Automated feeding"]
    },
    {
      id: 17,
      name: "Booster Pump Controller",
      image: waterImage17,
      dimensions: "250mm x 200mm x 120mm",
      specifications: "Pressure regulation, Variable speed, Energy efficient, Status monitoring",
      features: ["Pressure control", "Energy saving", "Variable operation", "Status feedback"]
    },
    {
      id: 18,
      name: "Drain Monitor",
      image: waterImage18,
      dimensions: "100mm x 80mm x 60mm",
      specifications: "Level detection, Flood warning, Wireless alerts, Battery powered",
      features: ["Flood prevention", "Early warning", "Wireless operation", "Long battery life"]
    },
    {
      id: 19,
      name: "Conservation Alert",
      image: waterImage19,
      dimensions: "120mm x 80mm x 25mm",
      specifications: "Usage monitoring, Conservation tips, Alert system, Mobile notifications",
      features: ["Usage tracking", "Conservation help", "Smart alerts", "Mobile integration"]
    },
    {
      id: 20,
      name: "Water Management Hub",
      image: waterImage20,
      dimensions: "300mm x 250mm x 100mm",
      specifications: "Central control, Multi-sensor support, Cloud connectivity, Local storage",
      features: ["System integration", "Multi-device support", "Cloud sync", "Local backup"]
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
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">IoT Water Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart Water <span className="text-primary">Management</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IoT solutions for water monitoring, conservation, and management. Optimize usage, prevent waste, and ensure quality with intelligent water systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Management Products</h2>
              <p className="text-lg text-muted-foreground">
                Advanced IoT devices for comprehensive water system control
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
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of water systems with instant alerts and notifications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                <p className="text-muted-foreground">
                  Intelligent systems that optimize usage and reduce waste for sustainability
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Advanced sensors ensure water quality meets the highest standards
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

export default IotWaterPage;