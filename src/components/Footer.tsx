import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import QuoteForm from "./QuoteForm";
import SupportModal from "./SupportModal";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import CookiePolicy from "./CookiePolicy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/perfecthomes", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/perfecthomes_interiors", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/perfecthomes", label: "LinkedIn" }
  ];

  const services = [
    "Premium Doors",
    "Smart Kitchens", 
    "Interior Design",
    "Smart Home Integration",
    "Web Development"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "#", action: "quote" },
    { name: "Support", href: "#", action: "support" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Perfect Home's</h3>
                <p className="text-sm text-muted-foreground">Interiors & Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Transforming spaces with expert craftsmanship and innovative solutions. 
              Your trusted partner for premium doors, modern kitchens, elegant interiors, and smart automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                   <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <IconComponent className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const getServiceLink = (serviceName: string) => {
                  switch (serviceName) {
                    case 'Premium Doors': return '/main-doors';
                    case 'Smart Kitchens': return '/smart-kitchen';
                    case 'Interior Design': return '/interior-design';
                    case 'Smart Home Integration': return '/services/smart-home';
                    case 'Web Development': return '/web-development';
                    default: return '/services';
                  }
                };

                return (
                  <li key={index}>
                    <a 
                      href={getServiceLink(service)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={link.action ? (e) => {
                      e.preventDefault();
                      if (link.action === 'quote') setShowQuoteForm(true);
                      if (link.action === 'support') setShowSupport(true);
                    } : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>+91 9944864216</p>
                  <p>+91 8870086023</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>info@doorskitch.com</p>
                  <p>projects@doorskitch.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Namakkal</p>
                  <p>Main City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Perfect Home's - Interiors & Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setShowCookies(true)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showQuoteForm && (
        <QuoteForm
          title="Get Quote"
          description="Tell us about your project and we'll provide you with a detailed quote."
          onClose={() => setShowQuoteForm(false)}
        />
      )}
      
      {showSupport && (
        <SupportModal onClose={() => setShowSupport(false)} />
      )}
      
      {showPrivacy && (
        <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
      )}
      
      {showTerms && (
        <TermsOfService onClose={() => setShowTerms(false)} />
      )}
      
      {showCookies && (
        <CookiePolicy onClose={() => setShowCookies(false)} />
      )}
    </footer>
  );
};

export default Footer;