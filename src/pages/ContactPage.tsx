import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const handleProjectSelect = () => {};

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;