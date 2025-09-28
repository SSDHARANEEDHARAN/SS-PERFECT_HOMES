import { useState } from "react";
import { Download, MessageCircle, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SideNavigationProps {
  side: 'left' | 'right';
  onWorkerEnquiry: () => void;
  onWhatsAppEnquiry: () => void;
}

const SideNavigation = ({ side, onWorkerEnquiry, onWhatsAppEnquiry }: SideNavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <>
      {/* Trigger Area */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 ${
          side === 'left' ? 'left-0' : 'right-0'
        } w-4 h-32 bg-primary/20 hover:bg-primary/40 transition-colors z-40 flex items-center justify-center`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`w-1 h-8 bg-primary rounded-full ${isVisible ? 'animate-pulse' : ''}`} />
      </div>

      {/* Side Panel */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 ${
          side === 'left' ? 'left-0' : 'right-0'
        } w-64 bg-background/95 backdrop-blur-sm border ${
          side === 'left' ? 'border-r' : 'border-l'
        } border-border shadow-elegant z-50 transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
            <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${
              side === 'left' ? '' : 'rotate-180'
            }`} />
          </div>

          <div className="space-y-4">
            {/* Catalog Download */}
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <Download className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2">Download Catalog</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get our complete product catalog with specifications and pricing.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Worker Enquiry */}
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2">Worker Enquiry</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Need workers for your project? Fill out our enquiry form.
                  </p>
                  <Button size="sm" variant="cta" className="w-full" onClick={onWorkerEnquiry}>
                    Request Workers
                  </Button>
                </div>
              </div>
            </div>

            {/* WhatsApp Enquiry */}
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2">WhatsApp Enquiry</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get instant support and quotes through WhatsApp chat.
                  </p>
                  <Button size="sm" variant="cta" className="w-full" onClick={onWhatsAppEnquiry}>
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;