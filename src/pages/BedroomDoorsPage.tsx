import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bed } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Bedroom Interior Images
import bedroomImage1 from "@/assets/bg-bedroom-1.jpg";
import bedroomImage2 from "@/assets/bg-bedroom-2.jpg";
import bedroomImage3 from "@/assets/bg-living-1.jpg";
import bedroomImage4 from "@/assets/bg-living-2.jpg";
import bedroomImage5 from "@/assets/bg-guest-1.jpg";
import bedroomImage6 from "@/assets/bg-nursery-1.jpg";
import bedroomImage7 from "@/assets/furnished-work-1.jpg";
import bedroomImage8 from "@/assets/furnished-work-2.jpg";
import bedroomImage9 from "@/assets/furnished-work-3.jpg";
import bedroomImage10 from "@/assets/furnished-work-4.jpg";
import bedroomImage11 from "@/assets/furnished-work-5.jpg";
import bedroomImage12 from "@/assets/furnished-work-6.jpg";
import bedroomImage13 from "@/assets/furnished-work-7.jpg";
import bedroomImage14 from "@/assets/furnished-work-8.jpg";
import bedroomImage15 from "@/assets/furnished-work-9.jpg";
import bedroomImage16 from "@/assets/furnished-work-10.jpg";
import bedroomImage17 from "@/assets/furnished-work-11.jpg";
import bedroomImage18 from "@/assets/furnished-work-12.jpg";
import bedroomImage19 from "@/assets/furnished-work-13.jpg";
import bedroomImage20 from "@/assets/furnished-work-14.jpg";
import bedroomImage21 from "@/assets/furnished-work-15.jpg";
import bedroomImage22 from "@/assets/furnished-work-16.jpg";
import bedroomImage23 from "@/assets/furnished-work-17.jpg";
import bedroomImage24 from "@/assets/furnished-work-18.jpg";
import bedroomImage25 from "@/assets/furnished-work-19.jpg";
import bedroomImage26 from "@/assets/furnished-work-20.jpg";
import bedroomImage27 from "@/assets/smart-home-1.jpg";
import bedroomImage28 from "@/assets/smart-home-2.jpg";
import bedroomImage29 from "@/assets/smart-home-3.jpg";
import bedroomImage30 from "@/assets/smart-home-4.jpg";
import bedroomImage31 from "@/assets/smart-home-5.jpg";
import bedroomImage32 from "@/assets/smart-home-6.jpg";
import bedroomImage33 from "@/assets/smart-home-7.jpg";
import bedroomImage34 from "@/assets/smart-home-8.jpg";
import bedroomImage35 from "@/assets/smart-home-9.jpg";
import bedroomImage36 from "@/assets/smart-home-10.jpg";
import bedroomImage37 from "@/assets/smart-home-11.jpg";
import bedroomImage38 from "@/assets/smart-home-12.jpg";
import bedroomImage39 from "@/assets/smart-home-13.jpg";
import bedroomImage40 from "@/assets/smart-home-14.jpg";
import bedroomImage41 from "@/assets/smart-home-15.jpg";
import bedroomImage42 from "@/assets/smart-home-16.jpg";
import bedroomImage43 from "@/assets/smart-home-17.jpg";
import bedroomImage44 from "@/assets/smart-home-18.jpg";
import bedroomImage45 from "@/assets/smart-home-19.jpg";
import bedroomImage46 from "@/assets/smart-home-20.jpg";
import bedroomImage47 from "@/assets/wood-work-1.jpg";
import bedroomImage48 from "@/assets/wood-work-2.jpg";
import bedroomImage49 from "@/assets/wood-work-3.jpg";
import bedroomImage50 from "@/assets/wood-work-4.jpg";

const BedroomDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const bedroomInteriors = [
    { image: bedroomImage1, name: "Luxury Master Bedroom", specs: "King Size Setup, Walk-in Closet, Premium Finishes" },
    { image: bedroomImage2, name: "Contemporary Bedroom Suite", specs: "Modern Design, Built-in Storage, Ambient Lighting" },
    { image: bedroomImage3, name: "Classic Bedroom Interior", specs: "Traditional Style, Wooden Furniture, Elegant Décor" },
    { image: bedroomImage4, name: "Minimalist Bedroom Design", specs: "Clean Lines, Neutral Colors, Smart Storage" },
    { image: bedroomImage5, name: "Elegant Guest Bedroom", specs: "Comfortable Layout, Quality Mattress, Reading Corner" },
    { image: bedroomImage6, name: "Cozy Nursery Design", specs: "Child-Safe Materials, Playful Colors, Storage Solutions" },
    { image: bedroomImage7, name: "Modern Bedroom Interior", specs: "Platform Bed, LED Lighting, Premium Textiles" },
    { image: bedroomImage8, name: "Luxury Bedroom Suite", specs: "Custom Furniture, High-End Finishes, Spacious Layout" },
    { image: bedroomImage9, name: "Designer Bedroom Space", specs: "Unique Features, Premium Materials, Expert Craftsmanship" },
    { image: bedroomImage10, name: "Contemporary Sleep Space", specs: "Sleek Design, Integrated Technology, Quality Build" },
    { image: bedroomImage11, name: "Premium Bedroom Interior", specs: "Luxury Linens, Custom Headboard, Mood Lighting" },
    { image: bedroomImage12, name: "Elegant Master Suite", specs: "Sitting Area, Premium Carpet, Designer Furniture" },
    { image: bedroomImage13, name: "Modern Comfort Zone", specs: "Ergonomic Design, Natural Materials, Peaceful Ambiance" },
    { image: bedroomImage14, name: "Stylish Bedroom Design", specs: "Trendy Colors, Quality Fixtures, Comfortable Layout" },
    { image: bedroomImage15, name: "Luxury Sleep Sanctuary", specs: "High-End Mattress, Blackout Curtains, Climate Control" },
    { image: bedroomImage16, name: "Contemporary Bedroom Hub", specs: "Multi-functional Space, Smart Storage, Modern Aesthetics" },
    { image: bedroomImage17, name: "Designer Sleep Space", specs: "Custom Design, Premium Fabrics, Artistic Elements" },
    { image: bedroomImage18, name: "Elegant Bedroom Interior", specs: "Sophisticated Style, Quality Materials, Comfort Focus" },
    { image: bedroomImage19, name: "Modern Master Bedroom", specs: "Spacious Layout, Luxury Features, Contemporary Style" },
    { image: bedroomImage20, name: "Premium Sleep Environment", specs: "Acoustic Treatment, Air Purification, Luxury Comfort" },
    { image: bedroomImage21, name: "Stylish Bedroom Suite", specs: "Designer Furniture, Premium Lighting, Quality Finishes" },
    { image: bedroomImage22, name: "Contemporary Rest Space", specs: "Modern Functionality, Comfortable Seating, Smart Design" },
    { image: bedroomImage23, name: "Luxury Bedroom Experience", specs: "Bespoke Features, High-End Materials, Expert Installation" },
    { image: bedroomImage24, name: "Designer Master Suite", specs: "Custom Layout, Premium Amenities, Sophisticated Design" },
    { image: bedroomImage25, name: "Modern Sleep Haven", specs: "Tranquil Colors, Quality Mattress, Peaceful Environment" },
    { image: bedroomImage26, name: "Elegant Bedroom Design", specs: "Classic Elements, Modern Comfort, Quality Craftsmanship" },
    { image: bedroomImage27, name: "Smart Bedroom Technology", specs: "Automated Controls, Digital Integration, Modern Living" },
    { image: bedroomImage28, name: "Premium Bedroom Interior", specs: "Luxury Materials, Custom Features, Expert Design" },
    { image: bedroomImage29, name: "Contemporary Sleep Space", specs: "Minimalist Aesthetic, Quality Build, Comfortable Environment" },
    { image: bedroomImage30, name: "Designer Bedroom Solution", specs: "Unique Style, Premium Finishes, Professional Installation" },
    { image: bedroomImage31, name: "Modern Comfort Suite", specs: "Ergonomic Design, Quality Materials, Peaceful Ambiance" },
    { image: bedroomImage32, name: "Luxury Sleep Sanctuary", specs: "High-End Features, Custom Design, Premium Comfort" },
    { image: bedroomImage33, name: "Elegant Master Bedroom", specs: "Sophisticated Style, Quality Furniture, Designer Lighting" },
    { image: bedroomImage34, name: "Contemporary Bedroom Hub", specs: "Multi-functional Design, Smart Features, Modern Aesthetics" },
    { image: bedroomImage35, name: "Premium Sleep Environment", specs: "Luxury Amenities, Quality Build, Comfortable Layout" },
    { image: bedroomImage36, name: "Designer Bedroom Interior", specs: "Custom Features, High-End Materials, Expert Craftsmanship" },
    { image: bedroomImage37, name: "Modern Master Suite", specs: "Spacious Design, Premium Finishes, Contemporary Style" },
    { image: bedroomImage38, name: "Stylish Sleep Space", specs: "Trendy Design, Quality Components, Comfortable Environment" },
    { image: bedroomImage39, name: "Luxury Bedroom Design", specs: "Bespoke Features, Premium Materials, Expert Installation" },
    { image: bedroomImage40, name: "Contemporary Rest Area", specs: "Modern Functionality, Quality Build, Peaceful Setting" },
    { image: bedroomImage41, name: "Elegant Sleep Sanctuary", specs: "Sophisticated Features, Premium Comfort, Designer Style" },
    { image: bedroomImage42, name: "Premium Bedroom Suite", specs: "Luxury Components, Custom Design, High-End Finishes" },
    { image: bedroomImage43, name: "Modern Comfort Zone", specs: "Contemporary Style, Quality Materials, Smart Features" },
    { image: bedroomImage44, name: "Designer Master Bedroom", specs: "Unique Layout, Premium Amenities, Expert Workmanship" },
    { image: bedroomImage45, name: "Stylish Bedroom Interior", specs: "Modern Aesthetics, Quality Build, Comfortable Design" },
    { image: bedroomImage46, name: "Luxury Sleep Experience", specs: "High-End Features, Custom Solutions, Premium Quality" },
    { image: bedroomImage47, name: "Contemporary Bedroom Design", specs: "Sleek Style, Quality Materials, Modern Functionality" },
    { image: bedroomImage48, name: "Elegant Master Suite", specs: "Sophisticated Design, Premium Features, Expert Installation" },
    { image: bedroomImage49, name: "Premium Sleep Space", specs: "Luxury Comfort, Quality Build, Designer Aesthetics" },
    { image: bedroomImage50, name: "Modern Bedroom Interior", specs: "Contemporary Features, High-End Materials, Quality Craftsmanship" },
  ];

  const totalPages = Math.ceil(bedroomInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInteriors = bedroomInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Bedroom Interior - ${productName}`,
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
                <Bed className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Bedroom Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Luxury <span className="text-primary">Bedroom Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of elegant bedroom interiors featuring premium comfort and sophisticated design.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentInteriors.map((interior, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={interior.image} 
                      alt={interior.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{interior.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {interior.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(interior.name, interior.specs)}
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

export default BedroomDoorsPage;