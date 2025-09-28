import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";

// Import craft work images
import craftWork1 from "@/assets/craft-work-1.jpg";
import craftWork2 from "@/assets/craft-work-2.jpg";
import craftWork3 from "@/assets/craft-work-3.jpg";
import craftWork4 from "@/assets/craft-work-4.jpg";
import craftWork5 from "@/assets/craft-work-5.jpg";
import craftWork6 from "@/assets/craft-work-6.jpg";
import craftWork7 from "@/assets/craft-work-7.jpg";
import craftWork8 from "@/assets/craft-work-8.jpg";
import craftWork9 from "@/assets/craft-work-9.jpg";
import craftWork10 from "@/assets/craft-work-10.jpg";
import craftWork11 from "@/assets/craft-work-11.jpg";
import craftWork12 from "@/assets/craft-work-12.jpg";
import craftWork13 from "@/assets/craft-work-13.jpg";
import craftWork14 from "@/assets/craft-work-14.jpg";
import craftWork15 from "@/assets/craft-work-15.jpg";
import craftWork16 from "@/assets/craft-work-16.jpg";
import craftWork17 from "@/assets/craft-work-17.jpg";
import craftWork18 from "@/assets/craft-work-18.jpg";
import craftWork19 from "@/assets/craft-work-19.jpg";
import craftWork20 from "@/assets/craft-work-20.jpg";

interface CraftWorkItem {
  id: string;
  title: string;
  image: string;
  material: string;
  dimensions: string;
  overallSize: string;
  description: string;
}

const CraftWorksPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setCraftWorkItem] = useState<CraftWorkItem | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showWorkerEnquiry, setShowWorkerEnquiry] = useState(false);
  const itemsPerPage = 8;

  const handleProjectSelect = (project: string) => {
    // Handle project selection if needed
  };

  const handleWorkerEnquiry = () => {
    setShowWorkerEnquiry(true);
  };

  const handleCloseWorkerEnquiry = () => {
    setShowWorkerEnquiry(false);
  };

  const craftWorkItems: CraftWorkItem[] = [
    {
      id: "crf-001",
      title: "Handcrafted Wooden Bowl",
      image: craftWork1,
      material: "Single Piece Wood Carving",
      dimensions: "12\" x 12\" x 4\"",
      overallSize: "1' x 1' x 4\"",
      description: "Artisan carved decorative bowl with traditional woodcarving craftsmanship."
    },
    {
      id: "crf-002",
      title: "Metal Art Sculpture",
      image: craftWork2,
      material: "Artistic Metalwork",
      dimensions: "24\" x 18\" x 36\"",
      overallSize: "2' x 1.5' x 3'",
      description: "Custom metal sculpture with intricate design and artistic welding."
    },
    {
      id: "crf-003",
      title: "Handwoven Wall Hanging",
      image: craftWork3,
      material: "Textile Fiber Art",
      dimensions: "36\" x 48\" x 2\"",
      overallSize: "3' x 4' x 2\"",
      description: "Colorful textile art with traditional weaving techniques and patterns."
    },
    {
      id: "crf-004",
      title: "Ceramic Art Vase",
      image: craftWork4,
      material: "Hand-painted Clay",
      dimensions: "8\" x 8\" x 16\"",
      overallSize: "8\" x 8\" x 1.3'",
      description: "Pottery vase with artistic glazing and handmade decorative design."
    },
    {
      id: "crf-005",
      title: "Stained Glass Panel",
      image: craftWork5,
      material: "Colored Glass Craft",
      dimensions: "24\" x 36\" x 1\"",
      overallSize: "2' x 3' x 1'",
      description: "Vibrant stained glass with traditional glasswork artistry."
    },
    {
      id: "crf-006",
      title: "Handcrafted Leather Bag",
      image: craftWork6,
      material: "Premium Leather",
      dimensions: "16\" x 12\" x 6\"",
      overallSize: "1.3' x 1' x 6'",
      description: "Artisan leather goods with detailed stitching and traditional craftsmanship."
    },
    {
      id: "crf-007",
      title: "Mosaic Art Panel",
      image: craftWork7,
      material: "Decorative Tile Mosaic",
      dimensions: "36\" x 24\" x 1\"",
      overallSize: "3' x 2' x 1'",
      description: "Colorful mosaic artwork with artistic tile patterns and installation."
    },
    {
      id: "crf-008",
      title: "Wooden Figurine Sculpture",
      image: craftWork8,
      material: "Hand-carved Wood",
      dimensions: "6\" x 4\" x 12\"",
      overallSize: "6\" x 4\" x 1'",
      description: "Miniature sculpture with intricate carving details and traditional woodwork."
    },
    {
      id: "crf-009",
      title: "Macrame Wall Art",
      image: craftWork9,
      material: "Natural Rope Fiber",
      dimensions: "24\" x 36\" x 4\"",
      overallSize: "2' x 3' x 4'",
      description: "Bohemian macrame with knotting craft art and natural materials."
    },
    {
      id: "crf-010",
      title: "Forged Metal Candle Holders",
      image: craftWork10,
      material: "Hand-forged Metal",
      dimensions: "8\" x 8\" x 12\"",
      overallSize: "8\" x 8\" x 1'",
      description: "Blacksmith craft with decorative patterns and functional art design."
    },
    {
      id: "crf-011",
      title: "Canvas Painting Art",
      image: craftWork11,
      material: "Acrylic on Canvas",
      dimensions: "24\" x 36\" x 2\"",
      overallSize: "2' x 3' x 2'",
      description: "Custom painted artwork with colorful abstract composition and design."
    },
    {
      id: "crf-012",
      title: "Crystal Wire Jewelry",
      image: craftWork12,
      material: "Gemstone with Wire",
      dimensions: "4\" x 2\" x 1\"",
      overallSize: "4\" x 2\" x 1\"",
      description: "Handmade jewelry with crystal healing stones and artistic wire wrapping."
    },
    {
      id: "crf-013",
      title: "Pressed Flower Art",
      image: craftWork13,
      material: "Handmade Paper with Flowers",
      dimensions: "12\" x 16\" x 1\"",
      overallSize: "1' x 1.3' x 1'",
      description: "Botanical paper craft with pressed flowers and decorative framing."
    },
    {
      id: "crf-014",
      title: "Stone Carving Sculpture",
      image: craftWork14,
      material: "Carved Marble Stone",
      dimensions: "18\" x 12\" x 24\"",
      overallSize: "1.5' x 1' x 2'",
      description: "Artistic stone masonry with smooth finish and expert carving work."
    },
    {
      id: "crf-015",
      title: "Embroidered Cushion",
      image: craftWork15,
      material: "Hand Embroidered Fabric",
      dimensions: "16\" x 16\" x 4\"",
      overallSize: "1.3' x 1.3' x 4'",
      description: "Textile craft with intricate needlework and decorative pillow design."
    },
    {
      id: "crf-016",
      title: "Bamboo Wind Chime",
      image: craftWork16,
      material: "Natural Bamboo",
      dimensions: "6\" x 6\" x 24\"",
      overallSize: "6\" x 6\" x 2'",
      description: "Musical garden art with bamboo tubes and decorative hanging elements."
    },
    {
      id: "crf-017",
      title: "Blown Glass Ornaments",
      image: craftWork17,
      material: "Handblown Glass",
      dimensions: "4\" x 4\" x 6\"",
      overallSize: "4\" x 4\" x 6\"",
      description: "Artistic glassware with swirled colors and glass blowing craftsmanship."
    },
    {
      id: "crf-018",
      title: "Quilted Art Blanket",
      image: craftWork18,
      material: "Patchwork Textile",
      dimensions: "60\" x 80\" x 2\"",
      overallSize: "5' x 6.7' x 2'",
      description: "Traditional quilting craft with handmade patchwork design and needlework."
    },
    {
      id: "crf-019",
      title: "Dreamcatcher Art",
      image: craftWork19,
      material: "Feathers and Beads",
      dimensions: "12\" x 12\" x 24\"",
      overallSize: "1' x 1' x 2'",
      description: "Spiritual craft piece with handwoven decoration and Native American inspiration."
    },
    {
      id: "crf-020",
      title: "Glass Terrarium Garden",
      image: craftWork20,
      material: "Glass Container with Plants",
      dimensions: "8\" x 8\" x 12\"",
      overallSize: "8\" x 8\" x 1'",
      description: "Miniature garden art with succulent plants and botanical decor design."
    }
  ];

  const totalPages = Math.ceil(craftWorkItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = craftWorkItems.slice(startIndex, startIndex + itemsPerPage);

  const handleGetQuote = (item: CraftWorkItem) => {
    setCraftWorkItem(item);
    setShowQuoteForm(true);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      {/* Side Navigation */}
      <SideNavigation side="left" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={() => {}} />
      <SideNavigation side="right" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={() => {}} />

      {/* Header */}
      <div className="bg-primary/10 border-b mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Craft Works</h1>
                <p className="text-muted-foreground">Handmade artisan crafts and decorative art pieces</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Catalog</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p><span className="font-medium">Material:</span> {item.material}</p>
                  <p><span className="font-medium">Dimensions:</span> {item.dimensions}</p>
                  <p><span className="font-medium">Overall Size:</span> {item.overallSize}</p>
                </div>
                <p className="text-sm mb-4">{item.description}</p>
                <Button 
                  onClick={() => handleGetQuote(item)}
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Worker Enquiry Form Modal */}
      {showWorkerEnquiry && (
        <WorkerEnquiryForm onClose={handleCloseWorkerEnquiry} />
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && selectedItem && (
        <QuoteForm
          title={`Quote for ${selectedItem.title}`}
          description={`${selectedItem.material} • ${selectedItem.dimensions}`}
          onClose={() => {
            setShowQuoteForm(false);
            setCraftWorkItem(null);
          }}
        />
      )}
    </div>
  );
};

export default CraftWorksPage;