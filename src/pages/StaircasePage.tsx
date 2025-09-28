import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Home, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Staircase Images - Using welding work images for metal staircase patterns
import staircase1 from "@/assets/welding-work-1.jpg";
import staircase2 from "@/assets/welding-work-2.jpg";
import staircase3 from "@/assets/welding-work-3.jpg";
import staircase4 from "@/assets/welding-work-4.jpg";
import staircase5 from "@/assets/welding-work-5.jpg";
import staircase6 from "@/assets/welding-work-6.jpg";
import staircase7 from "@/assets/welding-work-7.jpg";
import staircase8 from "@/assets/welding-work-8.jpg";
import staircase9 from "@/assets/welding-work-9.jpg";
import staircase10 from "@/assets/welding-work-10.jpg";
import staircase11 from "@/assets/welding-work-11.jpg";
import staircase12 from "@/assets/welding-work-12.jpg";
import staircase13 from "@/assets/welding-work-13.jpg";
import staircase14 from "@/assets/welding-work-14.jpg";
import staircase15 from "@/assets/welding-work-15.jpg";
import staircase16 from "@/assets/welding-work-16.jpg";
import staircase17 from "@/assets/welding-work-17.jpg";
import staircase18 from "@/assets/welding-work-18.jpg";
import staircase19 from "@/assets/welding-work-19.jpg";
import staircase20 from "@/assets/welding-work-20.jpg";

const StaircasePage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const staircases = [
    { image: staircase1, name: "MS Straight Staircase", specs: "Mild Steel, Straight Design, Non-Slip Treads" },
    { image: staircase2, name: "SS Spiral Staircase", specs: "Stainless Steel, Space Saving, Curved Design" },
    { image: staircase3, name: "MS L-Shaped Staircase", specs: "Mild Steel, 90° Turn, Landing Platform" },
    { image: staircase4, name: "SS U-Shaped Staircase", specs: "Stainless Steel, 180° Turn, Dual Landing" },
    { image: staircase5, name: "MS Floating Staircase", specs: "Mild Steel, Cantilever Design, Modern Look" },
    { image: staircase6, name: "SS Industrial Staircase", specs: "Stainless Steel, Heavy Duty, Commercial Grade" },
    { image: staircase7, name: "MS Open Riser Staircase", specs: "Mild Steel, Open Design, Mesh Treads" },
    { image: staircase8, name: "SS Closed Riser Staircase", specs: "Stainless Steel, Solid Treads, Safety Design" },
    { image: staircase9, name: "MS External Staircase", specs: "Mild Steel, Weather Resistant, Outdoor Use" },
    { image: staircase10, name: "SS Fire Escape Staircase", specs: "Stainless Steel, Emergency Access, Safety Compliant" },
    { image: staircase11, name: "MS Platform Staircase", specs: "Mild Steel, Multi-Level, Industrial Access" },
    { image: staircase12, name: "SS Mezzanine Staircase", specs: "Stainless Steel, Intermediate Floor, Space Efficient" },
    { image: staircase13, name: "MS Helical Staircase", specs: "Mild Steel, Continuous Curve, Architectural Design" },
    { image: staircase14, name: "SS Bifurcated Staircase", specs: "Stainless Steel, Split Design, Grand Entrance" },
    { image: staircase15, name: "MS Cantilever Staircase", specs: "Mild Steel, Wall Mounted, Floating Effect" },
    { image: staircase16, name: "SS Switchback Staircase", specs: "Stainless Steel, Zigzag Pattern, Space Saving" },
    { image: staircase17, name: "MS Circular Staircase", specs: "Mild Steel, Round Design, Central Support" },
    { image: staircase18, name: "SS Curved Staircase", specs: "Stainless Steel, Gentle Curve, Elegant Design" },
    { image: staircase19, name: "MS Perforated Staircase", specs: "Mild Steel, Perforated Treads, Ventilation Design" },
    { image: staircase20, name: "SS Geometric Staircase", specs: "Stainless Steel, Modern Geometry, Artistic Pattern" }
  ];

  const totalPages = Math.ceil(staircases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = staircases.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Metal Staircase - ${productName}`,
      description: `Get detailed information about ${productName}. Specifications: ${specs}`,
      productImage: productImage,
      productName: productName
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Metal Staircases</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional <span className="text-primary">Metal Staircase Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Premium metal staircases in MS and SS materials with various patterns and designs for residential, commercial, and industrial applications.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentItems.map((item, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(item.name, item.specs, item.image)}
                    >
                      Enquiry Now
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => handlePageChange(pageNum)}
                    className="w-10 h-10"
                  >
                    {pageNum}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Metal Staircases?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional welding, quality MS and SS materials, and custom designs for safe and stylish access solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safe Design</h3>
                <p className="text-muted-foreground">
                  Non-slip treads and safety-compliant designs for secure access
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Welding</h3>
                <p className="text-muted-foreground">
                  Professional welding techniques ensuring strong and durable joints
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Patterns</h3>
                <p className="text-muted-foreground">
                  Various staircase patterns to match your architectural requirements
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
          productImage={selectedService.productImage}
          productName={selectedService.productName}
          onClose={() => setSelectedService(null)}
        />
      )}
      
    </div>
  );
};

export default StaircasePage;