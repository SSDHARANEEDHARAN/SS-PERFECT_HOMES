import { useState, useEffect } from "react";
import { ArrowLeft, Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all available images
import craftWork1 from "@/assets/craft-work-1.jpg";
import craftWork2 from "@/assets/craft-work-2.jpg";
import craftWork3 from "@/assets/craft-work-3.jpg";
import craftWork4 from "@/assets/craft-work-4.jpg";
import craftWork5 from "@/assets/craft-work-5.jpg";
import craftWork6 from "@/assets/craft-work-6.jpg";
import craftWork7 from "@/assets/craft-work-7.jpg";
import craftWork8 from "@/assets/craft-work-8.jpg";
import craftWork9 from "@/assets/craft-work-9.jpg";
import craftWork10 from "@/assets/craft-work-10.jpg";
import craftWork11 from "@/assets/craft-work-11.jpg";
import craftWork12 from "@/assets/craft-work-12.jpg";
import craftWork13 from "@/assets/craft-work-13.jpg";
import craftWork14 from "@/assets/craft-work-14.jpg";
import craftWork15 from "@/assets/craft-work-15.jpg";
import craftWork16 from "@/assets/craft-work-16.jpg";
import craftWork17 from "@/assets/craft-work-17.jpg";
import craftWork18 from "@/assets/craft-work-18.jpg";
import craftWork19 from "@/assets/craft-work-19.jpg";
import craftWork20 from "@/assets/craft-work-20.jpg";
import furnishedWork1 from "@/assets/furnished-work-1.jpg";
import furnishedWork2 from "@/assets/furnished-work-2.jpg";
import furnishedWork3 from "@/assets/furnished-work-3.jpg";
import furnishedWork4 from "@/assets/furnished-work-4.jpg";
import furnishedWork5 from "@/assets/furnished-work-5.jpg";
import furnishedWork6 from "@/assets/furnished-work-6.jpg";
import furnishedWork7 from "@/assets/furnished-work-7.jpg";
import furnishedWork8 from "@/assets/furnished-work-8.jpg";
import furnishedWork9 from "@/assets/furnished-work-9.jpg";
import furnishedWork10 from "@/assets/furnished-work-10.jpg";
import furnishedWork11 from "@/assets/furnished-work-11.jpg";
import furnishedWork12 from "@/assets/furnished-work-12.jpg";
import furnishedWork13 from "@/assets/furnished-work-13.jpg";
import furnishedWork14 from "@/assets/furnished-work-14.jpg";
import furnishedWork15 from "@/assets/furnished-work-15.jpg";
import furnishedWork16 from "@/assets/furnished-work-16.jpg";
import furnishedWork17 from "@/assets/furnished-work-17.jpg";
import furnishedWork18 from "@/assets/furnished-work-18.jpg";
import furnishedWork19 from "@/assets/furnished-work-19.jpg";
import furnishedWork20 from "@/assets/furnished-work-20.jpg";
import woodWork1 from "@/assets/wood-work-1.jpg";
import woodWork2 from "@/assets/wood-work-2.jpg";
import woodWork3 from "@/assets/wood-work-3.jpg";
import woodWork4 from "@/assets/wood-work-4.jpg";
import woodWork5 from "@/assets/wood-work-5.jpg";
import woodWork6 from "@/assets/wood-work-6.jpg";
import woodWork7 from "@/assets/wood-work-7.jpg";
import woodWork8 from "@/assets/wood-work-8.jpg";
import woodWork9 from "@/assets/wood-work-9.jpg";
import woodWork10 from "@/assets/wood-work-10.jpg";
import woodWork11 from "@/assets/wood-work-11.jpg";
import woodWork12 from "@/assets/wood-work-12.jpg";
import woodWork13 from "@/assets/wood-work-13.jpg";
import woodWork14 from "@/assets/wood-work-14.jpg";
import woodWork15 from "@/assets/wood-work-15.jpg";
import woodWork16 from "@/assets/wood-work-16.jpg";
import woodWork17 from "@/assets/wood-work-17.jpg";
import woodWork18 from "@/assets/wood-work-18.jpg";
import woodWork19 from "@/assets/wood-work-19.jpg";
import woodWork20 from "@/assets/wood-work-20.jpg";
import weldingWork1 from "@/assets/welding-work-1.jpg";
import weldingWork2 from "@/assets/welding-work-2.jpg";
import weldingWork3 from "@/assets/welding-work-3.jpg";
import weldingWork4 from "@/assets/welding-work-4.jpg";
import weldingWork5 from "@/assets/welding-work-5.jpg";

const CustomerGalleryPage = () => {
  const navigate = useNavigate();

  // Customer testimonials with images (75 total for 3 columns x 25 rows)
  const customerTestimonials = [
    {
      image: craftWork1,
      name: "Sarah Johnson",
      location: "Downtown Apartment",
      quote: "Perfect Home's transformed my space beyond my wildest dreams. The craftsmanship is exceptional!",
      rating: 5,
      project: "Custom Kitchen Design"
    },
    {
      image: furnishedWork1,
      name: "Michael Chen",
      location: "Suburban Villa", 
      quote: "Outstanding attention to detail. Every corner reflects quality and elegance.",
      rating: 5,
      project: "Complete Home Renovation"
    },
    {
      image: woodWork1,
      name: "Emily Rodriguez",
      location: "Modern Condo",
      quote: "The wood work is absolutely stunning. They brought my vision to life perfectly.",
      rating: 5,
      project: "Living Room Redesign"
    },
    {
      image: weldingWork1,
      name: "David Thompson",
      location: "Industrial Loft",
      quote: "Professional welding work that combines functionality with artistic flair.",
      rating: 5,
      project: "Metal Framework Installation"
    },
    {
      image: craftWork2,
      name: "Lisa Wang",
      location: "Family Home",
      quote: "From concept to completion, Perfect Home's exceeded all expectations.",
      rating: 5,
      project: "Bedroom Suite Design"
    },
    {
      image: furnishedWork2,
      name: "Robert Miller",
      location: "Luxury Penthouse",
      quote: "Impeccable service and breathtaking results. Highly recommended!",
      rating: 5,
      project: "Master Bathroom Renovation"
    },
    {
      image: woodWork2,
      name: "Amanda Foster",
      location: "Cozy Cottage",
      quote: "Beautiful custom furniture that perfectly fits our lifestyle.",
      rating: 5,
      project: "Custom Cabinetry"
    },
    {
      image: craftWork3,
      name: "James Wilson",
      location: "Modern Townhouse",
      quote: "The team's creativity and skill are unmatched. Simply amazing work!",
      rating: 5,
      project: "Home Office Design"
    },
    {
      image: furnishedWork3,
      name: "Jennifer Davis",
      location: "Classic Victorian",
      quote: "They preserved the home's character while adding modern convenience.",
      rating: 5,
      project: "Heritage Home Restoration"
    },
    {
      image: woodWork3,
      name: "Thomas Anderson",
      location: "Contemporary Flat",
      quote: "Outstanding craftsmanship with attention to every detail.",
      rating: 5,
      project: "Dining Room Makeover"
    },
    {
      image: weldingWork2,
      name: "Maria Garcia",
      location: "Urban Studio",
      quote: "Transformed my small space into a functional and beautiful home.",
      rating: 5,
      project: "Space Optimization"
    },
    {
      image: craftWork4,
      name: "Kevin Lee",
      location: "Garden Apartment",
      quote: "Perfect Home's understands both aesthetics and functionality perfectly.",
      rating: 5,
      project: "Balcony Extension"
    },
    {
      image: furnishedWork4,
      name: "Rachel Green",
      location: "Minimalist Home",
      quote: "Clean lines, quality materials, and exceptional execution.",
      rating: 5,
      project: "Minimalist Interior"
    },
    {
      image: woodWork4,
      name: "Daniel Brown",
      location: "Rustic Cabin",
      quote: "They captured the rustic charm while adding modern touches.",
      rating: 5,
      project: "Cabin Renovation"
    },
    {
      image: craftWork5,
      name: "Sophie Taylor",
      location: "City Loft",
      quote: "Incredible transformation that maximized every square foot.",
      rating: 5,
      project: "Loft Conversion"
    },
    {
      image: furnishedWork5,
      name: "Mark Johnson",
      location: "Family Residence",
      quote: "Professional team that delivered beyond our expectations.",
      rating: 5,
      project: "Family Room Design"
    },
    {
      image: woodWork5,
      name: "Nina Patel",
      location: "Eco-Friendly Home",
      quote: "Sustainable materials and eco-conscious design. Love it!",
      rating: 5,
      project: "Green Home Renovation"
    },
    {
      image: weldingWork3,
      name: "Carlos Martinez",
      location: "Industrial Space",
      quote: "Strong, durable, and beautifully crafted metalwork.",
      rating: 5,
      project: "Structural Enhancements"
    },
    {
      image: craftWork6,
      name: "Helen White",
      location: "Vintage Apartment",
      quote: "They preserved the vintage charm while modernizing everything.",
      rating: 5,
      project: "Vintage Restoration"
    },
    {
      image: furnishedWork6,
      name: "Peter Wong",
      location: "Smart Home",
      quote: "Perfect integration of technology with beautiful design.",
      rating: 5,
      project: "Smart Home Setup"
    },
    {
      image: woodWork6,
      name: "Grace Kim",
      location: "Artistic Studio",
      quote: "Custom storage solutions that are both practical and beautiful.",
      rating: 5,
      project: "Artist Studio Design"
    },
    {
      image: craftWork7,
      name: "Ryan Cooper",
      location: "Luxury Condo",
      quote: "High-end finishes and impeccable attention to detail.",
      rating: 5,
      project: "Luxury Interior"
    },
    {
      image: furnishedWork7,
      name: "Laura Mitchell",
      location: "Beach House",
      quote: "Coastal design that feels both relaxed and sophisticated.",
      rating: 5,
      project: "Coastal Home Design"
    },
    {
      image: woodWork7,
      name: "Andrew Clark",
      location: "Mountain Retreat",
      quote: "Stunning wood work that complements the natural setting.",
      rating: 5,
      project: "Mountain Cabin Interior"
    },
    {
      image: weldingWork4,
      name: "Diana Scott",
      location: "Modern Duplex",
      quote: "Strong and stylish structural elements throughout.",
      rating: 5,
      project: "Duplex Renovation"
    },
    {
      image: craftWork8,
      name: "Jonathan Hall",
      location: "Historic Brownstone",
      quote: "Masterful restoration that honors the building's history.",
      rating: 5,
      project: "Historic Renovation"
    },
    {
      image: furnishedWork8,
      name: "Melissa Adams",
      location: "Zen Garden Home",
      quote: "Peaceful, harmonious design that promotes tranquility.",
      rating: 5,
      project: "Zen Interior Design"
    },
    {
      image: woodWork8,
      name: "Brian Turner",
      location: "Craftsman Bungalow",
      quote: "Beautiful woodwork that highlights the craftsman style.",
      rating: 5,
      project: "Craftsman Restoration"
    },
    {
      image: craftWork9,
      name: "Victoria Lewis",
      location: "Contemporary Villa",
      quote: "Sleek, modern design with exceptional build quality.",
      rating: 5,
      project: "Villa Interior"
    },
    {
      image: furnishedWork9,
      name: "Steven Parker",
      location: "Urban Penthouse",
      quote: "Luxury living at its finest. Every detail is perfect.",
      rating: 5,
      project: "Penthouse Design"
    },
    {
      image: woodWork9,
      name: "Olivia Evans",
      location: "Country Estate",
      quote: "Elegant country style with modern conveniences.",
      rating: 5,
      project: "Estate Renovation"
    },
    {
      image: weldingWork5,
      name: "Nathan Roberts",
      location: "Warehouse Conversion",
      quote: "Industrial chic with functional metal elements.",
      rating: 5,
      project: "Warehouse Loft"
    },
    {
      image: craftWork10,
      name: "Samantha King",
      location: "Art Deco Apartment",
      quote: "Perfect blend of vintage glamour and modern comfort.",
      rating: 5,
      project: "Art Deco Restoration"
    },
    {
      image: furnishedWork10,
      location: "Rooftop Apartment",
      name: "Christopher Wright",
      quote: "Sky-high luxury with breathtaking city views.",
      rating: 5,
      project: "Rooftop Design"
    },
    {
      image: woodWork10,
      name: "Isabella Lopez",
      location: "Mediterranean Villa",
      quote: "Warm, inviting spaces with authentic Mediterranean flair.",
      rating: 5,
      project: "Mediterranean Interior"
    },
    {
      image: craftWork11,
      name: "Matthew Hughes",
      location: "Tech Startup Office",
      quote: "Modern workspace that inspires creativity and collaboration.",
      rating: 5,
      project: "Office Design"
    },
    {
      image: furnishedWork11,
      name: "Emma Collins",
      location: "Scandinavian Home",
      quote: "Clean, minimalist design with perfect functionality.",
      rating: 5,
      project: "Scandinavian Interior"
    },
    {
      image: woodWork11,
      name: "Tyler Morgan",
      location: "Log Cabin",
      quote: "Rustic charm meets modern convenience beautifully.",
      rating: 5,
      project: "Cabin Modernization"
    },
    {
      image: craftWork12,
      name: "Chloe Reed",
      location: "Boutique Hotel Suite",
      quote: "Hotel-quality luxury in a residential setting.",
      rating: 5,
      project: "Luxury Suite Design"
    },
    {
      image: furnishedWork12,
      name: "Jacob Stewart",
      location: "Mid-Century Modern",
      quote: "Authentic mid-century style with contemporary updates.",
      rating: 5,
      project: "Mid-Century Renovation"
    },
    {
      image: woodWork12,
      name: "Ava Richardson",
      location: "Treehouse Retreat",
      quote: "Magical treehouse design that feels like a fairy tale.",
      rating: 5,
      project: "Treehouse Construction"
    },
    {
      image: craftWork13,
      name: "Lucas Bailey",
      location: "Glass House",
      quote: "Transparent living with seamless indoor-outdoor flow.",
      rating: 5,
      project: "Glass House Design"
    },
    {
      image: furnishedWork13,
      name: "Zoe Howard",
      location: "Boho Chic Loft",
      quote: "Eclectic design that perfectly captures bohemian spirit.",
      rating: 5,
      project: "Bohemian Interior"
    },
    {
      image: woodWork13,
      name: "Ethan Ward",
      location: "Japanese Tea House",
      quote: "Serene, minimalist design inspired by Japanese aesthetics.",
      rating: 5,
      project: "Japanese Design"
    },
    {
      image: craftWork14,
      name: "Lily Torres",
      location: "Artist's Loft",
      quote: "Creative space that inspires artistic expression daily.",
      rating: 5,
      project: "Artist Loft Design"
    },
    {
      image: furnishedWork14,
      name: "Mason Phillips",
      location: "Smart Apartment",
      quote: "Cutting-edge technology seamlessly integrated into living.",
      rating: 5,
      project: "Smart Home Integration"
    },
    {
      image: woodWork14,
      name: "Harper Campbell",
      location: "Farmhouse Kitchen",
      quote: "Cozy farmhouse charm with modern efficiency.",
      rating: 5,
      project: "Farmhouse Renovation"
    },
    {
      image: craftWork15,
      name: "Owen Mitchell",
      location: "Music Studio",
      quote: "Acoustically perfect space with inspiring design.",
      rating: 5,
      project: "Recording Studio"
    },
    {
      image: furnishedWork15,
      name: "Ella Rivera",
      location: "Wellness Spa Home",
      quote: "Tranquil spa-like atmosphere throughout the home.",
      rating: 5,
      project: "Wellness Interior"
    },
    {
      image: woodWork15,
      name: "Logan Gray",
      location: "Wine Cellar",
      quote: "Sophisticated wine storage with perfect ambiance.",
      rating: 5,
      project: "Wine Cellar Design"
    },
    {
      image: craftWork16,
      name: "Madison James",
      location: "Greenhouse Home",
      quote: "Living among plants with beautiful natural integration.",
      rating: 5,
      project: "Greenhouse Interior"
    },
    {
      image: furnishedWork16,
      name: "Carter Bennett",
      location: "Library Loft",
      quote: "Book lover's paradise with stunning reading spaces.",
      rating: 5,
      project: "Library Design"
    },
    {
      image: woodWork16,
      name: "Scarlett Price",
      location: "Dance Studio Home",
      quote: "Open, flowing spaces perfect for movement and dance.",
      rating: 5,
      project: "Dance Studio Design"
    },
    {
      image: craftWork17,
      name: "Hunter Sanders",
      location: "Game Room Haven",
      quote: "Ultimate entertainment space for family and friends.",
      rating: 5,
      project: "Game Room Design"
    },
    {
      image: furnishedWork17,
      name: "Aubrey Watson",
      location: "Yoga Retreat Home",
      quote: "Peaceful spaces designed for meditation and wellness.",
      rating: 5,
      project: "Yoga Studio Interior"
    },
    {
      image: woodWork17,
      name: "Caleb Brooks",
      location: "Workshop Garage",
      quote: "Functional workshop with beautiful craftsmanship storage.",
      rating: 5,
      project: "Workshop Design"
    },
    {
      image: craftWork18,
      name: "Addison Kelly",
      location: "Home Theater",
      quote: "Cinema-quality experience in the comfort of home.",
      rating: 5,
      project: "Home Theater Design"
    },
    {
      image: furnishedWork18,
      name: "Wyatt Murphy",
      location: "Chef's Kitchen",
      quote: "Professional-grade kitchen for the passionate home chef.",
      rating: 5,
      project: "Gourmet Kitchen"
    },
    {
      image: woodWork18,
      name: "Natalie Ross",
      location: "Reading Nook",
      quote: "Cozy corner that makes every book a perfect escape.",
      rating: 5,
      project: "Reading Space Design"
    },
    {
      image: craftWork19,
      name: "Blake Patterson",
      location: "Home Gym",
      quote: "Motivating fitness space with professional-quality design.",
      rating: 5,
      project: "Home Gym Setup"
    },
    {
      image: furnishedWork19,
      name: "Mackenzie Cooper",
      location: "Craft Room",
      quote: "Organized, inspiring space for all creative projects.",
      rating: 5,
      project: "Craft Room Design"
    },
    {
      image: woodWork19,
      name: "Brayden Richardson",
      location: "Man Cave",
      quote: "Perfect retreat space with masculine, sophisticated design.",
      rating: 5,
      project: "Man Cave Design"
    },
    {
      image: craftWork20,
      name: "Paisley Morris",
      location: "Baby Nursery",
      quote: "Sweet, safe, and beautiful space for our little one.",
      rating: 5,
      project: "Nursery Design"
    },
    {
      image: furnishedWork20,
      name: "Jaxon Cook",
      location: "Guest Suite",
      quote: "Welcoming space that makes every guest feel special.",
      rating: 5,
      project: "Guest Room Design"
    },
    {
      image: woodWork20,
      name: "Kaylee Ward",
      location: "Home Office",
      quote: "Productive workspace that inspires success every day.",
      rating: 5,
      project: "Home Office Design"
    },
    {
      image: craftWork1,
      name: "Maverick Torres",
      location: "Pool House",
      quote: "Perfect poolside retreat with elegant design elements.",
      rating: 5,
      project: "Pool House Design"
    },
    {
      image: furnishedWork1,
      name: "Nova Phillips",
      location: "Sunroom",
      quote: "Bright, airy space that brings the outdoors inside.",
      rating: 5,
      project: "Sunroom Addition"
    },
    {
      image: woodWork1,
      name: "Ryder Campbell",
      location: "Basement Bar",
      quote: "Entertainment space that rivals the best establishments.",
      rating: 5,
      project: "Basement Bar Design"
    },
    {
      image: craftWork2,
      name: "Willow Mitchell",
      location: "Laundry Room",
      quote: "Functional beauty that makes chores feel less like work.",
      rating: 5,
      project: "Laundry Room Renovation"
    },
    {
      image: furnishedWork2,
      name: "Zion Rivera",
      location: "Pantry",
      quote: "Organized storage that makes cooking a joy.",
      rating: 5,
      project: "Pantry Organization"
    },
    {
      image: woodWork2,
      name: "Luna Gray",
      location: "Walk-in Closet",
      quote: "Luxury storage that makes getting dressed a pleasure.",
      rating: 5,
      project: "Closet Design"
    },
    {
      image: craftWork3,
      name: "Phoenix James",
      location: "Mudroom",
      quote: "Practical entryway that keeps our home organized.",
      rating: 5,
      project: "Mudroom Design"
    },
    {
      image: furnishedWork3,
      name: "Sage Bennett",
      location: "Powder Room",
      quote: "Small space with big impact and beautiful details.",
      rating: 5,
      project: "Powder Room Renovation"
    },
    {
      image: woodWork3,
      name: "River Price",
      location: "Foyer",
      quote: "Grand entrance that sets the tone for the entire home.",
      rating: 5,
      project: "Foyer Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onProjectSelect={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Happy Customers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real customers who chose Perfect Home's for their dream spaces
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s project`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white font-semibold text-sm">{testimonial.project}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerGalleryPage;