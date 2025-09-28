import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";

// Import welding work images
import weldingWork1 from "@/assets/welding-work-1.jpg";
import weldingWork2 from "@/assets/welding-work-2.jpg";
import weldingWork3 from "@/assets/welding-work-3.jpg";
import weldingWork4 from "@/assets/welding-work-4.jpg";
import weldingWork5 from "@/assets/welding-work-5.jpg";
import weldingWork6 from "@/assets/welding-work-6.jpg";
import weldingWork7 from "@/assets/welding-work-7.jpg";
import weldingWork8 from "@/assets/welding-work-8.jpg";
import weldingWork9 from "@/assets/welding-work-9.jpg";
import weldingWork10 from "@/assets/welding-work-10.jpg";
import weldingWork11 from "@/assets/welding-work-11.jpg";
import weldingWork12 from "@/assets/welding-work-12.jpg";
import weldingWork13 from "@/assets/welding-work-13.jpg";
import weldingWork14 from "@/assets/welding-work-14.jpg";
import weldingWork15 from "@/assets/welding-work-15.jpg";
import weldingWork16 from "@/assets/welding-work-16.jpg";
import weldingWork17 from "@/assets/welding-work-17.jpg";
import weldingWork18 from "@/assets/welding-work-18.jpg";
import weldingWork19 from "@/assets/welding-work-19.jpg";
import weldingWork20 from "@/assets/welding-work-20.jpg";

interface WeldingWorkItem {
  id: string;
  title: string;
  image: string;
  material: string;
  dimensions: string;
  overallSize: string;
  description: string;
}

const WeldingWorksPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<WeldingWorkItem | null>(null);
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

  const weldingWorkItems: WeldingWorkItem[] = [
    {
      id: "wel-001",
      title: "Steel Security Gate",
      image: weldingWork1,
      material: "Galvanized Steel",
      dimensions: "84\" x 72\" x 2\"",
      overallSize: "7' x 6' x 2\"",
      description: "Professional steel gate fabrication with industrial-grade welding."
    },
    {
      id: "wel-002",
      title: "Wrought Iron Stair Railing",
      image: weldingWork2,
      material: "Wrought Iron",
      dimensions: "120\" x 36\" x 2\"",
      overallSize: "10' x 3' x 2\"",
      description: "Custom metal staircase railing with elegant curved patterns."
    },
    {
      id: "wel-003",
      title: "Steel Window Grills",
      image: weldingWork3,
      material: "Mild Steel",
      dimensions: "48\" x 36\" x 1\"",
      overallSize: "4' x 3' x 1\"",
      description: "Security window grills with modern geometric pattern design."
    },
    {
      id: "wel-004",
      title: "Industrial Metal Shelving",
      image: weldingWork4,
      material: "Heavy-duty Steel",
      dimensions: "96\" x 24\" x 84\"",
      overallSize: "8' x 2' x 7'",
      description: "Warehouse shelving unit with steel frame and professional welding."
    },
    {
      id: "wel-005",
      title: "Custom Metal Door Frame",
      image: weldingWork5,
      material: "Steel Frame",
      dimensions: "84\" x 36\" x 6\"",
      overallSize: "7' x 3' x 6\"",
      description: "Entrance door frame with steel construction and precise measurements."
    },
    {
      id: "wel-006",
      title: "Steel Balcony Railing",
      image: weldingWork6,
      material: "Decorative Steel",
      dimensions: "120\" x 42\" x 2\"",
      overallSize: "10' x 3.5' x 2\"",
      description: "Balcony railing with decorative ironwork and expert craftsmanship."
    },
    {
      id: "wel-007",
      title: "Metal Workshop Table",
      image: weldingWork7,
      material: "Industrial Steel",
      dimensions: "72\" x 36\" x 34\"",
      overallSize: "6' x 3' x 2.8'",
      description: "Heavy-duty workshop table with steel legs and professional finish."
    },
    {
      id: "wel-008",
      title: "Steel Property Fence",
      image: weldingWork8,
      material: "Galvanized Steel",
      dimensions: "96\" x 72\" x 2\"",
      overallSize: "8' x 6' x 2\"",
      description: "Custom fence with vertical bars and precision welding joints."
    },
    {
      id: "wel-009",
      title: "Metal Canopy Structure",
      image: weldingWork9,
      material: "Structural Steel",
      dimensions: "192\" x 120\" x 120\"",
      overallSize: "16' x 10' x 10'",
      description: "Commercial canopy with steel frame and weather-resistant coating."
    },
    {
      id: "wel-010",
      title: "Steel Storage Cabinet",
      image: weldingWork10,
      material: "Heavy-gauge Steel",
      dimensions: "36\" x 24\" x 72\"",
      overallSize: "3' x 2' x 6'",
      description: "Industrial storage cabinet with locking mechanism and professional welding."
    },
    {
      id: "wel-011",
      title: "Custom Metal Staircase",
      image: weldingWork11,
      material: "Structural Steel",
      dimensions: "120\" x 36\" x 108\"",
      overallSize: "10' x 3' x 9'",
      description: "Modern staircase with steel structure and precision construction."
    },
    {
      id: "wel-012",
      title: "Steel Fire Escape",
      image: weldingWork12,
      material: "Fire-rated Steel",
      dimensions: "96\" x 30\" x 120\"",
      overallSize: "8' x 2.5' x 10'",
      description: "Emergency fire escape ladder with safety railings and compliance standards."
    },
    {
      id: "wel-013",
      title: "Metal Garden Pergola",
      image: weldingWork13,
      material: "Powder-coated Steel",
      dimensions: "144\" x 120\" x 96\"",
      overallSize: "12' x 10' x 8'",
      description: "Garden pergola with steel frame and decorative welding work."
    },
    {
      id: "wel-014",
      title: "Heavy-duty Security Door",
      image: weldingWork14,
      material: "Reinforced Steel",
      dimensions: "84\" x 36\" x 3\"",
      overallSize: "7' x 3' x 3\"",
      description: "Security door with reinforced frame and professional welding."
    },
    {
      id: "wel-015",
      title: "Custom Metal Planters",
      image: weldingWork15,
      material: "Weatherproof Steel",
      dimensions: "36\" x 36\" x 24\"",
      overallSize: "3' x 3' x 2'",
      description: "Modern garden planters with geometric shapes and weatherproof welding."
    },
    {
      id: "wel-016",
      title: "Steel Mezzanine Floor",
      image: weldingWork16,
      material: "Load-bearing Steel",
      dimensions: "240\" x 144\" x 120\"",
      overallSize: "20' x 12' x 10'",
      description: "Warehouse mezzanine with steel support beams and industrial welding."
    },
    {
      id: "wel-017",
      title: "Metal Carport Structure",
      image: weldingWork17,
      material: "Galvanized Steel",
      dimensions: "240\" x 144\" x 96\"",
      overallSize: "20' x 12' x 8'",
      description: "Vehicle carport with steel frame and galvanized coating."
    },
    {
      id: "wel-018",
      title: "Steel Water Tank Stand",
      image: weldingWork18,
      material: "Industrial Steel",
      dimensions: "96\" x 96\" x 120\"",
      overallSize: "8' x 8' x 10'",
      description: "Water tank support structure with heavy-duty welding construction."
    },
    {
      id: "wel-019",
      title: "Custom Metal Signage",
      image: weldingWork19,
      material: "Weather-resistant Steel",
      dimensions: "72\" x 48\" x 6\"",
      overallSize: "6' x 4' x 6\"",
      description: "Commercial signage with steel frame and weather-resistant design."
    },
    {
      id: "wel-020",
      title: "Steel Transport Trolley",
      image: weldingWork20,
      material: "Mobile Steel Frame",
      dimensions: "48\" x 24\" x 36\"",
      overallSize: "4' x 2' x 3'",
      description: "Industrial trolley cart with wheels and heavy-duty construction."
    }
  ];

  const totalPages = Math.ceil(weldingWorkItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = weldingWorkItems.slice(startIndex, startIndex + itemsPerPage);

  const handleGetQuote = (item: WeldingWorkItem) => {
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
                <h1 className="text-3xl font-bold text-foreground">Welding Works</h1>
                <p className="text-muted-foreground">Professional metal fabrication and welding services</p>
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
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
};

export default WeldingWorksPage;