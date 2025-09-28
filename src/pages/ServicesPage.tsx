import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const handleProjectSelect = () => {};

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;