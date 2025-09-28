import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Puja Door Images - Using craft work and wood work images
import pujaImage1 from "@/assets/craft-work-1.jpg";
import pujaImage2 from "@/assets/craft-work-2.jpg";
import pujaImage3 from "@/assets/craft-work-3.jpg";
import pujaImage4 from "@/assets/craft-work-4.jpg";
import pujaImage5 from "@/assets/craft-work-5.jpg";
import pujaImage6 from "@/assets/craft-work-6.jpg";
import pujaImage7 from "@/assets/craft-work-7.jpg";
import pujaImage8 from "@/assets/craft-work-8.jpg";
import pujaImage9 from "@/assets/craft-work-9.jpg";
import pujaImage10 from "@/assets/craft-work-10.jpg";
import pujaImage11 from "@/assets/craft-work-11.jpg";
import pujaImage12 from "@/assets/craft-work-12.jpg";
import pujaImage13 from "@/assets/craft-work-13.jpg";
import pujaImage14 from "@/assets/craft-work-14.jpg";
import pujaImage15 from "@/assets/craft-work-15.jpg";
import pujaImage16 from "@/assets/craft-work-16.jpg";
import pujaImage17 from "@/assets/craft-work-17.jpg";
import pujaImage18 from "@/assets/craft-work-18.jpg";
import pujaImage19 from "@/assets/craft-work-19.jpg";
import pujaImage20 from "@/assets/craft-work-20.jpg";
import pujaImage21 from "@/assets/wood-work-1.jpg";
import pujaImage22 from "@/assets/wood-work-2.jpg";
import pujaImage23 from "@/assets/wood-work-3.jpg";
import pujaImage24 from "@/assets/wood-work-4.jpg";
import pujaImage25 from "@/assets/wood-work-5.jpg";
import pujaImage26 from "@/assets/wood-work-6.jpg";
import pujaImage27 from "@/assets/wood-work-7.jpg";
import pujaImage28 from "@/assets/wood-work-8.jpg";
import pujaImage29 from "@/assets/wood-work-9.jpg";
import pujaImage30 from "@/assets/wood-work-10.jpg";
import pujaImage31 from "@/assets/wood-work-11.jpg";
import pujaImage32 from "@/assets/wood-work-12.jpg";
import pujaImage33 from "@/assets/wood-work-13.jpg";
import pujaImage34 from "@/assets/wood-work-14.jpg";
import pujaImage35 from "@/assets/wood-work-15.jpg";
import pujaImage36 from "@/assets/wood-work-16.jpg";
import pujaImage37 from "@/assets/wood-work-17.jpg";
import pujaImage38 from "@/assets/wood-work-18.jpg";
import pujaImage39 from "@/assets/wood-work-19.jpg";
import pujaImage40 from "@/assets/wood-work-20.jpg";
import pujaImage41 from "@/assets/furnished-work-1.jpg";
import pujaImage42 from "@/assets/furnished-work-2.jpg";
import pujaImage43 from "@/assets/furnished-work-3.jpg";
import pujaImage44 from "@/assets/furnished-work-4.jpg";
import pujaImage45 from "@/assets/furnished-work-5.jpg";
import pujaImage46 from "@/assets/furnished-work-6.jpg";
import pujaImage47 from "@/assets/furnished-work-7.jpg";
import pujaImage48 from "@/assets/furnished-work-8.jpg";
import pujaImage49 from "@/assets/furnished-work-9.jpg";
import pujaImage50 from "@/assets/furnished-work-10.jpg";

const PujaDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const pujaDoors = [
    { image: pujaImage1, name: "Sacred Teak Puja Door", specs: "Teak Wood, 6x3 ft, Traditional Carving" },
    { image: pujaImage2, name: "Divine Rosewood Door", specs: "Rosewood, 6.5x3 ft, Hand Carved" },
    { image: pujaImage3, name: "Temple Style Oak Door", specs: "Oak Wood, 6x3 ft, Religious Motifs" },
    { image: pujaImage4, name: "Classic Puja Entry", specs: "Sheesham Wood, 6.5x3 ft, Sacred Designs" },
    { image: pujaImage5, name: "Spiritual Mahogany Door", specs: "Mahogany Wood, 6x3 ft, Divine Carvings" },
    { image: pujaImage6, name: "Holy Cedar Puja Door", specs: "Cedar Wood, 6.5x3 ft, Traditional Polish" },
    { image: pujaImage7, name: "Sacred Walnut Entry", specs: "Walnut Wood, 6x3 ft, Spiritual Engravings" },
    { image: pujaImage8, name: "Divine Pine Puja Door", specs: "Pine Wood, 6.5x3 ft, Temple Design" },
    { image: pujaImage9, name: "Blessed Birch Door", specs: "Birch Wood, 6x3 ft, Sacred Patterns" },
    { image: pujaImage10, name: "Temple Cherry Door", specs: "Cherry Wood, 6.5x3 ft, Divine Art" },
    { image: pujaImage11, name: "Holy Maple Puja Entry", specs: "Maple Wood, 6x3 ft, Religious Carving" },
    { image: pujaImage12, name: "Sacred Ebony Door", specs: "Ebony Wood, 6.5x3 ft, Spiritual Design" },
    { image: pujaImage13, name: "Divine Mango Wood Door", specs: "Mango Wood, 6x3 ft, Temple Style" },
    { image: pujaImage14, name: "Blessed Teak Panel", specs: "Teak Wood, 6.5x3 ft, Sacred Motifs" },
    { image: pujaImage15, name: "Holy Oak Puja Door", specs: "Oak Wood, 6x3 ft, Divine Carvings" },
    { image: pujaImage16, name: "Temple Rosewood Entry", specs: "Rosewood, 6.5x3 ft, Spiritual Art" },
    { image: pujaImage17, name: "Sacred Sheesham Door", specs: "Sheesham Wood, 6x3 ft, Religious Design" },
    { image: pujaImage18, name: "Divine Mahogany Panel", specs: "Mahogany Wood, 6.5x3 ft, Temple Carving" },
    { image: pujaImage19, name: "Blessed Cedar Entry", specs: "Cedar Wood, 6x3 ft, Sacred Polish" },
    { image: pujaImage20, name: "Holy Walnut Puja Door", specs: "Walnut Wood, 6.5x3 ft, Divine Engravings" },
    { image: pujaImage21, name: "Sacred Pine Temple Door", specs: "Pine Wood, 6x3 ft, Spiritual Motifs" },
    { image: pujaImage22, name: "Divine Birch Puja Entry", specs: "Birch Wood, 6.5x3 ft, Religious Art" },
    { image: pujaImage23, name: "Temple Cherry Panel", specs: "Cherry Wood, 6x3 ft, Sacred Design" },
    { image: pujaImage24, name: "Blessed Maple Door", specs: "Maple Wood, 6.5x3 ft, Divine Carvings" },
    { image: pujaImage25, name: "Holy Ebony Puja Door", specs: "Ebony Wood, 6x3 ft, Spiritual Polish" },
    { image: pujaImage26, name: "Sacred Mango Entry", specs: "Mango Wood, 6.5x3 ft, Temple Engravings" },
    { image: pujaImage27, name: "Divine Teak Temple Door", specs: "Teak Wood, 6x3 ft, Religious Motifs" },
    { image: pujaImage28, name: "Blessed Oak Puja Panel", specs: "Oak Wood, 6.5x3 ft, Sacred Art" },
    { image: pujaImage29, name: "Holy Rosewood Door", specs: "Rosewood, 6x3 ft, Divine Design" },
    { image: pujaImage30, name: "Sacred Sheesham Entry", specs: "Sheesham Wood, 6.5x3 ft, Spiritual Carvings" },
    { image: pujaImage31, name: "Temple Mahogany Door", specs: "Mahogany Wood, 6x3 ft, Religious Polish" },
    { image: pujaImage32, name: "Divine Cedar Puja Entry", specs: "Cedar Wood, 6.5x3 ft, Sacred Engravings" },
    { image: pujaImage33, name: "Blessed Walnut Door", specs: "Walnut Wood, 6x3 ft, Temple Motifs" },
    { image: pujaImage34, name: "Holy Pine Puja Panel", specs: "Pine Wood, 6.5x3 ft, Spiritual Art" },
    { image: pujaImage35, name: "Sacred Birch Temple Door", specs: "Birch Wood, 6x3 ft, Divine Design" },
    { image: pujaImage36, name: "Divine Cherry Entry", specs: "Cherry Wood, 6.5x3 ft, Religious Carvings" },
    { image: pujaImage37, name: "Blessed Maple Puja Door", specs: "Maple Wood, 6x3 ft, Sacred Polish" },
    { image: pujaImage38, name: "Holy Ebony Temple Panel", specs: "Ebony Wood, 6.5x3 ft, Spiritual Engravings" },
    { image: pujaImage39, name: "Sacred Mango Puja Door", specs: "Mango Wood, 6x3 ft, Temple Motifs" },
    { image: pujaImage40, name: "Divine Teak Entry", specs: "Teak Wood, 6.5x3 ft, Religious Art" },
    { image: pujaImage41, name: "Blessed Oak Temple Door", specs: "Oak Wood, 6x3 ft, Sacred Design" },
    { image: pujaImage42, name: "Holy Rosewood Puja Panel", specs: "Rosewood, 6.5x3 ft, Divine Carvings" },
    { image: pujaImage43, name: "Sacred Sheesham Door", specs: "Sheesham Wood, 6x3 ft, Spiritual Polish" },
    { image: pujaImage44, name: "Temple Mahogany Entry", specs: "Mahogany Wood, 6.5x3 ft, Religious Engravings" },
    { image: pujaImage45, name: "Divine Cedar Puja Door", specs: "Cedar Wood, 6x3 ft, Temple Motifs" },
    { image: pujaImage46, name: "Blessed Walnut Panel", specs: "Walnut Wood, 6.5x3 ft, Sacred Art" },
    { image: pujaImage47, name: "Holy Pine Temple Door", specs: "Pine Wood, 6x3 ft, Spiritual Design" },
    { image: pujaImage48, name: "Sacred Birch Puja Entry", specs: "Birch Wood, 6.5x3 ft, Divine Carvings" },
    { image: pujaImage49, name: "Divine Cherry Door", specs: "Cherry Wood, 6x3 ft, Religious Polish" },
    { image: pujaImage50, name: "Blessed Maple Temple Panel", specs: "Maple Wood, 6.5x3 ft, Sacred Engravings" },
  ];

  const totalPages = Math.ceil(pujaDoors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoors = pujaDoors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Puja Door - ${productName}`,
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
                <Home className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Puja Doors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sacred <span className="text-primary">Puja Door Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of handcrafted puja doors featuring sacred designs and spiritual motifs.
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

export default PujaDoorsPage;