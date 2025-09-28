import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface QuoteFormProps {
  title: string;
  description: string;
  onClose: () => void;
}

const QuoteForm = ({ title, description, onClose }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    requirements: "",
    dimensions: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-quote', {
        body: {
          ...formData,
          title,
          description,
          submittedAt: new Date().toISOString()
        }
      });

      if (error) {
        console.error('Quote submission error:', error);
        toast.error('Failed to submit quote request. Please try again.');
        return;
      }

      setIsSubmitted(true);
      toast.success('Quote request submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg shadow-2xl max-w-md w-full p-8 text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Quote Request Submitted!</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Thank you for your quote request. Our team will prepare a detailed quote and contact you within 24-48 hours.
          </p>
          <Button onClick={onClose} className="w-full" size="lg">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-6 h-6" />
            </button>
          </div>

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
              <Label htmlFor="address">Project Address *</Label>
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
                placeholder="Please provide dimensions, materials preferences, and any specific requirements"
                value={formData.dimensions}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Project Requirements *</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="Describe your project in detail..."
                value={formData.requirements}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            <Button type="submit" variant="cta" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                'Submit Quote Request'
              )}
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;