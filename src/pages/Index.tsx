import { useState } from "react";
import Header from "@/components/Header";
import DashboardHero from "@/components/DashboardHero";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";
import WhatsAppEnquiryForm from "@/components/WhatsAppEnquiryForm";
import WoodWorkInline from "@/components/WoodWorkInline";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showWorkerEnquiry, setShowWorkerEnquiry] = useState(false);
  const [showWhatsAppEnquiry, setShowWhatsAppEnquiry] = useState(false);
  const [selectedDoorCategory, setSelectedDoorCategory] = useState<string | null>(null);

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleWorkerEnquiry = () => {
    setShowWorkerEnquiry(true);
  };

  const handleCloseWorkerEnquiry = () => {
    setShowWorkerEnquiry(false);
  };

  const handleWhatsAppEnquiry = () => {
    setShowWhatsAppEnquiry(true);
  };

  const handleCloseWhatsAppEnquiry = () => {
    setShowWhatsAppEnquiry(false);
  };

  const handleDoorCategorySelect = (category: string) => {
    setSelectedDoorCategory(category);
    setSelectedProject(null); // Clear any selected project
  };

  const handleBackToHome = () => {
    setSelectedDoorCategory(null);
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} onDoorCategorySelect={handleDoorCategorySelect} />
      
      {/* Side Navigation */}
      <SideNavigation side="left" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={handleWhatsAppEnquiry} />
      <SideNavigation side="right" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={handleWhatsAppEnquiry} />
      
      {/* Main Content */}
      {selectedDoorCategory ? (
        <WoodWorkInline 
          selectedCategory={selectedDoorCategory}
          onBackToHome={handleBackToHome}
        />
      ) : selectedProject ? (
        <ProjectGallery 
          projectType={selectedProject} 
          onClose={handleCloseProject} 
        />
      ) : (
        <>
          <main>
            <DashboardHero />
          </main>
          <Footer />
        </>
      )}
      
      {/* Worker Enquiry Form Modal */}
      {showWorkerEnquiry && (
        <WorkerEnquiryForm onClose={handleCloseWorkerEnquiry} />
      )}
      
      {/* WhatsApp Enquiry Form Modal */}
      {showWhatsAppEnquiry && (
        <WhatsAppEnquiryForm onClose={handleCloseWhatsAppEnquiry} />
      )}
    </div>
  );
};

export default Index;
