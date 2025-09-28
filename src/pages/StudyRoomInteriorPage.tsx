import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Study Room Interior Images
import study1 from "@/assets/bg-study-1.jpg";
import library1 from "@/assets/bg-library-1.jpg";
import office1 from "@/assets/bg-office-1.jpg";
import furnished1 from "@/assets/furnished-work-1.jpg";
import furnished2 from "@/assets/furnished-work-2.jpg";
import furnished3 from "@/assets/furnished-work-3.jpg";
import furnished4 from "@/assets/furnished-work-4.jpg";
import furnished5 from "@/assets/furnished-work-5.jpg";
import furnished6 from "@/assets/furnished-work-6.jpg";
import furnished7 from "@/assets/furnished-work-7.jpg";
import furnished8 from "@/assets/furnished-work-8.jpg";
import furnished9 from "@/assets/furnished-work-9.jpg";
import furnished10 from "@/assets/furnished-work-10.jpg";
import furnished11 from "@/assets/furnished-work-11.jpg";
import furnished12 from "@/assets/furnished-work-12.jpg";
import furnished13 from "@/assets/furnished-work-13.jpg";
import furnished14 from "@/assets/furnished-work-14.jpg";
import furnished15 from "@/assets/furnished-work-15.jpg";
import furnished16 from "@/assets/furnished-work-16.jpg";
import furnished17 from "@/assets/furnished-work-17.jpg";
import furnished18 from "@/assets/furnished-work-18.jpg";
import furnished19 from "@/assets/furnished-work-19.jpg";

const StudyRoomInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const studyRoomInteriors = [
    { image: study1, name: "Modern Study Room", specs: "L-Shape Desk, Built-in Shelves, Task Lighting" },
    { image: library1, name: "Home Library Setup", specs: "Floor-to-ceiling Books, Reading Chair, Classic Design" },
    { image: office1, name: "Home Office Suite", specs: "Executive Desk, Storage Cabinets, Professional Look" },
    { image: furnished1, name: "Student Study Corner", specs: "Compact Desk, Organized Storage, Bright Lighting" },
    { image: furnished2, name: "Reading Nook Design", specs: "Comfortable Seating, Book Storage, Cozy Atmosphere" },
    { image: furnished3, name: "Minimalist Study Space", specs: "Clean Lines, Floating Desk, Cable Management" },
    { image: furnished4, name: "Traditional Study Room", specs: "Wooden Furniture, Classic Bookshelf, Vintage Style" },
    { image: furnished5, name: "Kids Study Area", specs: "Adjustable Desk, Colorful Storage, Fun Elements" },
    { image: furnished6, name: "Multi-purpose Study Room", specs: "Convertible Furniture, Guest Bed, Flexible Layout" },
    { image: furnished7, name: "Creative Workshop Space", specs: "Art Supplies Storage, Work Surface, Inspiration Board" },
    { image: furnished8, name: "Tech-enabled Study Room", specs: "Multiple Monitors, Tech Desk, Cable Solutions" },
    { image: furnished9, name: "Shared Study Space", specs: "Dual Workstations, Partition Privacy, Organized Layout" },
    { image: furnished10, name: "Compact Study Nook", specs: "Wall-mounted Desk, Vertical Storage, Space Efficient" },
    { image: furnished11, name: "Executive Home Office", specs: "Premium Furniture, Meeting Area, Professional Setup" },
    { image: furnished12, name: "Study Room with Storage", specs: "Built-in Cabinets, File Organization, Clutter-free Design" },
    { image: furnished13, name: "Bright Study Corner", specs: "Window Desk, Natural Light, Plant-friendly Space" },
    { image: furnished14, name: "Industrial Study Style", specs: "Metal Framework, Concrete Surfaces, Urban Look" },
    { image: furnished15, name: "Scandinavian Study Room", specs: "Light Woods, White Walls, Hygge Elements" },
    { image: furnished16, name: "Study Room Bookwall", specs: "Floor-to-ceiling Books, Rolling Ladder, Library Feel" },
    { image: furnished17, name: "Gaming Study Setup", specs: "Gaming Chair, RGB Lighting, Entertainment Corner" },
    { image: furnished18, name: "Study Room Lounge", specs: "Comfortable Seating, Coffee Table, Relaxed Learning" },
    { image: furnished19, name: "Zen Study Space", specs: "Meditation Corner, Natural Elements, Peaceful Ambiance" }
  ];

  const totalPages = Math.ceil(studyRoomInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = studyRoomInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Study Room Interior - ${productName}`,
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
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Study Room Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Productive <span className="text-primary">Study Room Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Design the perfect learning environment with our study room interiors featuring ergonomic furniture, smart storage, and inspiring workspaces.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Study Room Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ergonomic designs, smart storage solutions, and inspiring environments to enhance learning and productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ergonomic Design</h3>
                <p className="text-muted-foreground">
                  Comfortable furniture and layouts promoting healthy study posture
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Storage</h3>
                <p className="text-muted-foreground">
                  Organized solutions for books, supplies, and study materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inspiring Environment</h3>
                <p className="text-muted-foreground">
                  Motivating spaces designed to enhance focus and creativity
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

export default StudyRoomInteriorPage;