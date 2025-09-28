import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const handleProjectSelect = () => {};

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;