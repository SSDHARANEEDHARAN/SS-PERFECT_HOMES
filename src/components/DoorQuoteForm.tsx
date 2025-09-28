import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface SelectedImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface DoorQuoteFormProps {
  selectedImage: SelectedImage;
  onClose: () => void;
  onBack: () => void;
}

const DoorQuoteForm = ({ selectedImage, onClose, onBack }: DoorQuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    requirements: "",
    dimensions: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('process-door-quote', {
        body: {
          ...formData,
          selectedImage: {
            id: selectedImage.id,
            title: selectedImage.title,
            description: selectedImage.description,
            imageUrl: selectedImage.src
          },
          submittedAt: new Date().toISOString()
        }
      });

      if (error) {
        console.error('Quote submission error:', error);
        toast.error('Failed to submit quote. Please try again.');
        return;
      }

      console.log('Quote submitted successfully:', data);
      setIsSubmitted(true);
      toast.success('Quote request submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg shadow-elegant max-w-md w-full p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Quote Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in our {selectedImage.title}. We'll contact you within 24 hours with a detailed quote.
          </p>
          <Button onClick={onClose} variant="cta" className="w-full">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-elegant max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Request Quote</h2>
                <p className="text-muted-foreground">for {selectedImage.title}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Selected Image Preview */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                  <p className="text-white/90 text-sm">{selectedImage.description}</p>
                </div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Professional installation</li>
                  <li>• 2-year warranty</li>
                  <li>• Free maintenance for 6 months</li>
                  <li>• Custom sizing available</li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Installation Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dimensions">Dimensions & Specifications</Label>
                <Textarea
                  id="dimensions"
                  name="dimensions"
                  placeholder="Please provide required dimensions, material preferences, color choices, etc."
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  placeholder="Any special requirements, timeline expectations, or questions..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                  Back to Gallery
                </Button>
                <Button 
                  type="submit" 
                  variant="cta" 
                  className="flex-1 flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorQuoteForm;