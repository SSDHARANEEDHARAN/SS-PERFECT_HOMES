import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <Card className="w-full max-w-4xl mx-4 max-h-[90vh]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6 text-sm">
              <section>
                <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                <p className="text-muted-foreground mb-3">
                  Perfect Home's - Interiors & Solutions collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Request quotes for our services</li>
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with our customer support</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Provide and improve our interior design and home automation services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you project updates and service information</li>
                  <li>Process payments and manage your account</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share your information with trusted service providers who assist 
                  us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="text-muted-foreground mt-2">
                  <p>Email: info@doorskitch.com</p>
                  <p>Phone: +91 9944864216</p>
                  <p>Address: Namakkal, Main City</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Updates to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="text-muted-foreground mt-2 text-xs">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;