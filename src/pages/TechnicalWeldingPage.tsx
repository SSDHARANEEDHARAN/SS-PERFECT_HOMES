import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Technical Welding Images - Using welding work images
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

const TechnicalWeldingPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const technicalWelding = [
    { image: welding1, name: "Gas Stove Frame", specs: "Commercial Grade, Heat Resistant, Safety Certified" },
    { image: welding2, name: "Industrial Burner System", specs: "High Capacity, Precision Control, Efficient Combustion" },
    { image: welding3, name: "Kitchen Exhaust Hood", specs: "Stainless Steel, Grease Filters, Motor Mount" },
    { image: welding4, name: "Commercial Oven Frame", specs: "Heavy Duty, Insulation Support, Temperature Resistant" },
    { image: welding5, name: "Boiler Support Structure", specs: "Pressure Rated, Thermal Expansion Joints, Safety Compliant" },
    { image: welding6, name: "Furnace Assembly", specs: "High Temperature Steel, Refractory Lining, Heat Exchange" },
    { image: welding7, name: "Steam Pipe Network", specs: "Schedule 40 Pipe, Pressure Testing, Expansion Joints" },
    { image: welding8, name: "Heat Exchanger Frame", specs: "Corrosion Resistant, Efficient Design, Easy Maintenance" },
    { image: welding9, name: "Industrial Chimney", specs: "High Grade Steel, Weather Resistant, Draft Optimized" },
    { image: welding10, name: "Pressure Vessel", specs: "ASME Certified, Stress Relief, Non-Destructive Testing" },
    { image: welding11, name: "Combustion Chamber", specs: "Refractory Lined, Temperature Control, Safety Systems" },
    { image: welding12, name: "Gas Pipeline System", specs: "Seamless Pipe, Leak Testing, Pressure Regulation" },
    { image: welding13, name: "Thermal Processing Unit", specs: "Controlled Atmosphere, Temperature Monitoring, Safety Interlocks" },
    { image: welding14, name: "Industrial Kiln Frame", specs: "High Temperature Alloy, Thermal Cycling, Refractory Support" },
    { image: welding15, name: "Heating Element Housing", specs: "Electrical Safety, Heat Distribution, Insulation Mount" },
    { image: welding16, name: "Flare Stack System", specs: "Emergency Burn-off, Wind Load Design, Safety Systems" },
    { image: welding17, name: "Reactor Vessel", specs: "Chemical Resistant, Mixing Systems, Temperature Control" },
    { image: welding18, name: "Distillation Column", specs: "Precision Fabrication, Tray Installation, Insulation Ready" },
    { image: welding19, name: "Compressor Foundation", specs: "Vibration Isolation, Anchor Bolts, Precision Alignment" },
    { image: welding20, name: "Process Piping System", specs: "Sanitary Grade, Easy Cleaning, Validation Ready" }
  ];

  const totalPages = Math.ceil(technicalWelding.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = technicalWelding.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Technical Welding - ${productName}`,
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
                <Wrench className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Technical Welding</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced <span className="text-primary">Technical Welding Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Specialized welding for industrial equipment, stoves, boilers, and technical installations requiring precision engineering and safety compliance.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Technical Welding?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certified welders, industrial-grade materials, and precision techniques for critical applications requiring safety and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge in industrial welding and technical applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                <p className="text-muted-foreground">
                  ASME certified welding procedures and quality assurance protocols
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety Compliance</h3>
                <p className="text-muted-foreground">
                  Strict adherence to safety standards and industrial regulations
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

export default TechnicalWeldingPage;