import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Wrench, PaintBucket, Wifi, Zap, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CustomQuoteForm from "./CustomQuoteForm";
import bgKitchen1 from "@/assets/bg-kitchen-1.jpg";
import bgLiving1 from "@/assets/bg-living-1.jpg";
import bgBedroom1 from "@/assets/bg-bedroom-1.jpg";
import bgBathroom1 from "@/assets/bg-bathroom-1.jpg";
import bgDining1 from "@/assets/bg-dining-1.jpg";
import bgOffice1 from "@/assets/bg-office-1.jpg";
import bgEntrance1 from "@/assets/bg-entrance-1.jpg";
import bgKitchen2 from "@/assets/bg-kitchen-2.jpg";
import bgLiving2 from "@/assets/bg-living-2.jpg";
import bgBedroom2 from "@/assets/bg-bedroom-2.jpg";
import bgBathroom2 from "@/assets/bg-bathroom-2.jpg";
import bgDining2 from "@/assets/bg-dining-2.jpg";
import bgStudy1 from "@/assets/bg-study-1.jpg";
import bgCloset1 from "@/assets/bg-closet-1.jpg";
import bgBar1 from "@/assets/bg-bar-1.jpg";
import bgLibrary1 from "@/assets/bg-library-1.jpg";
import bgLaundry1 from "@/assets/bg-laundry-1.jpg";
import bgFoyer1 from "@/assets/bg-foyer-1.jpg";
import bgPatio1 from "@/assets/bg-patio-1.jpg";
import bgGym1 from "@/assets/bg-gym-1.jpg";
import bgFamily1 from "@/assets/bg-family-1.jpg";
import bgPowder1 from "@/assets/bg-powder-1.jpg";
import bgNursery1 from "@/assets/bg-nursery-1.jpg";
import bgGuest1 from "@/assets/bg-guest-1.jpg";
import bgHallway1 from "@/assets/bg-hallway-1.jpg";
import bgMudroom1 from "@/assets/bg-mudroom-1.jpg";
import bgSunroom1 from "@/assets/bg-sunroom-1.jpg";
import bgBasement1 from "@/assets/bg-basement-1.jpg";
// Import all work images for slideshow
import craftWork1 from "@/assets/craft-work-1.jpg";
import craftWork2 from "@/assets/craft-work-2.jpg";
import craftWork3 from "@/assets/craft-work-3.jpg";
import craftWork4 from "@/assets/craft-work-4.jpg";
import craftWork5 from "@/assets/craft-work-5.jpg";
import craftWork6 from "@/assets/craft-work-6.jpg";
import craftWork7 from "@/assets/craft-work-7.jpg";
import craftWork8 from "@/assets/craft-work-8.jpg";
import craftWork9 from "@/assets/craft-work-9.jpg";
import craftWork10 from "@/assets/craft-work-10.jpg";
import craftWork11 from "@/assets/craft-work-11.jpg";
import craftWork12 from "@/assets/craft-work-12.jpg";
import craftWork13 from "@/assets/craft-work-13.jpg";
import craftWork14 from "@/assets/craft-work-14.jpg";
import craftWork15 from "@/assets/craft-work-15.jpg";
import craftWork16 from "@/assets/craft-work-16.jpg";
import craftWork17 from "@/assets/craft-work-17.jpg";
import craftWork18 from "@/assets/craft-work-18.jpg";
import craftWork19 from "@/assets/craft-work-19.jpg";
import craftWork20 from "@/assets/craft-work-20.jpg";
import furnishedWork1 from "@/assets/furnished-work-1.jpg";
import furnishedWork2 from "@/assets/furnished-work-2.jpg";
import furnishedWork3 from "@/assets/furnished-work-3.jpg";
import furnishedWork4 from "@/assets/furnished-work-4.jpg";
import furnishedWork5 from "@/assets/furnished-work-5.jpg";
import furnishedWork6 from "@/assets/furnished-work-6.jpg";
import furnishedWork7 from "@/assets/furnished-work-7.jpg";
import furnishedWork8 from "@/assets/furnished-work-8.jpg";
import furnishedWork9 from "@/assets/furnished-work-9.jpg";
import furnishedWork10 from "@/assets/furnished-work-10.jpg";
import furnishedWork11 from "@/assets/furnished-work-11.jpg";
import furnishedWork12 from "@/assets/furnished-work-12.jpg";
import furnishedWork13 from "@/assets/furnished-work-13.jpg";
import furnishedWork14 from "@/assets/furnished-work-14.jpg";
import furnishedWork15 from "@/assets/furnished-work-15.jpg";
import furnishedWork16 from "@/assets/furnished-work-16.jpg";
import furnishedWork17 from "@/assets/furnished-work-17.jpg";
import furnishedWork18 from "@/assets/furnished-work-18.jpg";
import furnishedWork19 from "@/assets/furnished-work-19.jpg";
import furnishedWork20 from "@/assets/furnished-work-20.jpg";
import woodWork1 from "@/assets/wood-work-1.jpg";
import woodWork2 from "@/assets/wood-work-2.jpg";
import woodWork3 from "@/assets/wood-work-3.jpg";
import woodWork4 from "@/assets/wood-work-4.jpg";
import woodWork5 from "@/assets/wood-work-5.jpg";
import woodWork6 from "@/assets/wood-work-6.jpg";
import woodWork7 from "@/assets/wood-work-7.jpg";
import woodWork8 from "@/assets/wood-work-8.jpg";
import woodWork9 from "@/assets/wood-work-9.jpg";
import woodWork10 from "@/assets/wood-work-10.jpg";
import woodWork11 from "@/assets/wood-work-11.jpg";
import woodWork12 from "@/assets/wood-work-12.jpg";
import woodWork13 from "@/assets/wood-work-13.jpg";
import woodWork14 from "@/assets/wood-work-14.jpg";
import woodWork15 from "@/assets/wood-work-15.jpg";
import woodWork16 from "@/assets/wood-work-16.jpg";
import woodWork17 from "@/assets/wood-work-17.jpg";
import woodWork18 from "@/assets/wood-work-18.jpg";
import woodWork19 from "@/assets/wood-work-19.jpg";
import woodWork20 from "@/assets/wood-work-20.jpg";
import weldingWork1 from "@/assets/welding-work-1.jpg";
import weldingWork2 from "@/assets/welding-work-2.jpg";
import weldingWork3 from "@/assets/welding-work-3.jpg";
import weldingWork4 from "@/assets/welding-work-4.jpg";
import weldingWork5 from "@/assets/welding-work-5.jpg";
import weldingWork6 from "@/assets/welding-work-6.jpg";
import weldingWork7 from "@/assets/welding-work-7.jpg";
import weldingWork8 from "@/assets/welding-work-8.jpg";
import weldingWork9 from "@/assets/welding-work-9.jpg";
import weldingWork10 from "@/assets/welding-work-10.jpg";
import weldingWork11 from "@/assets/welding-work-11.jpg";
import weldingWork12 from "@/assets/welding-work-12.jpg";
import weldingWork13 from "@/assets/welding-work-13.jpg";
import weldingWork14 from "@/assets/welding-work-14.jpg";
import weldingWork15 from "@/assets/welding-work-15.jpg";
import weldingWork16 from "@/assets/welding-work-16.jpg";
import weldingWork17 from "@/assets/welding-work-17.jpg";
import weldingWork18 from "@/assets/welding-work-18.jpg";
import weldingWork19 from "@/assets/welding-work-19.jpg";
import weldingWork20 from "@/assets/welding-work-20.jpg";
import iotIntegration1 from "@/assets/iot-integration-1.jpg";
import iotIntegration2 from "@/assets/iot-integration-2.jpg";
import iotIntegration3 from "@/assets/iot-integration-3.jpg";
import iotIntegration4 from "@/assets/iot-integration-4.jpg";
import iotIntegration5 from "@/assets/iot-integration-5.jpg";
import iotIntegration6 from "@/assets/iot-integration-6.jpg";
import iotIntegration7 from "@/assets/iot-integration-7.jpg";
import iotIntegration8 from "@/assets/iot-integration-8.jpg";
import iotIntegration9 from "@/assets/iot-integration-9.jpg";
import iotIntegration10 from "@/assets/iot-integration-10.jpg";
import iotWater1 from "@/assets/iot-water-1.jpg";
import iotWater2 from "@/assets/iot-water-2.jpg";
import iotWater3 from "@/assets/iot-water-3.jpg";
import iotWater4 from "@/assets/iot-water-4.jpg";
import iotWater5 from "@/assets/iot-water-5.jpg";
import smartHome1 from "@/assets/smart-home-1.jpg";
import smartHome2 from "@/assets/smart-home-2.jpg";
import smartHome3 from "@/assets/smart-home-3.jpg";
import smartHome4 from "@/assets/smart-home-4.jpg";
import smartHome5 from "@/assets/smart-home-5.jpg";
import automaticGate1 from "@/assets/automatic-gate-1.jpg";
import automaticGate2 from "@/assets/automatic-gate-2.jpg";
import automaticGate3 from "@/assets/automatic-gate-3.jpg";
import automaticGate4 from "@/assets/automatic-gate-4.jpg";
import automaticGate5 from "@/assets/automatic-gate-5.jpg";
import BrandPartners from "./BrandPartners";

const DashboardHero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [showCustomQuote, setShowCustomQuote] = useState(false);
  const navigate = useNavigate();
  
  // Only relevant interior and work portfolio images for slideshow
  const backgrounds = [
    // Interior room backgrounds - actual spaces we design
    bgKitchen1, bgLiving1, bgBedroom1, bgBathroom1, bgDining1, bgOffice1, bgEntrance1,
    bgKitchen2, bgLiving2, bgBedroom2, bgBathroom2, bgDining2, bgStudy1, bgCloset1,
    bgBar1, bgLibrary1, bgLaundry1, bgFoyer1, bgPatio1, bgGym1, bgFamily1,
    bgPowder1, bgNursery1, bgGuest1, bgHallway1, bgMudroom1, bgSunroom1, bgBasement1,
    // Our actual work portfolio - craft works
    craftWork1, craftWork2, craftWork3, craftWork4, craftWork5, craftWork6, craftWork7,
    craftWork8, craftWork9, craftWork10, craftWork11, craftWork12, craftWork13, craftWork14,
    craftWork15, craftWork16, craftWork17, craftWork18, craftWork19, craftWork20,
    // Our furnished work portfolio
    furnishedWork1, furnishedWork2, furnishedWork3, furnishedWork4, furnishedWork5,
    furnishedWork6, furnishedWork7, furnishedWork8, furnishedWork9, furnishedWork10,
    furnishedWork11, furnishedWork12, furnishedWork13, furnishedWork14, furnishedWork15,
    furnishedWork16, furnishedWork17, furnishedWork18, furnishedWork19, furnishedWork20,
    // Our wood work portfolio
    woodWork1, woodWork2, woodWork3, woodWork4, woodWork5, woodWork6, woodWork7,
    woodWork8, woodWork9, woodWork10, woodWork11, woodWork12, woodWork13, woodWork14,
    woodWork15, woodWork16, woodWork17, woodWork18, woodWork19, woodWork20,
    // Our welding work portfolio
    weldingWork1, weldingWork2, weldingWork3, weldingWork4, weldingWork5, weldingWork6,
    weldingWork7, weldingWork8, weldingWork9, weldingWork10, weldingWork11, weldingWork12,
    weldingWork13, weldingWork14, weldingWork15, weldingWork16, weldingWork17, weldingWork18,
    weldingWork19, weldingWork20,
    // Smart home and IoT integration portfolio
    iotIntegration1, iotIntegration2, iotIntegration3, iotIntegration4, iotIntegration5,
    iotIntegration6, iotIntegration7, iotIntegration8, iotIntegration9, iotIntegration10,
    iotWater1, iotWater2, iotWater3, iotWater4, iotWater5,
    smartHome1, smartHome2, smartHome3, smartHome4, smartHome5,
    // Automatic gate systems
    automaticGate1, automaticGate2, automaticGate3, automaticGate4, automaticGate5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const workPoints = [
    {
      title: "Interior Design",
      description: "Complete home interior solutions from concept to completion",
      icon: PaintBucket,
      image: bgKitchen1
    },
    {
      title: "Wood Works", 
      description: "Expert craftsmanship in wood furniture and custom fittings",
      icon: Hammer,
      image: woodWork1
    },
    {
      title: "Welding Works",
      description: "Professional metal fabrication and structural welding services", 
      icon: Wrench,
      image: weldingWork1
    },
    {
      title: "Smart Home Networks",
      description: "Complete wireless network setup with WiFi 6, Bluetooth 5.0, and mesh connectivity for seamless device communication",
      icon: Wifi,
      image: smartHome1
    },
    {
      title: "Device Automation",
      description: "Intelligent automation systems for lighting, climate control, security, and entertainment with voice control integration",
      icon: Zap,
      image: iotIntegration1
    },
    {
      title: "IoT Integration",
      description: "Smart water management, energy monitoring, and IoT device integration for modern homes",
      icon: BarChart3,
      image: iotWater1
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Welcome Section with Auto-changing Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgrounds[currentBgIndex]} 
            alt="Welcome to Perfect Home's" 
            className="w-full h-full object-cover transition-opacity duration-1000"
            key={currentBgIndex}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white dark:text-white">
              Welcome to
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text">
                Perfect Home's
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white/90 dark:text-white/90 max-w-4xl mx-auto">
              Manufacturing & Delivery All Over - Fitting Interiors A to Z
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 text-white dark:text-white"
                onClick={() => navigate('/customer-gallery')}
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white dark:text-white border-0 font-medium"
                onClick={() => setShowCustomQuote(true)}
              >
                Get Your Custom Quote For Complete Home Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={furnishedWork1} 
            alt="Product showcase background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workPoints.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-xl transition-all duration-300 border border-white/20">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <product.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                  </div>
                  <p className="text-white/90">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <BrandPartners />

      {/* Work Highlights Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={craftWork1} 
            alt="Interior design background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">What We Do</h2>
          <p className="text-xl text-center mb-12 text-white/90 max-w-3xl mx-auto">
            We specialize in comprehensive interior solutions, from concept to completion
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workPoints.map((point, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors">
                  {point.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Glowing Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-3xl md:text-4xl font-bold text-white animate-pulse">
              ✨ "Excellence in Wood and Steel, Powered by Smart Living"
            </blockquote>
            <p className="text-xl text-white/80 mt-4">— "Perfect Home's Promise"</p>
          </div>
        </div>
      </section>

      {/* Custom Quote Form Modal */}
      {showCustomQuote && (
        <CustomQuoteForm onClose={() => setShowCustomQuote(false)} />
      )}
    </div>
  );
};

export default DashboardHero;