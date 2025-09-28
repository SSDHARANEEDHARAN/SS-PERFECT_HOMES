import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";

// Import wood work images
import woodWork1 from "@/assets/wood-work-1.jpg";
import woodWork2 from "@/assets/wood-work-2.jpg";
import woodWork3 from "@/assets/wood-work-3.jpg";
import woodWork4 from "@/assets/wood-work-4.jpg";
import woodWork5 from "@/assets/wood-work-5.jpg";
import woodWork6 from "@/assets/wood-work-6.jpg";
import woodWork7 from "@/assets/wood-work-7.jpg";
import woodWork8 from "@/assets/wood-work-8.jpg";
import woodWork9 from "@/assets/wood-work-9.jpg";
import woodWork10 from "@/assets/wood-work-10.jpg";
import woodWork11 from "@/assets/wood-work-11.jpg";
import woodWork12 from "@/assets/wood-work-12.jpg";
import woodWork13 from "@/assets/wood-work-13.jpg";
import woodWork14 from "@/assets/wood-work-14.jpg";
import woodWork15 from "@/assets/wood-work-15.jpg";
import woodWork16 from "@/assets/wood-work-16.jpg";
import woodWork17 from "@/assets/wood-work-17.jpg";
import woodWork18 from "@/assets/wood-work-18.jpg";
import woodWork19 from "@/assets/wood-work-19.jpg";
import woodWork20 from "@/assets/wood-work-20.jpg";

interface WoodWorkItem {
  id: string;
  title: string;
  image: string;
  woodType: string;
  dimensions: string;
  overallSize: string;
  description: string;
}

const WoodWorkPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<WoodWorkItem | null>(null);
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

  const woodWorkItems: WoodWorkItem[] = [
    {
      id: "ww-001",
      title: "Premium Dining Table",
      image: woodWork1,
      woodType: "Solid Oak Wood",
      dimensions: "72\" x 36\" x 30\"",
      overallSize: "6' x 3' x 2.5'",
      description: "Handcrafted dining table with natural wood grain, perfect for family gatherings."
    },
    {
      id: "ww-002",
      title: "Modern Kitchen Cabinets",
      image: woodWork2,
      woodType: "Oak Wood with Hardware",
      dimensions: "96\" x 24\" x 36\"",
      overallSize: "8' x 2' x 3'",
      description: "Elegant kitchen cabinets with modern hardware and beautiful grain pattern."
    },
    {
      id: "ww-003",
      title: "Custom Wardrobe",
      image: woodWork3,
      woodType: "Teak Wood Finish",
      dimensions: "84\" x 24\" x 72\"",
      overallSize: "7' x 2' x 6'",
      description: "Sliding door wardrobe with premium teak wood finish and modern design."
    },
    {
      id: "ww-004",
      title: "Mahogany Bookshelf",
      image: woodWork4,
      woodType: "Mahogany Wood",
      dimensions: "72\" x 12\" x 84\"",
      overallSize: "6' x 1' x 7'",
      description: "Handcrafted bookshelf with multiple compartments and expert woodworking."
    },
    {
      id: "ww-005",
      title: "Cherry Wood Bed Frame",
      image: woodWork5,
      woodType: "Cherry Wood",
      dimensions: "84\" x 60\" x 48\"",
      overallSize: "7' x 5' x 4'",
      description: "Beautiful bed frame with cherry wood headboard and smooth finish."
    },
    {
      id: "ww-006",
      title: "Executive Office Desk",
      image: woodWork6,
      woodType: "Walnut Wood",
      dimensions: "60\" x 30\" x 30\"",
      overallSize: "5' x 2.5' x 2.5'",
      description: "Professional office desk with drawers and precision carpentry work."
    },
    {
      id: "ww-007",
      title: "Oak Wood Staircase",
      image: woodWork7,
      woodType: "Oak Wood with Railing",
      dimensions: "120\" x 36\" x 108\"",
      overallSize: "10' x 3' x 9'",
      description: "Custom wooden stairs with oak railing and detailed joinery work."
    },
    {
      id: "ww-008",
      title: "Pine TV Entertainment Unit",
      image: woodWork8,
      woodType: "Pine Wood",
      dimensions: "72\" x 18\" x 24\"",
      overallSize: "6' x 1.5' x 2'",
      description: "Modern TV unit with cable management and expert woodworking."
    },
    {
      id: "ww-009",
      title: "Cedar Coffee Table",
      image: woodWork9,
      woodType: "Cedar Wood",
      dimensions: "48\" x 24\" x 18\"",
      overallSize: "4' x 2' x 1.5'",
      description: "Handmade coffee table with smooth finish and professional carpentry."
    },
    {
      id: "ww-010",
      title: "Maple Kitchen Island",
      image: woodWork10,
      woodType: "Maple Wood",
      dimensions: "84\" x 36\" x 36\"",
      overallSize: "7' x 3' x 3'",
      description: "Kitchen island with maple wood countertop and storage compartments."
    },
    {
      id: "ww-011",
      title: "Teak Window Frames",
      image: woodWork11,
      woodType: "Teak Wood",
      dimensions: "48\" x 36\" x 6\"",
      overallSize: "4' x 3' x 0.5'",
      description: "Custom window frames with weather-resistant teak wood finish."
    },
    {
      id: "ww-012",
      title: "Birch Study Table",
      image: woodWork12,
      woodType: "Birch Wood",
      dimensions: "48\" x 24\" x 30\"",
      overallSize: "4' x 2' x 2.5'",
      description: "Study table with drawer and clean finish for workspace."
    },
    {
      id: "ww-013",
      title: "Rosewood Entrance Door",
      image: woodWork13,
      woodType: "Rosewood",
      dimensions: "36\" x 84\" x 2\"",
      overallSize: "3' x 7' x 2\"",
      description: "Handcrafted door with carved details and expert carpentry work."
    },
    {
      id: "ww-014",
      title: "Bamboo Shoe Rack",
      image: woodWork14,
      woodType: "Bamboo Wood",
      dimensions: "36\" x 12\" x 48\"",
      overallSize: "3' x 1' x 4'",
      description: "Sustainable bamboo shoe rack with multiple tiers for organization."
    },
    {
      id: "ww-015",
      title: "Oak Ceiling Beams",
      image: woodWork15,
      woodType: "Oak Wood",
      dimensions: "144\" x 8\" x 8\"",
      overallSize: "12' x 8\" x 8\"",
      description: "Custom ceiling with exposed oak beams and precision carpentry."
    },
    {
      id: "ww-016",
      title: "Ash Wood Storage Bench",
      image: woodWork16,
      woodType: "Ash Wood",
      dimensions: "48\" x 16\" x 18\"",
      overallSize: "4' x 1.3' x 1.5'",
      description: "Storage bench with cushion and hidden storage compartment."
    },
    {
      id: "ww-017",
      title: "Pine Kitchen Pantry",
      image: woodWork17,
      woodType: "Pine Wood",
      dimensions: "36\" x 24\" x 84\"",
      overallSize: "3' x 2' x 7'",
      description: "Kitchen pantry with organized shelving and expert carpentry."
    },
    {
      id: "ww-018",
      title: "Cedar Patio Deck",
      image: woodWork18,
      woodType: "Cedar Planks",
      dimensions: "192\" x 144\" x 2\"",
      overallSize: "16' x 12' x 2\"",
      description: "Outdoor deck with weatherproof cedar planks and professional construction."
    },
    {
      id: "ww-019",
      title: "Mahogany Bathroom Vanity",
      image: woodWork19,
      woodType: "Mahogany Wood",
      dimensions: "60\" x 22\" x 32\"",
      overallSize: "5' x 1.8' x 2.7'",
      description: "Custom vanity with mirror frame and precision woodworking."
    },
    {
      id: "ww-020",
      title: "Walnut Wall Paneling",
      image: woodWork20,
      woodType: "Walnut Wood",
      dimensions: "96\" x 8\" x 1\"",
      overallSize: "8' x 8\" x 1\"",
      description: "Accent wall design with walnut wood strips and expert installation."
    }
  ];

  const totalPages = Math.ceil(woodWorkItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = woodWorkItems.slice(startIndex, startIndex + itemsPerPage);

  const handleGetQuote = (item: WoodWorkItem) => {
    setSelectedItem(item);
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
                <h1 className="text-3xl font-bold text-foreground">Wood Works</h1>
                <p className="text-muted-foreground">Custom carpentry and wooden furniture crafting</p>
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
                  <p><span className="font-medium">Wood Type:</span> {item.woodType}</p>
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
          description={`${selectedItem.woodType} • ${selectedItem.dimensions}`}
          onClose={() => {
            setShowQuoteForm(false);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
};

export default WoodWorkPage;