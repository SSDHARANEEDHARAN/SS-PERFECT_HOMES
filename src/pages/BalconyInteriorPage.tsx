import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Balcony Interior Images
import patio1 from "@/assets/bg-patio-1.jpg";
import sunroom1 from "@/assets/bg-sunroom-1.jpg";
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
import furnished20 from "@/assets/furnished-work-20.jpg";

const BalconyInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const balconyInteriors = [
    { image: patio1, name: "Outdoor Patio Setup", specs: "Weather-resistant Furniture, Dining Area, Umbrella Shade" },
    { image: sunroom1, name: "Glass Enclosed Sunroom", specs: "Natural Light, Plant-friendly Space, Comfortable Seating" },
    { image: furnished1, name: "Compact Balcony Design", specs: "Space-saving Furniture, Vertical Garden, Cozy Seating" },
    { image: furnished2, name: "Modern Balcony Lounge", specs: "Contemporary Furniture, Weather Protection, Style Focus" },
    { image: furnished3, name: "Garden Balcony Theme", specs: "Plant Arrangements, Green Elements, Natural Materials" },
    { image: furnished4, name: "Breakfast Balcony Setup", specs: "Dining Table, Morning Sun, Fresh Air Dining" },
    { image: furnished5, name: "Reading Corner Balcony", specs: "Comfortable Chair, Book Storage, Quiet Retreat" },
    { image: furnished6, name: "Entertainment Balcony", specs: "Bar Setup, Party Lights, Social Space Design" },
    { image: furnished7, name: "Meditation Balcony Space", specs: "Zen Elements, Peaceful Setup, Mindfulness Corner" },
    { image: furnished8, name: "Herb Garden Balcony", specs: "Kitchen Herbs, Planters, Cooking Connection" },
    { image: furnished9, name: "Workout Balcony Area", specs: "Exercise Equipment, Yoga Space, Fitness Corner" },
    { image: furnished10, name: "Pet-friendly Balcony", specs: "Pet Furniture, Safety Features, Animal Comfort" },
    { image: furnished11, name: "Romantic Balcony Setting", specs: "Intimate Seating, Soft Lighting, Couple's Retreat" },
    { image: furnished12, name: "Kids Play Balcony", specs: "Safe Play Area, Colorful Furniture, Child-friendly Design" },
    { image: furnished13, name: "Bohemian Balcony Style", specs: "Eclectic Decor, Rich Textures, Artistic Elements" },
    { image: furnished14, name: "Minimalist Balcony Design", specs: "Clean Lines, Simple Furniture, Uncluttered Space" },
    { image: furnished15, name: "Tropical Balcony Theme", specs: "Exotic Plants, Bright Colors, Vacation Vibes" },
    { image: furnished16, name: "Winter Balcony Setup", specs: "Weather Protection, Heating Elements, Season Comfort" },
    { image: furnished17, name: "Urban Balcony Style", specs: "City Views, Modern Furniture, Metropolitan Feel" },
    { image: furnished18, name: "Vintage Balcony Decor", specs: "Antique Furniture, Classic Elements, Nostalgic Design" },
    { image: furnished19, name: "Tech-enabled Balcony", specs: "Smart Features, Automated Systems, Modern Convenience" },
    { image: furnished20, name: "Luxury Balcony Suite", specs: "Premium Furniture, High-end Finishes, Resort Feel" }
  ];

  const totalPages = Math.ceil(balconyInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = balconyInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Balcony Interior - ${productName}`,
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
                <TreePine className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Balcony Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Beautiful <span className="text-primary">Balcony Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform your outdoor spaces with our balcony interior designs featuring weather-resistant furniture, garden elements, and relaxation areas.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Balcony Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Weather-resistant materials, space optimization, and creative designs to maximize your outdoor living experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weather Resistant</h3>
                <p className="text-muted-foreground">
                  Durable furniture and materials designed to withstand outdoor conditions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Space Optimization</h3>
                <p className="text-muted-foreground">
                  Smart layouts and multi-functional furniture for maximum space utilization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Outdoor Living</h3>
                <p className="text-muted-foreground">
                  Creating seamless indoor-outdoor connections for enhanced lifestyle
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

export default BalconyInteriorPage;