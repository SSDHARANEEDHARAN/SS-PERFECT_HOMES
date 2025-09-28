import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Home, Clock, IndianRupee, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CustomQuoteFormProps {
  onClose: () => void;
}

const CustomQuoteForm = ({ onClose }: CustomQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    serviceType: "",
    timeline: "",
    projectDescription: "",
    specificRequirements: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-enquiry', {
        body: {
          type: 'Custom Quote',
          customerName: formData.name,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          address: formData.address,
          serviceType: formData.serviceType,
          timeline: formData.timeline,
          projectDescription: formData.projectDescription,
          specificRequirements: formData.specificRequirements,
          message: `Timeline: ${formData.timeline}, Description: ${formData.projectDescription}`
        }
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Custom quote request submitted successfully!");
    } catch (error: any) {
      console.error('Error submitting custom quote:', error);
      toast.error("Failed to submit quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border bg-card text-card-foreground shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quote Request Submitted!</h3>
              <p className="text-muted-foreground mb-4">
                Thank you {formData.name}! We'll contact you within 24 hours with a detailed quote for your {formData.serviceType} project.
              </p>
              <Button onClick={onClose} className="w-full">
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border bg-card text-card-foreground shadow-lg">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl text-foreground">Get Your Custom Quote</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            Complete Home Solutions - From Design to Installation
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <span>Contact Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="WhatsApp number (if different)"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Complete Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your complete address"
                  required
                />
              </div>
            </div>

            {/* Project Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Project Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Complete Home Interior">Complete Home Interior</SelectItem>
                      <SelectItem value="Kitchen Design & Installation">Kitchen Design & Installation</SelectItem>
                      <SelectItem value="Bedroom Interior">Bedroom Interior</SelectItem>
                      <SelectItem value="Living Room Design">Living Room Design</SelectItem>
                      <SelectItem value="Bathroom Interior">Bathroom Interior</SelectItem>
                      <SelectItem value="Office Interior">Office Interior</SelectItem>
                      <SelectItem value="Wood Work & Furniture">Wood Work & Furniture</SelectItem>
                      <SelectItem value="Door Installation">Door Installation</SelectItem>
                      <SelectItem value="Welding & Metal Work">Welding & Metal Work</SelectItem>
                      <SelectItem value="Smart Home Automation">Smart Home Automation</SelectItem>
                      <SelectItem value="IoT Integration">IoT Integration</SelectItem>
                      <SelectItem value="Other Custom Work">Other Custom Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline" className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Project Timeline *</span>
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediate (Within 1 week)">Immediate (Within 1 week)</SelectItem>
                      <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                      <SelectItem value="Within 2-3 months">Within 2-3 months</SelectItem>
                      <SelectItem value="Within 6 months">Within 6 months</SelectItem>
                      <SelectItem value="Just Planning (No rush)">Just Planning (No rush)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="projectDescription" className="text-foreground">Detailed Project Description *</Label>
                <Textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  placeholder="Please describe your project in detail - which rooms, what type of work needed, your design preferences, space dimensions, etc."
                  rows={4}
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <Label htmlFor="specificRequirements" className="text-foreground">Additional Requirements (Optional)</Label>
                <Textarea
                  id="specificRequirements"
                  value={formData.specificRequirements}
                  onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                  placeholder="Any specific materials, design styles, preferred brands, accessibility needs, or special requirements?"
                  rows={3}
                  className="bg-background border-input"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get My Custom Quote"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomQuoteForm;