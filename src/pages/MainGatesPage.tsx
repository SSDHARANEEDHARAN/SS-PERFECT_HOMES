import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Main Gates Images
import gate1 from "@/assets/automatic-gate-1.jpg";
import gate2 from "@/assets/automatic-gate-2.jpg";
import gate3 from "@/assets/automatic-gate-3.jpg";
import gate4 from "@/assets/automatic-gate-4.jpg";
import gate5 from "@/assets/automatic-gate-5.jpg";
import gate6 from "@/assets/automatic-gate-6.jpg";
import gate7 from "@/assets/automatic-gate-7.jpg";
import gate8 from "@/assets/automatic-gate-8.jpg";
import gate9 from "@/assets/automatic-gate-9.jpg";
import gate10 from "@/assets/automatic-gate-10.jpg";
import gate11 from "@/assets/automatic-gate-11.jpg";
import gate12 from "@/assets/automatic-gate-12.jpg";
import gate13 from "@/assets/automatic-gate-13.jpg";
import gate14 from "@/assets/automatic-gate-14.jpg";
import gate15 from "@/assets/automatic-gate-15.jpg";
import gate16 from "@/assets/automatic-gate-16.jpg";
import gate17 from "@/assets/automatic-gate-17.jpg";
import gate18 from "@/assets/automatic-gate-18.jpg";
import gate19 from "@/assets/automatic-gate-19.jpg";
import gate20 from "@/assets/automatic-gate-20.jpg";
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

const MainGatesPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const mainGates = [
    { image: gate1, name: "MS Steel Main Gate", specs: "Mild Steel Frame, Powder Coating, Weather Resistant" },
    { image: gate2, name: "SS Main Gate Premium", specs: "Stainless Steel 304 Grade, Mirror Finish, Corrosion Free" },
    { image: gate3, name: "MS Decorative Gate", specs: "Mild Steel, Hand Forged Design, Custom Patterns" },
    { image: gate4, name: "SS Security Gate", specs: "Stainless Steel, Heavy Duty Locks, Reinforced Structure" },
    { image: gate5, name: "MS Modern Gate", specs: "Mild Steel, Contemporary Design, Sleek Finish" },
    { image: gate6, name: "SS Traditional Gate", specs: "Stainless Steel, Classic Style, Ornate Details" },
    { image: gate7, name: "MS Swing Gate", specs: "Mild Steel, Dual Wing Opening, Heavy Duty Hinges" },
    { image: gate8, name: "SS Compound Gate", specs: "Stainless Steel, Large Opening, Vehicle Access" },
    { image: gate9, name: "MS Wrought Iron Gate", specs: "Mild Steel, Hand Crafted, Rust Resistant Coating" },
    { image: gate10, name: "SS Electric Gate", specs: "Stainless Steel, Automated System, Remote Control" },
    { image: gate11, name: "MS Designer Gate", specs: "Mild Steel, Laser Cut Design, Modern Art Patterns" },
    { image: gate12, name: "SS Industrial Gate", specs: "Stainless Steel 316 Grade, Heavy Load, Commercial Use" },
    { image: gate13, name: "MS Residential Gate", specs: "Mild Steel, Home Security, Attractive Design" },
    { image: gate14, name: "SS Telescopic Gate", specs: "Stainless Steel, Space Saving, Folding Mechanism" },
    { image: gate15, name: "MS Security Gate", specs: "Mild Steel, High Security, Multiple Lock Points" },
    { image: gate16, name: "SS Cantilever Gate", specs: "Stainless Steel, No Ground Track, Self Supporting" },
    { image: gate17, name: "MS Pedestrian Gate", specs: "Mild Steel, Walk Through Access, Child Safety Lock" },
    { image: gate18, name: "SS Double Leaf Gate", specs: "Stainless Steel, Wide Opening, Equal Panels" },
    { image: gate19, name: "MS Smart Gate", specs: "Mild Steel, IoT Enabled, App Control Integration" },
    { image: gate20, name: "SS Custom Gate", specs: "Stainless Steel, Bespoke Design, Client Specification" },
    { image: welding1, name: "MS Galvanized Gate", specs: "Mild Steel, Hot Dip Galvanized, Long Lasting" },
    { image: welding2, name: "SS Premium Gate", specs: "Stainless Steel, Weather Proof, Low Maintenance" },
    { image: welding3, name: "MS Heavy Duty Gate", specs: "Mild Steel, Reinforced Frame, Industrial Grade" },
    { image: welding4, name: "SS Mesh Panel Gate", specs: "Stainless Steel Mesh, Visibility, Security Design" },
    { image: welding5, name: "MS Solid Panel Gate", specs: "Mild Steel, Privacy Design, Weather Shield" },
    { image: welding6, name: "SS Ornamental Gate", specs: "Stainless Steel, Decorative Elements, Scroll Work" },
    { image: welding7, name: "MS Motorized Gate", specs: "Mild Steel, Electric Operation, Remote Access" },
    { image: welding8, name: "SS Manual Gate", specs: "Stainless Steel, Hand Operation, Reliable Mechanism" },
    { image: welding9, name: "MS Barrier Gate", specs: "Mild Steel, Vehicle Control, Removable Design" },
    { image: welding10, name: "SS Entry Gate", specs: "Stainless Steel, Main Entrance, Grand Design" }
  ];

  const totalPages = Math.ceil(mainGates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mainGates.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Main Gate - ${productName}`,
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
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Main Gates</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional <span className="text-primary">Main Gate Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Secure your property with our premium main gates featuring automatic systems, decorative designs, and industrial-grade construction.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Main Gates?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional welding, quality materials, and security features to protect your property with style and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-muted-foreground">
                  Advanced locking systems and robust construction for maximum security
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
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-muted-foreground">
                  Tailored designs to match your property's architecture and style
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

export default MainGatesPage;