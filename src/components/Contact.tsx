import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BrandPartners from "./BrandPartners";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, and Message)."
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Thanks for contacting us!",
        description: "We will shortly contact you as soon. Your details have been shared to our team at tharaneetharanss@gmail.com"
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact us directly."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8870086023", "+91 9944864216"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["tharaneetharanss@gmail.com", "projects@perfecthomes.com"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Perfect Home's Office", "Interiors & Solutions Center"],
      description: "Visit our showroom & office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"],
      description: "We're here when you need us"
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Contact Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Let's discuss your project and bring your vision to life with our expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-sm hover:shadow-glow transition-all duration-500">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      Send Us a Message
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="firstName" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                          First Name *
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-border/50 focus:border-primary/50 bg-background/50 transition-all duration-300 hover:border-primary/30"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="lastName" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                          Last Name *
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-border/50 focus:border-primary/50 bg-background/50 transition-all duration-300 hover:border-primary/30"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                          Email *
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-border/50 focus:border-primary/50 bg-background/50 transition-all duration-300 hover:border-primary/30"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                          Phone
                        </label>
                        <Input 
                          id="phone" 
                          placeholder="+1 (555) 123-4567" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-border/50 focus:border-primary/50 bg-background/50 transition-all duration-300 hover:border-primary/30"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                        Service Interested In
                      </label>
                      <select 
                        id="service" 
                        className="w-full h-12 px-4 py-3 border-2 border-border/50 rounded-md bg-background/50 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a service</option>
                        <option value="Premium Doors">Premium Doors</option>
                        <option value="Smart Kitchens">Smart Kitchens</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors">
                        Project Description *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-border/50 focus:border-primary/50 bg-background/50 transition-all duration-300 hover:border-primary/30 resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="cta" 
                        size="lg" 
                        className="w-full h-14 text-lg font-semibold hover:scale-[1.02] transition-all duration-300 shadow-elegant hover:shadow-glow" 
                        type="submit" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-6 h-6 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="h-36 hover:shadow-glow transition-all duration-500 border-0 bg-background/60 backdrop-blur-sm group hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-4 bg-gradient-primary rounded-xl shadow-elegant group-hover:animate-glow">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                          <div className="space-y-1 mb-3">
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-foreground font-medium">{detail}</p>
                            ))}
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Partners Section */}
      <BrandPartners />
    </>
  );
};

export default Contact;