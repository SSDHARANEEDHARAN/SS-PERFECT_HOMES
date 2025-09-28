import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Wrench, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import Map from "./Map";

const About = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const [quotesGlow, setQuotesGlow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 500);
    const timer2 = setTimeout(() => setLinesVisible(true), 1500);
    const timer3 = setTimeout(() => setQuotesGlow(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const capabilities = [
    { icon: Wrench, text: "Manufacturing Excellence A to Z" },
    { icon: Truck, text: "Delivery All Over India" },
    { icon: MapPin, text: "Complete Interior Fitting Solutions" }
  ];

  return (
    <section id="about" className="py-20 min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Project showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 3D Animated Title */}
        <div className="text-center mb-16">
          <h1 
            className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-2000 transform ${
              textVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
            style={{
              background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
              backgroundSize: '200% 200%',
              animation: textVisible ? 'gradient-shift 3s ease-in-out infinite' : 'none',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 10px 30px hsl(var(--primary) / 0.3)',
              filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))'
            }}
          >
            PERFECT HOME'S
          </h1>
          
          <div className="relative">
            {capabilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center mb-6 transition-all duration-1000 transform ${
                    linesVisible
                      ? 'opacity-100 translate-x-0'
                      : index % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className="flex items-center space-x-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-elegant">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                  
                  {/* Animated line */}
                  <div 
                    className={`absolute left-1/2 w-px bg-gradient-to-b from-primary to-transparent transition-all duration-1000 ${
                      linesVisible ? 'h-16 opacity-100' : 'h-0 opacity-0'
                    }`}
                    style={{ 
                      top: `${(index + 1) * 80}px`,
                      transitionDelay: `${index * 300 + 500}ms`
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Glowing Quotes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div 
            className={`relative p-8 rounded-lg border transition-all duration-1000 ${
              quotesGlow 
                ? 'bg-gradient-to-br from-amber-500/10 to-orange-600/10 border-amber-500/50 shadow-[0_0_30px_hsl(var(--primary)/0.3)]' 
                : 'bg-card border-border'
            }`}
          >
            <Quote className={`w-12 h-12 mb-4 transition-all duration-1000 ${quotesGlow ? 'text-amber-500 animate-pulse' : 'text-muted-foreground'}`} />
            <h3 className="text-2xl font-bold mb-4 text-amber-600">Wood Based Excellence</h3>
            <p className="text-muted-foreground">
              "Crafting timeless wooden masterpieces with precision engineering and sustainable materials. 
              From custom doors to complete interior woodwork solutions."
            </p>
            <div className={`absolute inset-0 rounded-lg transition-all duration-1000 ${quotesGlow ? 'animate-pulse bg-amber-500/5' : ''}`}></div>
          </div>

          <div 
            className={`relative p-8 rounded-lg border transition-all duration-1000 ${
              quotesGlow 
                ? 'bg-gradient-to-br from-slate-500/10 to-gray-600/10 border-slate-500/50 shadow-[0_0_30px_hsl(var(--accent)/0.3)]' 
                : 'bg-card border-border'
            }`}
          >
            <Quote className={`w-12 h-12 mb-4 transition-all duration-1000 ${quotesGlow ? 'text-slate-500 animate-pulse' : 'text-muted-foreground'}`} />
            <h3 className="text-2xl font-bold mb-4 text-slate-600">Steel Based Innovation</h3>
            <p className="text-muted-foreground">
              "Engineering robust steel solutions with modern aesthetics and uncompromising strength. 
              From structural elements to decorative metalwork."
            </p>
            <div className={`absolute inset-0 rounded-lg transition-all duration-1000 ${quotesGlow ? 'animate-pulse bg-slate-500/5' : ''}`}></div>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">About Perfect Home's</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perfect Home's has been a pioneer in manufacturing and delivering supreme quality home solutions across India. 
                Based in the heart of innovation, we have been offering comprehensive interior fitting solutions and manufacturing 
                services throughout the country.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to transform homes, we initiated our business with custom woodwork and metalwork, 
                continuously expanding into complete interior solutions, smart home integration, and automated systems 
                with our unwavering commitment to quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Join our growing community of satisfied homeowners who trust us to bring their dreams to life.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="text-xl font-semibold mb-3 text-primary">✨ "Choose Perfect Homes, Where Dreams Meet Design"</h4>
              <p className="text-sm text-muted-foreground italic">
                Our commitment to excellence and innovation drives everything we do.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Our Team</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We have a fully dedicated team of designers, craftsmen, engineers, and customer service professionals 
                who work with utmost inspiration to bring you the most innovative and functional solutions ranging 
                from traditional craftsmanship to modern smart home technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experts specialize in woodwork, metalwork, IoT integration, and complete interior design, 
                ensuring every project meets the highest standards of quality and aesthetics.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Expert Craftsmanship & Design",
                  "Manufacturing Excellence A to Z",
                  "Delivery All Over India",
                  "Smart Home Integration",
                  "Competitive & Transparent Pricing",
                  "Quality Materials & Finishes",
                  "Professional Installation Services",
                  "Complete Interior Solutions",
                  "24/7 Customer Support",
                  "Warranty & After-Sales Service"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What We Contribute Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">What We Contribute to Your Home</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Premium Craftsmanship</h4>
              <p className="text-muted-foreground text-sm">
                Handcrafted solutions using finest materials, traditional techniques combined with modern precision for lasting beauty.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Complete Solutions</h4>
              <p className="text-muted-foreground text-sm">
                From concept to completion - design, manufacturing, delivery, and installation all under one roof nationwide.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Smart Integration</h4>
              <p className="text-muted-foreground text-sm">
                Future-ready homes with IoT integration, automated systems, and smart solutions for modern living comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Our Location</h3>
          <div className="bg-card rounded-lg border p-8 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Visit Our Workshop</h4>
            <p className="text-muted-foreground mb-6">
              Perfect Home's Manufacturing Unit<br/>
              Namakkal, Tamil Nadu<br/>
              Professional manufacturing facility with modern equipment
            </p>
            <div className="bg-muted/50 h-96 rounded-lg flex items-center justify-center">
              <Map />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default About;