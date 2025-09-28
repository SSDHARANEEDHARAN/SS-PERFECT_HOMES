import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService = ({ onClose }: TermsOfServiceProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <Card className="w-full max-w-4xl mx-4 max-h-[90vh]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Terms of Service</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6 text-sm">
              <section>
                <h3 className="text-lg font-semibold mb-3">Service Agreement</h3>
                <p className="text-muted-foreground">
                  By engaging Perfect Home's - Interiors & Solutions, you agree to these terms and conditions. 
                  Our services include interior design, premium doors, smart kitchens, AI automation, and smart home integration.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Payment Schedule:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>30% advance payment upon project confirmation</li>
                    <li>40% payment during mid-project milestone</li>
                    <li>30% final payment upon project completion</li>
                  </ul>
                  <p className="mt-3"><strong>Accepted Payment Methods:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Bank Transfer (NEFT/RTGS)</li>
                    <li>UPI Payments</li>
                    <li>Cheque payments</li>
                    <li>Online payment gateway</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Delivery Terms</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Project Timeline:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Interior Design Projects: 4-8 weeks depending on scope</li>
                    <li>Premium Door Installation: 2-3 weeks</li>
                    <li>Smart Kitchen Setup: 3-6 weeks</li>
                    <li>Smart Home Integration: 2-4 weeks</li>
                  </ul>
                  <p className="mt-3">
                    Delivery timelines may vary based on product availability, site conditions, and project complexity.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Returns & Warranty</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Warranty Coverage:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Premium Doors: 2 years warranty on hardware</li>
                    <li>Smart Kitchen Appliances: As per manufacturer warranty</li>
                    <li>Interior Work: 1 year warranty on workmanship</li>
                    <li>Smart Home Systems: 1 year on installation, manufacturer warranty on devices</li>
                  </ul>
                  <p className="mt-3"><strong>Return Policy:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Custom-made products cannot be returned unless defective</li>
                    <li>Standard products can be returned within 7 days if unused</li>
                    <li>Installation services are non-refundable after completion</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Cancellation Policy</h3>
                <div className="text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Cancellation before work begins: 90% refund of advance payment</li>
                    <li>Cancellation after 25% work completion: 50% refund of remaining amount</li>
                    <li>Cancellation after 50% work completion: No refund</li>
                    <li>Custom orders cannot be cancelled once manufacturing begins</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  Perfect Home's liability is limited to the cost of services provided. We are not responsible for 
                  indirect damages, loss of business, or consequential damages beyond our control.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="text-muted-foreground">
                  <p>For any questions regarding these terms:</p>
                  <p className="mt-2">Email: projects@doorskitch.com</p>
                  <p>Phone: +91 9944864216</p>
                  <p>Address: Namakkal, Main City</p>
                </div>
              </section>

              <div className="text-xs text-muted-foreground pt-4 border-t">
                Last Updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;