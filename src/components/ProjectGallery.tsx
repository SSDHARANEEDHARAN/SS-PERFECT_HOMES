import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectItem {
  id: string;
  title: string;
  image: string;
  description: string;
  dimensions: string;
  leadTime: string;
}

interface ProjectGalleryProps {
  projectType: string;
  onClose: () => void;
}

const ProjectGallery = ({ projectType, onClose }: ProjectGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const itemsPerPage = 6;

  // Sample data - in real app this would come from API
  const generateItems = (type: string): ProjectItem[] => {
    const items: ProjectItem[] = [];
    for (let i = 1; i <= 30; i++) {
      items.push({
        id: `${type}-${i}`,
        title: `${type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Item ${i}`,
        image: `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop`,
        description: `Professional ${type.replace('-', ' ')} solution with premium quality materials and expert craftsmanship.`,
        dimensions: "Custom sizing available - Standard: 24\" x 36\" x 2\"",
        leadTime: `${Math.floor(Math.random() * 14) + 7} days`
      });
    }
    return items;
  };

  const items = generateItems(projectType);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getProjectContent = () => {
    switch (projectType) {
      case 'wood-work':
        return {
          title: 'Wood Work Projects',
          subtitle: 'Custom wooden furniture and installations',
        };
      case 'furnished-work':
        return {
          title: 'Furnished Work',
          subtitle: 'Complete interior furnishing solutions',
        };
      case 'welding-works':
        return {
          title: 'Welding Works',
          subtitle: 'Professional metal fabrication and welding',
        };
      case 'craft-works':
        return {
          title: 'Craft Works',
          subtitle: 'Artistic and decorative craftsmanship',
        };
      case 'automation-works':
        return {
          title: 'Automation Works',
          subtitle: 'AI-powered automation solutions',
          subcategories: ['Remote AI Automation', 'Process Automation', 'Project Management']
        };
      default:
        return { title: 'Projects', subtitle: 'Our portfolio' };
    }
  };

  const content = getProjectContent();

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{content.title}</h1>
            <p className="text-muted-foreground mt-2">{content.subtitle}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Automation subcategories */}
        {projectType === 'automation-works' && content.subcategories && (
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.subcategories.map((sub) => (
              <div key={sub} className="p-4 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">{sub}</h3>
                <p className="text-sm text-muted-foreground">Advanced {sub.toLowerCase()} solutions</p>
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download Catalog
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-video bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 overflow-hidden">
                  {item.description}
                </p>
                <div className="text-center">
                  <Button size="sm" variant="cta">Get Quote</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static content section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Our {content.title}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">We use only premium materials and follow strict quality control processes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">Our skilled artisans bring years of experience to every project.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="cta" size="lg">Get Custom Quote</Button>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{selectedItem.title}</h2>
                <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Dimensions:</span>
                    <span className="text-sm text-muted-foreground">{selectedItem.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Lead Time:</span>
                    <span className="text-sm text-muted-foreground">{selectedItem.leadTime}</span>
                  </div>
                </div>
                
                <Button variant="cta" className="w-full">Get Quote for This Item</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;