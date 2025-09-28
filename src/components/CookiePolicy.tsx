import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface CookiePolicyProps {
  onClose: () => void;
}

const CookiePolicy = ({ onClose }: CookiePolicyProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <Card className="w-full max-w-4xl mx-4 max-h-[90vh]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Cookie Policy</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6 text-sm">
              <section>
                <h3 className="text-lg font-semibold mb-3">What Are Cookies?</h3>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience and allow our website to function properly.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually set in response to actions made by you such as setting privacy preferences, 
                      logging in, or filling in forms.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Performance Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously. This helps us improve our website's performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Functional Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies enable the website to provide enhanced functionality and personalization. 
                      They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Targeting Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies may be set through our site by our advertising partners to build a profile 
                      of your interests and show you relevant adverts on other sites.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">How We Use Cookies</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>We use cookies to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve your browsing experience</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Enable social media features</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Third-Party Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  We may also use third-party services that set cookies on our website:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  <li>Google Analytics - for website analytics</li>
                  <li>Google Maps - for location services</li>
                  <li>Social media platforms - for social sharing features</li>
                  <li>Payment processors - for secure transactions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Managing Cookies</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>You can control and/or delete cookies as you wish. You can:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Delete all cookies that are already on your device</li>
                    <li>Set your browser to prevent cookies from being placed</li>
                    <li>Accept or reject cookies from specific websites</li>
                  </ul>
                  <p className="mt-3">
                    Please note that if you choose to disable cookies, some features of our website may not function properly.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                <p className="text-muted-foreground mb-3">
                  You can manage cookies through your browser settings:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                  <p><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
                  <p><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</p>
                  <p><strong>Edge:</strong> Settings → Cookies and site permissions</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="text-muted-foreground mt-2">
                  <p>Email: info@doorskitch.com</p>
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

export default CookiePolicy;