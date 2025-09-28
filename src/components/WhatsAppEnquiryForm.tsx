import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppEnquiryFormProps {
  onClose: () => void;
}

const WhatsAppEnquiryForm = ({ onClose }: WhatsAppEnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    location: "",
    budget: "",
    message: "",
    urgency: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I'm interested in your services.
    
*Contact Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Service Requirements:*
Service Type: ${formData.serviceType}
Location: ${formData.location}
Budget Range: ${formData.budget}
Urgency: ${formData.urgency}

*Message:*
${formData.message}

Please get back to me with more details. Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    
    // Show options for both WhatsApp numbers
    const phoneNumbers = ['918870086023', '919944864216'];
    const randomNumber = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const isFormValid = formData.name && formData.phone && formData.serviceType && formData.message;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-elegant max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">WhatsApp Enquiry</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            Fill out the form below and we'll redirect you to WhatsApp for instant chat support.
          </p>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Contact Information</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Service Requirements</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior-design">Interior Design</SelectItem>
                    <SelectItem value="smart-home">Smart Home Automation</SelectItem>
                    <SelectItem value="woodwork">Custom Woodwork</SelectItem>
                    <SelectItem value="craft-work">Craft Work</SelectItem>
                    <SelectItem value="welding">Welding Services</SelectItem>
                    <SelectItem value="iot-integration">IoT Integration</SelectItem>
                    <SelectItem value="automatic-gates">Automatic Gates</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter your location"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                    <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="urgency">Urgency</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                    <SelectItem value="planning">Planning (Within 3 months)</SelectItem>
                    <SelectItem value="future">Future Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Describe your requirements in detail..."
                className="mt-1 min-h-[100px]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="cta"
              onClick={handleWhatsAppRedirect}
              disabled={!isFormValid}
              className="flex-1"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppEnquiryForm;