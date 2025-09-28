import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Code, Globe, Smartphone, Zap, Shield, Users } from "lucide-react";

const WebDevelopmentPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);

  const handleProjectSelect = () => {};

  const webServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Complete web applications with frontend and backend"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Optimized for all devices and screen sizes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Fast loading and highly optimized web solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Maintenance",
      description: "Secure coding practices and ongoing support"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience",
      description: "Intuitive and engaging user interface design"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
    "Supabase", "PostgreSQL", "REST APIs", "GraphQL", "AWS"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Web Development Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional web development solutions designed and powered by expert developers with cutting-edge technologies.
            </p>
            
            {/* Credit Section */}
            <div className="bg-card border rounded-lg p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Website Designed & Developed By</h2>
              <div className="space-y-2">
                <p className="text-lg font-medium text-primary">Tharanee</p>
                <p className="text-muted-foreground">Powered by</p>
                <p className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  RT Leaf's Technology Solutions
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Enhanced with modern web technologies and best practices for optimal performance and user experience.
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={() => setSelectedService({ 
                title: "Web Development Consultation", 
                description: "Get expert advice on your web development project" 
              })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Enquiry Now
            </Button>
          </div>
        </section>

        {/* Web Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This website is a showcase of our web development capabilities, featuring modern design, responsive layout, and advanced functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Perfect Home's Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete business website with interactive galleries, contact forms, and service showcases.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Current Website
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Full-featured online stores with payment integration and inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedService({ 
                      title: "E-commerce Development", 
                      description: "Custom e-commerce solution development" 
                    })}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Business Applications</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom web applications for business management and automation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedService({ 
                      title: "Business Application Development", 
                      description: "Custom business application development" 
                    })}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedService && (
        <EnquiryForm
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default WebDevelopmentPage;