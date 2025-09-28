import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Temple Door Images - Using craft work images primarily
import templeImage1 from "@/assets/craft-work-1.jpg";
import templeImage2 from "@/assets/craft-work-2.jpg";
import templeImage3 from "@/assets/craft-work-3.jpg";
import templeImage4 from "@/assets/craft-work-4.jpg";
import templeImage5 from "@/assets/craft-work-5.jpg";
import templeImage6 from "@/assets/craft-work-6.jpg";
import templeImage7 from "@/assets/craft-work-7.jpg";
import templeImage8 from "@/assets/craft-work-8.jpg";
import templeImage9 from "@/assets/craft-work-9.jpg";
import templeImage10 from "@/assets/craft-work-10.jpg";
import templeImage11 from "@/assets/craft-work-11.jpg";
import templeImage12 from "@/assets/craft-work-12.jpg";
import templeImage13 from "@/assets/craft-work-13.jpg";
import templeImage14 from "@/assets/craft-work-14.jpg";
import templeImage15 from "@/assets/craft-work-15.jpg";
import templeImage16 from "@/assets/craft-work-16.jpg";
import templeImage17 from "@/assets/craft-work-17.jpg";
import templeImage18 from "@/assets/craft-work-18.jpg";
import templeImage19 from "@/assets/craft-work-19.jpg";
import templeImage20 from "@/assets/craft-work-20.jpg";
import templeImage21 from "@/assets/wood-work-1.jpg";
import templeImage22 from "@/assets/wood-work-2.jpg";
import templeImage23 from "@/assets/wood-work-3.jpg";
import templeImage24 from "@/assets/wood-work-4.jpg";
import templeImage25 from "@/assets/wood-work-5.jpg";
import templeImage26 from "@/assets/wood-work-6.jpg";
import templeImage27 from "@/assets/wood-work-7.jpg";
import templeImage28 from "@/assets/wood-work-8.jpg";
import templeImage29 from "@/assets/wood-work-9.jpg";
import templeImage30 from "@/assets/wood-work-10.jpg";
import templeImage31 from "@/assets/wood-work-11.jpg";
import templeImage32 from "@/assets/wood-work-12.jpg";
import templeImage33 from "@/assets/wood-work-13.jpg";
import templeImage34 from "@/assets/wood-work-14.jpg";
import templeImage35 from "@/assets/wood-work-15.jpg";
import templeImage36 from "@/assets/wood-work-16.jpg";
import templeImage37 from "@/assets/wood-work-17.jpg";
import templeImage38 from "@/assets/wood-work-18.jpg";
import templeImage39 from "@/assets/wood-work-19.jpg";
import templeImage40 from "@/assets/wood-work-20.jpg";
import templeImage41 from "@/assets/welding-work-1.jpg";
import templeImage42 from "@/assets/welding-work-2.jpg";
import templeImage43 from "@/assets/welding-work-3.jpg";
import templeImage44 from "@/assets/welding-work-4.jpg";
import templeImage45 from "@/assets/welding-work-5.jpg";
import templeImage46 from "@/assets/welding-work-6.jpg";
import templeImage47 from "@/assets/welding-work-7.jpg";
import templeImage48 from "@/assets/welding-work-8.jpg";
import templeImage49 from "@/assets/welding-work-9.jpg";
import templeImage50 from "@/assets/welding-work-10.jpg";

const TempleDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const templeDoors = [
    { image: templeImage1, name: "Sacred Temple Gate", specs: "Teak Wood, 8x8 ft, Hand Carved Deities" },
    { image: templeImage2, name: "Divine Entrance Door", specs: "Rosewood, 7x7 ft, Gold Leaf Finish" },
    { image: templeImage3, name: "Holy Temple Entry", specs: "Sandalwood, 8x8 ft, Sacred Motifs" },
    { image: templeImage4, name: "Spiritual Gate Door", specs: "Mahogany Wood, 7x7 ft, Religious Carvings" },
    { image: templeImage5, name: "Temple Main Door", specs: "Sheesham Wood, 8x8 ft, Divine Patterns" },
    { image: templeImage6, name: "Sacred Wooden Gate", specs: "Oak Wood, 7x7 ft, Temple Architecture" },
    { image: templeImage7, name: "Divine Entry System", specs: "Cedar Wood, 8x8 ft, Spiritual Engravings" },
    { image: templeImage8, name: "Holy Temple Door", specs: "Walnut Wood, 7x7 ft, Sacred Symbols" },
    { image: templeImage9, name: "Temple Entrance Gate", specs: "Pine Wood, 8x8 ft, Religious Art" },
    { image: templeImage10, name: "Sacred Door Panel", specs: "Birch Wood, 7x7 ft, Divine Carvings" },
    { image: templeImage11, name: "Temple Gateway Door", specs: "Cherry Wood, 8x8 ft, Spiritual Design" },
    { image: templeImage12, name: "Divine Wooden Entry", specs: "Maple Wood, 7x7 ft, Temple Style" },
    { image: templeImage13, name: "Holy Gate System", specs: "Ebony Wood, 8x8 ft, Sacred Motifs" },
    { image: templeImage14, name: "Temple Main Gateway", specs: "Mango Wood, 7x7 ft, Religious Patterns" },
    { image: templeImage15, name: "Sacred Entry Door", specs: "Teak Wood, 8x8 ft, Divine Engravings" },
    { image: templeImage16, name: "Temple Portal Door", specs: "Rosewood, 7x7 ft, Spiritual Carvings" },
    { image: templeImage17, name: "Divine Temple Gate", specs: "Sandalwood, 8x8 ft, Sacred Art" },
    { image: templeImage18, name: "Holy Entrance System", specs: "Mahogany Wood, 7x7 ft, Temple Motifs" },
    { image: templeImage19, name: "Sacred Gateway Entry", specs: "Sheesham Wood, 8x8 ft, Religious Design" },
    { image: templeImage20, name: "Temple Door Panel", specs: "Oak Wood, 7x7 ft, Divine Patterns" },
    { image: templeImage21, name: "Divine Entry Gate", specs: "Cedar Wood, 8x8 ft, Sacred Symbols" },
    { image: templeImage22, name: "Holy Temple Portal", specs: "Walnut Wood, 7x7 ft, Spiritual Carvings" },
    { image: templeImage23, name: "Sacred Main Door", specs: "Pine Wood, 8x8 ft, Temple Architecture" },
    { image: templeImage24, name: "Temple Entrance Panel", specs: "Birch Wood, 7x7 ft, Religious Art" },
    { image: templeImage25, name: "Divine Gateway System", specs: "Cherry Wood, 8x8 ft, Sacred Motifs" },
    { image: templeImage26, name: "Holy Door Entry", specs: "Maple Wood, 7x7 ft, Divine Engravings" },
    { image: templeImage27, name: "Temple Sacred Gate", specs: "Ebony Wood, 8x8 ft, Spiritual Design" },
    { image: templeImage28, name: "Divine Portal Door", specs: "Mango Wood, 7x7 ft, Temple Patterns" },
    { image: templeImage29, name: "Sacred Entry System", specs: "Teak Wood, 8x8 ft, Religious Carvings" },
    { image: templeImage30, name: "Temple Main Entry", specs: "Rosewood, 7x7 ft, Sacred Art" },
    { image: templeImage31, name: "Holy Gateway Door", specs: "Sandalwood, 8x8 ft, Divine Motifs" },
    { image: templeImage32, name: "Divine Temple Entry", specs: "Mahogany Wood, 7x7 ft, Spiritual Symbols" },
    { image: templeImage33, name: "Sacred Door Gateway", specs: "Sheesham Wood, 8x8 ft, Temple Carvings" },
    { image: templeImage34, name: "Temple Portal System", specs: "Oak Wood, 7x7 ft, Religious Design" },
    { image: templeImage35, name: "Divine Entry Panel", specs: "Cedar Wood, 8x8 ft, Sacred Patterns" },
    { image: templeImage36, name: "Holy Temple System", specs: "Walnut Wood, 7x7 ft, Spiritual Art" },
    { image: templeImage37, name: "Sacred Gate Entry", specs: "Pine Wood, 8x8 ft, Divine Engravings" },
    { image: templeImage38, name: "Temple Door System", specs: "Birch Wood, 7x7 ft, Temple Motifs" },
    { image: templeImage39, name: "Divine Sacred Door", specs: "Cherry Wood, 8x8 ft, Religious Carvings" },
    { image: templeImage40, name: "Holy Portal Entry", specs: "Maple Wood, 7x7 ft, Sacred Design" },
    { image: templeImage41, name: "Temple Gateway Panel", specs: "Ebony Wood, 8x8 ft, Spiritual Patterns" },
    { image: templeImage42, name: "Sacred Entry Portal", specs: "Mango Wood, 7x7 ft, Divine Art" },
    { image: templeImage43, name: "Divine Temple Panel", specs: "Teak Wood, 8x8 ft, Temple Symbols" },
    { image: templeImage44, name: "Holy Gateway System", specs: "Rosewood, 7x7 ft, Sacred Engravings" },
    { image: templeImage45, name: "Sacred Temple System", specs: "Sandalwood, 8x8 ft, Religious Motifs" },
    { image: templeImage46, name: "Divine Door Gateway", specs: "Mahogany Wood, 7x7 ft, Spiritual Carvings" },
    { image: templeImage47, name: "Temple Sacred Entry", specs: "Sheesham Wood, 8x8 ft, Divine Design" },
    { image: templeImage48, name: "Holy Main Gateway", specs: "Oak Wood, 7x7 ft, Temple Patterns" },
    { image: templeImage49, name: "Sacred Portal System", specs: "Cedar Wood, 8x8 ft, Religious Art" },
    { image: templeImage50, name: "Divine Temple Gateway", specs: "Walnut Wood, 7x7 ft, Sacred Symbols" },
  ];

  const totalPages = Math.ceil(templeDoors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoors = templeDoors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Temple Door - ${productName}`,
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
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Temple Doors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sacred <span className="text-primary">Temple Door Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of divine temple doors featuring sacred carvings and spiritual motifs.
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

export default TempleDoorsPage;