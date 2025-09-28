import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid3X3, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Window Grills Images - Using welding work images as window grills
import welding1 from "@/assets/welding-work-1.jpg";
import welding2 from "@/assets/welding-work-2.jpg";
import welding3 from "@/assets/welding-work-3.jpg";
import welding4 from "@/assets/welding-work-4.jpg";
import welding5 from "@/assets/welding-work-5.jpg";
import welding6 from "@/assets/welding-work-6.jpg";
import welding7 from "@/assets/welding-work-7.jpg";
import welding8 from "@/assets/welding-work-8.jpg";
import welding9 from "@/assets/welding-work-9.jpg";
import welding10 from "@/assets/welding-work-10.jpg";
import welding11 from "@/assets/welding-work-11.jpg";
import welding12 from "@/assets/welding-work-12.jpg";
import welding13 from "@/assets/welding-work-13.jpg";
import welding14 from "@/assets/welding-work-14.jpg";
import welding15 from "@/assets/welding-work-15.jpg";
import welding16 from "@/assets/welding-work-16.jpg";
import welding17 from "@/assets/welding-work-17.jpg";
import welding18 from "@/assets/welding-work-18.jpg";
import welding19 from "@/assets/welding-work-19.jpg";
import welding20 from "@/assets/welding-work-20.jpg";

const WindowGrillsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const windowGrills = [
    { image: welding1, name: "Fixed Window Grill", specs: "MS Steel, Rust Resistant Paint, Security Bars" },
    { image: welding2, name: "Decorative Window Grill", specs: "Ornamental Design, Powder Coated, Artistic Pattern" },
    { image: welding3, name: "Safety Window Grill", specs: "Child Protection, Tamper Proof, Emergency Release" },
    { image: welding4, name: "Modern Window Grill", specs: "Contemporary Style, Sleek Lines, Minimalist Design" },
    { image: welding5, name: "Burglar Proof Grill", specs: "High Security, Anti-Cut Bars, Reinforced Joints" },
    { image: welding6, name: "Sliding Window Grill", specs: "Removable Panels, Easy Access, Cleaning Friendly" },
    { image: welding7, name: "Flower Design Grill", specs: "Floral Patterns, Elegant Look, Decorative Elements" },
    { image: welding8, name: "Geometric Window Grill", specs: "Pattern Design, Mathematical Forms, Modern Appeal" },
    { image: welding9, name: "Vertical Bar Grill", specs: "Straight Bars, Simple Design, Cost Effective" },
    { image: welding10, name: "Horizontal Window Grill", specs: "Landscape View, Wide Bars, Contemporary Look" },
    { image: welding11, name: "Diamond Pattern Grill", specs: "Diamond Mesh, Visibility, Security Combined" },
    { image: welding12, name: "Curved Window Grill", specs: "Arched Design, Graceful Curves, Architectural Appeal" },
    { image: welding13, name: "Multi-Level Grill", specs: "Layered Design, Complex Patterns, Artistic Value" },
    { image: welding14, name: "Stainless Steel Grill", specs: "Premium Material, Corrosion Free, Long Lasting" },
    { image: welding15, name: "Galvanized Window Grill", specs: "Hot Dip Galvanized, Weather Resistant, Durable" },
    { image: welding16, name: "Aluminum Window Grill", specs: "Lightweight, Maintenance Free, Anodized Finish" },
    { image: welding17, name: "Wrought Iron Grill", specs: "Hand Forged, Traditional Style, Unique Character" },
    { image: welding18, name: "Security Mesh Grill", specs: "Fine Mesh, Insect Protection, Ventilation" },
    { image: welding19, name: "Expandable Window Grill", specs: "Adjustable Width, Retractable, Flexible Installation" },
    { image: welding20, name: "Custom Pattern Grill", specs: "Bespoke Design, Client Specification, Unique Creation" }
  ];

  const totalPages = Math.ceil(windowGrills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = windowGrills.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Window Grill - ${productName}`,
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
                <Grid3X3 className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Window Grills</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Secure <span className="text-primary">Window Grill Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Protect your windows with our premium window grills featuring security designs, decorative patterns, and professional welding craftsmanship.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Window Grills?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional welding, security features, and decorative designs to enhance both safety and aesthetics of your windows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid3X3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security Design</h3>
                <p className="text-muted-foreground">
                  Robust construction and tamper-proof designs for maximum window security
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Welding</h3>
                <p className="text-muted-foreground">
                  Precision welding techniques for strong joints and professional finish
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Decorative Appeal</h3>
                <p className="text-muted-foreground">
                  Beautiful patterns and designs that enhance your home's appearance
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

export default WindowGrillsPage;