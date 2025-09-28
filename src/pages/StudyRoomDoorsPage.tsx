import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Study Room Interior Images
import studyImage1 from "@/assets/bg-study-1.jpg";
import studyImage2 from "@/assets/bg-office-1.jpg";
import studyImage3 from "@/assets/bg-library-1.jpg";
import studyImage4 from "@/assets/furnished-work-1.jpg";
import studyImage5 from "@/assets/furnished-work-2.jpg";
import studyImage6 from "@/assets/furnished-work-3.jpg";
import studyImage7 from "@/assets/furnished-work-4.jpg";
import studyImage8 from "@/assets/furnished-work-5.jpg";
import studyImage9 from "@/assets/furnished-work-6.jpg";
import studyImage10 from "@/assets/furnished-work-7.jpg";
import studyImage11 from "@/assets/furnished-work-8.jpg";
import studyImage12 from "@/assets/furnished-work-9.jpg";
import studyImage13 from "@/assets/furnished-work-10.jpg";
import studyImage14 from "@/assets/furnished-work-11.jpg";
import studyImage15 from "@/assets/furnished-work-12.jpg";
import studyImage16 from "@/assets/furnished-work-13.jpg";
import studyImage17 from "@/assets/furnished-work-14.jpg";
import studyImage18 from "@/assets/furnished-work-15.jpg";
import studyImage19 from "@/assets/furnished-work-16.jpg";
import studyImage20 from "@/assets/furnished-work-17.jpg";
import studyImage21 from "@/assets/furnished-work-18.jpg";
import studyImage22 from "@/assets/furnished-work-19.jpg";
import studyImage23 from "@/assets/furnished-work-20.jpg";
import studyImage24 from "@/assets/smart-home-1.jpg";
import studyImage25 from "@/assets/smart-home-2.jpg";
import studyImage26 from "@/assets/smart-home-3.jpg";
import studyImage27 from "@/assets/smart-home-4.jpg";
import studyImage28 from "@/assets/smart-home-5.jpg";
import studyImage29 from "@/assets/smart-home-6.jpg";
import studyImage30 from "@/assets/smart-home-7.jpg";
import studyImage31 from "@/assets/smart-home-8.jpg";
import studyImage32 from "@/assets/smart-home-9.jpg";
import studyImage33 from "@/assets/smart-home-10.jpg";
import studyImage34 from "@/assets/smart-home-11.jpg";
import studyImage35 from "@/assets/smart-home-12.jpg";
import studyImage36 from "@/assets/smart-home-13.jpg";
import studyImage37 from "@/assets/smart-home-14.jpg";
import studyImage38 from "@/assets/smart-home-15.jpg";
import studyImage39 from "@/assets/smart-home-16.jpg";
import studyImage40 from "@/assets/smart-home-17.jpg";
import studyImage41 from "@/assets/smart-home-18.jpg";
import studyImage42 from "@/assets/smart-home-19.jpg";
import studyImage43 from "@/assets/smart-home-20.jpg";
import studyImage44 from "@/assets/wood-work-1.jpg";
import studyImage45 from "@/assets/wood-work-2.jpg";
import studyImage46 from "@/assets/wood-work-3.jpg";
import studyImage47 from "@/assets/wood-work-4.jpg";
import studyImage48 from "@/assets/wood-work-5.jpg";
import studyImage49 from "@/assets/wood-work-6.jpg";
import studyImage50 from "@/assets/wood-work-7.jpg";

const StudyRoomDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const studyRoomInteriors = [
    { image: studyImage1, name: "Executive Study Room", specs: "Premium Wood Desk, Built-in Shelving, Task Lighting" },
    { image: studyImage2, name: "Modern Home Office", specs: "Ergonomic Design, Smart Storage, Cable Management" },
    { image: studyImage3, name: "Classic Library Design", specs: "Floor-to-Ceiling Books, Reading Nook, Vintage Charm" },
    { image: studyImage4, name: "Contemporary Study Space", specs: "Minimalist Design, Glass Desk, LED Lighting" },
    { image: studyImage5, name: "Luxury Home Office", specs: "Leather Furniture, Mahogany Panels, Executive Feel" },
    { image: studyImage6, name: "Smart Study Room", specs: "Tech Integration, Wireless Charging, Digital Displays" },
    { image: studyImage7, name: "Traditional Study Interior", specs: "Oak Furnishing, Classic Design, Warm Ambiance" },
    { image: studyImage8, name: "Designer Study Space", specs: "Custom Furniture, Artistic Elements, Premium Finishes" },
    { image: studyImage9, name: "Modern Reading Room", specs: "Comfortable Seating, Natural Light, Book Display" },
    { image: studyImage10, name: "Executive Office Design", specs: "Professional Layout, Quality Materials, Status Symbol" },
    { image: studyImage11, name: "Contemporary Study Hub", specs: "Multi-functional Space, Smart Features, Modern Aesthetics" },
    { image: studyImage12, name: "Classic Study Interior", specs: "Traditional Elements, Quality Wood, Timeless Design" },
    { image: studyImage13, name: "Luxury Reading Space", specs: "Premium Comfort, Elegant Design, Sophisticated Style" },
    { image: studyImage14, name: "Modern Home Library", specs: "Organized Storage, Study Area, Reading Corner" },
    { image: studyImage15, name: "Executive Study Design", specs: "Professional Setup, High-End Materials, Impressive Look" },
    { image: studyImage16, name: "Smart Office Interior", specs: "Technology Integration, Efficient Layout, Modern Tools" },
    { image: studyImage17, name: "Designer Study Room", specs: "Custom Solutions, Premium Finishes, Unique Style" },
    { image: studyImage18, name: "Contemporary Work Space", specs: "Clean Design, Functional Layout, Quality Build" },
    { image: studyImage19, name: "Luxury Study Interior", specs: "High-End Features, Custom Furniture, Elegant Atmosphere" },
    { image: studyImage20, name: "Modern Reading Corner", specs: "Comfortable Design, Good Lighting, Peaceful Environment" },
    { image: studyImage21, name: "Executive Home Office", specs: "Professional Grade, Premium Materials, Impressive Design" },
    { image: studyImage22, name: "Classic Study Design", specs: "Traditional Style, Quality Craftsmanship, Warm Feel" },
    { image: studyImage23, name: "Contemporary Library Space", specs: "Modern Organization, Smart Storage, Efficient Design" },
    { image: studyImage24, name: "Smart Study Environment", specs: "Digital Integration, Automated Features, Tech-Savvy" },
    { image: studyImage25, name: "Designer Reading Room", specs: "Artistic Elements, Custom Features, Unique Character" },
    { image: studyImage26, name: "Luxury Office Interior", specs: "Premium Quality, Elegant Design, Executive Standard" },
    { image: studyImage27, name: "Modern Study Hub", specs: "Multi-purpose Design, Smart Solutions, Contemporary Style" },
    { image: studyImage28, name: "Traditional Reading Space", specs: "Classic Charm, Quality Materials, Timeless Appeal" },
    { image: studyImage29, name: "Executive Study Suite", specs: "Professional Layout, High-End Finishes, Impressive Setup" },
    { image: studyImage30, name: "Contemporary Office Design", specs: "Modern Functionality, Clean Lines, Efficient Organization" },
    { image: studyImage31, name: "Luxury Study Environment", specs: "Premium Comfort, Sophisticated Style, Quality Build" },
    { image: studyImage32, name: "Smart Reading Corner", specs: "Technology Enhanced, Comfortable Setting, Modern Features" },
    { image: studyImage33, name: "Designer Study Interior", specs: "Custom Design, Premium Materials, Artistic Touch" },
    { image: studyImage34, name: "Modern Home Library", specs: "Organized System, Study Area, Contemporary Style" },
    { image: studyImage35, name: "Executive Reading Room", specs: "Professional Quality, Elegant Atmosphere, Premium Setup" },
    { image: studyImage36, name: "Contemporary Study Space", specs: "Modern Design, Functional Layout, Quality Components" },
    { image: studyImage37, name: "Luxury Office Suite", specs: "High-End Materials, Custom Features, Executive Feel" },
    { image: studyImage38, name: "Smart Study Design", specs: "Tech Integration, Efficient Space, Modern Solutions" },
    { image: studyImage39, name: "Traditional Study Room", specs: "Classic Elements, Quality Wood, Timeless Design" },
    { image: studyImage40, name: "Designer Reading Space", specs: "Unique Style, Premium Finishes, Artistic Elements" },
    { image: studyImage41, name: "Modern Office Interior", specs: "Contemporary Features, Smart Design, Professional Look" },
    { image: studyImage42, name: "Luxury Study Corner", specs: "Premium Comfort, Elegant Style, Quality Craftsmanship" },
    { image: studyImage43, name: "Executive Library Design", specs: "Professional Grade, Impressive Setup, High-End Materials" },
    { image: studyImage44, name: "Contemporary Reading Hub", specs: "Modern Organization, Smart Features, Efficient Layout" },
    { image: studyImage45, name: "Smart Office Environment", specs: "Technology Enhanced, Modern Tools, Digital Integration" },
    { image: studyImage46, name: "Designer Study Suite", specs: "Custom Solutions, Premium Quality, Unique Character" },
    { image: studyImage47, name: "Luxury Reading Interior", specs: "High-End Comfort, Sophisticated Design, Premium Build" },
    { image: studyImage48, name: "Modern Study Center", specs: "Contemporary Style, Functional Design, Quality Materials" },
    { image: studyImage49, name: "Executive Office Space", specs: "Professional Setup, Premium Finishes, Impressive Look" },
    { image: studyImage50, name: "Smart Library Design", specs: "Tech Integration, Modern Organization, Efficient System" },
  ];

  const totalPages = Math.ceil(studyRoomInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInteriors = studyRoomInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Study Room Interior - ${productName}`,
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
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Study Room Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium <span className="text-primary">Study Room Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of sophisticated study room interiors featuring executive designs and smart solutions.
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

export default StudyRoomDoorsPage;