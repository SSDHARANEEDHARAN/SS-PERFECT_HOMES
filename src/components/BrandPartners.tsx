import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import heroImage from "@/assets/hero-kitchen.jpg";

const BrandPartners = () => {
  const [customerCount, setCustomerCount] = useState(25);
  const [animatedCount, setAnimatedCount] = useState(25);
  const { user } = useAuth();

  // Initialize customer count from localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem('customerCount');
    const initialCount = storedCount ? parseInt(storedCount) : 25;
    setCustomerCount(initialCount);
    setAnimatedCount(initialCount);
  }, []);

  // Increment count on login (only once per session)
  useEffect(() => {
    if (user) {
      const hasIncrementedThisSession = sessionStorage.getItem(`incremented_${user.id}`);
      
      if (!hasIncrementedThisSession) {
        const currentCount = parseInt(localStorage.getItem('customerCount') || '25');
        const newCount = currentCount + 1;
        
        localStorage.setItem('customerCount', newCount.toString());
        setCustomerCount(newCount);
        
        // Animate count up
        let start = currentCount;
        const end = newCount;
        const duration = 1000;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(start + (end - start) * progress);
          setAnimatedCount(current);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        animate();
        
        // Mark as incremented for this session
        sessionStorage.setItem(`incremented_${user.id}`, 'true');
      }
    }
  }, [user]);

  const brands = [
    {
      name: "Fefical Playwoods",
      logo: "FP",
      description: "Premium Plywood Solutions"
    },
    {
      name: "Teak",
      logo: "TK",
      description: "Natural Teak Wood"
    },
    {
      name: "Shall Wood",
      logo: "SW",
      description: "Quality Wood Products"
    },
    {
      name: "JSW Sheet",
      logo: "JSW",
      description: "Steel & Metal Sheets"
    },
    {
      name: "Tata Pipes",
      logo: "TP",
      description: "Plumbing Solutions"
    },
    {
      name: "Ritwig Sheets",
      logo: "RW",
      description: "Construction Materials"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern interior background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Top Corner Badge */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3 text-center border border-white/20">
          <div className="text-lg md:text-2xl font-bold text-white mb-0.5 animate-pulse">
            {animatedCount}+
          </div>
          <p className="text-white/90 font-medium text-xs">Happy Customers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Center Content */}
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join our growing community of satisfied homeowners
          </h2>
          <div className="text-2xl md:text-3xl text-white/90 mb-12">
            ✨ "Choose Perfect Homes, Where Dreams Meet Design"
          </div>
        </div>

        {/* Brand Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {brands.map((brand, index) => (
            <Card key={index} className="h-40 p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm group flex items-center justify-center border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:animate-glow">
                  <span className="text-primary-foreground font-bold text-lg">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1 text-white group-hover:text-accent transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-white/70">{brand.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Showcase Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-2xl">SS</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Perfect Home's</h3>
            <p className="text-white/80">Showcase & Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;