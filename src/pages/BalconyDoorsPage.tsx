import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Balcony Door Images - Using various collections
import balconyImage1 from "@/assets/bg-patio-1.jpg";
import balconyImage2 from "@/assets/bg-sunroom-1.jpg";
import balconyImage3 from "@/assets/wood-work-1.jpg";
import balconyImage4 from "@/assets/wood-work-2.jpg";
import balconyImage5 from "@/assets/wood-work-3.jpg";
import balconyImage6 from "@/assets/wood-work-4.jpg";
import balconyImage7 from "@/assets/wood-work-5.jpg";
import balconyImage8 from "@/assets/wood-work-6.jpg";
import balconyImage9 from "@/assets/wood-work-7.jpg";
import balconyImage10 from "@/assets/wood-work-8.jpg";
import balconyImage11 from "@/assets/wood-work-9.jpg";
import balconyImage12 from "@/assets/wood-work-10.jpg";
import balconyImage13 from "@/assets/wood-work-11.jpg";
import balconyImage14 from "@/assets/wood-work-12.jpg";
import balconyImage15 from "@/assets/wood-work-13.jpg";
import balconyImage16 from "@/assets/wood-work-14.jpg";
import balconyImage17 from "@/assets/wood-work-15.jpg";
import balconyImage18 from "@/assets/wood-work-16.jpg";
import balconyImage19 from "@/assets/wood-work-17.jpg";
import balconyImage20 from "@/assets/wood-work-18.jpg";
import balconyImage21 from "@/assets/wood-work-19.jpg";
import balconyImage22 from "@/assets/wood-work-20.jpg";
import balconyImage23 from "@/assets/automatic-gate-1.jpg";
import balconyImage24 from "@/assets/automatic-gate-2.jpg";
import balconyImage25 from "@/assets/automatic-gate-3.jpg";
import balconyImage26 from "@/assets/automatic-gate-4.jpg";
import balconyImage27 from "@/assets/automatic-gate-5.jpg";
import balconyImage28 from "@/assets/automatic-gate-6.jpg";
import balconyImage29 from "@/assets/automatic-gate-7.jpg";
import balconyImage30 from "@/assets/automatic-gate-8.jpg";
import balconyImage31 from "@/assets/automatic-gate-9.jpg";
import balconyImage32 from "@/assets/automatic-gate-10.jpg";
import balconyImage33 from "@/assets/automatic-gate-11.jpg";
import balconyImage34 from "@/assets/automatic-gate-12.jpg";
import balconyImage35 from "@/assets/automatic-gate-13.jpg";
import balconyImage36 from "@/assets/automatic-gate-14.jpg";
import balconyImage37 from "@/assets/automatic-gate-15.jpg";
import balconyImage38 from "@/assets/automatic-gate-16.jpg";
import balconyImage39 from "@/assets/automatic-gate-17.jpg";
import balconyImage40 from "@/assets/automatic-gate-18.jpg";
import balconyImage41 from "@/assets/automatic-gate-19.jpg";
import balconyImage42 from "@/assets/automatic-gate-20.jpg";
import balconyImage43 from "@/assets/welding-work-1.jpg";
import balconyImage44 from "@/assets/welding-work-2.jpg";
import balconyImage45 from "@/assets/welding-work-3.jpg";
import balconyImage46 from "@/assets/welding-work-4.jpg";
import balconyImage47 from "@/assets/welding-work-5.jpg";
import balconyImage48 from "@/assets/welding-work-6.jpg";
import balconyImage49 from "@/assets/welding-work-7.jpg";
import balconyImage50 from "@/assets/welding-work-8.jpg";

const BalconyDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const balconyDoors = [
    { image: balconyImage1, name: "Premium Sliding Balcony Door", specs: "Aluminum Frame, 8x7 ft, Weather Sealed" },
    { image: balconyImage2, name: "French Balcony Doors", specs: "Wooden Frame, 7x6 ft, Double Glazed" },
    { image: balconyImage3, name: "Modern Glass Balcony Door", specs: "Steel Frame, 8x7 ft, Tempered Glass" },
    { image: balconyImage4, name: "Traditional Wooden Door", specs: "Teak Wood, 7x6 ft, Natural Finish" },
    { image: balconyImage5, name: "Contemporary Sliding Door", specs: "uPVC Frame, 8x7 ft, Energy Efficient" },
    { image: balconyImage6, name: "Elegant French Door", specs: "Mahogany Wood, 7x6 ft, Classic Design" },
    { image: balconyImage7, name: "Premium Glass Door", specs: "Aluminum Frame, 8x7 ft, Low-E Glass" },
    { image: balconyImage8, name: "Designer Balcony Entry", specs: "Composite Frame, 7x6 ft, Security Features" },
    { image: balconyImage9, name: "Luxury Sliding System", specs: "Premium Steel, 8x7 ft, Smooth Operation" },
    { image: balconyImage10, name: "Classic Wooden Balcony Door", specs: "Oak Wood, 7x6 ft, Weather Resistant" },
    { image: balconyImage11, name: "Modern Bi-fold Door", specs: "Aluminum Frame, 8x7 ft, Space Saving" },
    { image: balconyImage12, name: "Traditional French Style", specs: "Pine Wood, 7x6 ft, Decorative Glass" },
    { image: balconyImage13, name: "Contemporary Glass Panel", specs: "Steel Frame, 8x7 ft, Safety Glass" },
    { image: balconyImage14, name: "Premium Wooden Door", specs: "Walnut Wood, 7x6 ft, Custom Stain" },
    { image: balconyImage15, name: "Elegant Sliding Door", specs: "Composite Frame, 8x7 ft, Thermal Break" },
    { image: balconyImage16, name: "Designer French Door", specs: "Cedar Wood, 7x6 ft, Artistic Glass" },
    { image: balconyImage17, name: "Luxury Glass Entry", specs: "Premium Steel, 8x7 ft, Smart Lock" },
    { image: balconyImage18, name: "Modern Balcony Door", specs: "Aluminum Frame, 7x6 ft, UV Protection" },
    { image: balconyImage19, name: "Classic Sliding System", specs: "Wooden Frame, 8x7 ft, Traditional Style" },
    { image: balconyImage20, name: "Contemporary Entry Door", specs: "uPVC Frame, 7x6 ft, Multi-Point Lock" },
    { image: balconyImage21, name: "Premium French Door", specs: "Mahogany Wood, 8x7 ft, Leaded Glass" },
    { image: balconyImage22, name: "Designer Glass Door", specs: "Steel Frame, 7x6 ft, Frosted Panels" },
    { image: balconyImage23, name: "Luxury Sliding Entry", specs: "Composite Frame, 8x7 ft, Weather Strip" },
    { image: balconyImage24, name: "Elegant Wooden Door", specs: "Teak Wood, 7x6 ft, Marine Grade" },
    { image: balconyImage25, name: "Modern Glass System", specs: "Aluminum Frame, 8x7 ft, Triple Glazed" },
    { image: balconyImage26, name: "Traditional Balcony Door", specs: "Oak Wood, 7x6 ft, Period Features" },
    { image: balconyImage27, name: "Contemporary Sliding Door", specs: "Steel Frame, 8x7 ft, Minimal Frame" },
    { image: balconyImage28, name: "Premium French Style", specs: "Walnut Wood, 7x6 ft, Beveled Glass" },
    { image: balconyImage29, name: "Designer Entry System", specs: "Composite Frame, 8x7 ft, Custom Color" },
    { image: balconyImage30, name: "Luxury Glass Door", specs: "Premium Steel, 7x6 ft, Smart Features" },
    { image: balconyImage31, name: "Elegant Balcony Entry", specs: "Cedar Wood, 8x7 ft, Natural Grain" },
    { image: balconyImage32, name: "Modern Sliding System", specs: "Aluminum Frame, 7x6 ft, Powder Coated" },
    { image: balconyImage33, name: "Classic French Door", specs: "Pine Wood, 8x7 ft, Stained Glass" },
    { image: balconyImage34, name: "Contemporary Glass Panel", specs: "uPVC Frame, 7x6 ft, Thermal Efficient" },
    { image: balconyImage35, name: "Premium Wooden Entry", specs: "Mahogany Wood, 8x7 ft, Hand Crafted" },
    { image: balconyImage36, name: "Designer Sliding Door", specs: "Steel Frame, 7x6 ft, Architectural Glass" },
    { image: balconyImage37, name: "Luxury Balcony System", specs: "Composite Frame, 8x7 ft, Sound Proof" },
    { image: balconyImage38, name: "Elegant Glass Door", specs: "Aluminum Frame, 7x6 ft, Tinted Glass" },
    { image: balconyImage39, name: "Modern French Style", specs: "Walnut Wood, 8x7 ft, Contemporary Hardware" },
    { image: balconyImage40, name: "Traditional Sliding Door", specs: "Oak Wood, 7x6 ft, Classic Finish" },
    { image: balconyImage41, name: "Contemporary Entry System", specs: "Steel Frame, 8x7 ft, Security Glass" },
    { image: balconyImage42, name: "Premium Glass Panel", specs: "Composite Frame, 7x6 ft, Energy Star" },
    { image: balconyImage43, name: "Designer Balcony Door", specs: "Teak Wood, 8x7 ft, Artistic Design" },
    { image: balconyImage44, name: "Luxury French Entry", specs: "Cedar Wood, 7x6 ft, Premium Hardware" },
    { image: balconyImage45, name: "Elegant Sliding System", specs: "Aluminum Frame, 8x7 ft, Smooth Track" },
    { image: balconyImage46, name: "Modern Glass Door", specs: "Steel Frame, 7x6 ft, Impact Resistant" },
    { image: balconyImage47, name: "Classic Wooden Entry", specs: "Pine Wood, 8x7 ft, Traditional Joinery" },
    { image: balconyImage48, name: "Contemporary Balcony Door", specs: "uPVC Frame, 7x6 ft, Modern Style" },
    { image: balconyImage49, name: "Premium Sliding Door", specs: "Composite Frame, 8x7 ft, Luxury Finish" },
    { image: balconyImage50, name: "Designer Glass System", specs: "Premium Steel, 7x6 ft, Custom Features" },
  ];

  const totalPages = Math.ceil(balconyDoors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoors = balconyDoors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Balcony Door - ${productName}`,
      description: `Get detailed information about ${productName}. Specifications: ${specs}`
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
                <Wind className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Balcony Doors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium <span className="text-primary">Balcony Door Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of balcony doors featuring weather-resistant materials and elegant designs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentDoors.map((door, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={door.image} 
                      alt={door.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{door.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {door.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(door.name, door.specs)}
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
      </main>

      <Footer />
      
      {selectedService && (
        <EnquiryForm
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default BalconyDoorsPage;