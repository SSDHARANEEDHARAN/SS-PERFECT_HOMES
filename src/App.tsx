import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage"; 
import ContactPage from "./pages/ContactPage";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import IotIntegrationPage from "./pages/IotIntegrationPage";
import SmartHomePage from "./pages/SmartHomePage";
import AutomaticGatePage from "./pages/AutomaticGatePage";
import IotWaterPage from "./pages/IotWaterPage";
import WoodWorkPage from "./pages/WoodWorkPage";
import WeldingWorksPage from "./pages/WeldingWorksPage";
import FurnishedWorkPage from "./pages/FurnishedWorkPage";
import CraftWorksPage from "./pages/CraftWorksPage";
import CustomerGalleryPage from "./pages/CustomerGalleryPage";
import AllServicesPage from "./pages/AllServicesPage";
import MainDoorsPage from "./pages/MainDoorsPage";
import PujaDoorsPage from "./pages/PujaDoorsPage";
import KitchenDoorsPage from "./pages/KitchenDoorsPage";
import BedroomDoorsPage from "./pages/BedroomDoorsPage";
import BalconyDoorsPage from "./pages/BalconyDoorsPage";
import TempleDoorsPage from "./pages/TempleDoorsPage";
import StudyRoomDoorsPage from "./pages/StudyRoomDoorsPage";
import SmartKitchenPage from "./pages/SmartKitchenPage";
import InteriorDesignPage from "./pages/InteriorDesignPage";
import AIAutomationPage from "./pages/AIAutomationPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import KitchenInteriorPage from "./pages/KitchenInteriorPage";
import BedroomInteriorPage from "./pages/BedroomInteriorPage";
import StudyRoomInteriorPage from "./pages/StudyRoomInteriorPage";
import HallInteriorPage from "./pages/HallInteriorPage";
import BalconyInteriorPage from "./pages/BalconyInteriorPage";
import PujaRoomInteriorPage from "./pages/PujaRoomInteriorPage";
import DiningHallInteriorPage from "./pages/DiningHallInteriorPage";
import MainGatesPage from "./pages/MainGatesPage";
import StaircasePage from "./pages/StaircasePage";
import WindowGrillsPage from "./pages/WindowGrillsPage";
import TechnicalWeldingPage from "./pages/TechnicalWeldingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/all-services" element={<AllServicesPage />} />
          <Route path="/main-doors" element={<MainDoorsPage />} />
          <Route path="/puja-doors" element={<PujaDoorsPage />} />
          <Route path="/kitchen-doors" element={<KitchenDoorsPage />} />
          <Route path="/bedroom-doors" element={<BedroomDoorsPage />} />
          <Route path="/balcony-doors" element={<BalconyDoorsPage />} />
          <Route path="/temple-doors" element={<TempleDoorsPage />} />
          <Route path="/study-room-doors" element={<StudyRoomDoorsPage />} />
          <Route path="/smart-kitchen" element={<SmartKitchenPage />} />
          <Route path="/interior-design" element={<InteriorDesignPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/interiors/kitchen" element={<KitchenInteriorPage />} />
          <Route path="/interiors/bedroom" element={<BedroomInteriorPage />} />
          <Route path="/interiors/study-room" element={<StudyRoomInteriorPage />} />
          <Route path="/interiors/hall" element={<HallInteriorPage />} />
          <Route path="/interiors/balcony" element={<BalconyInteriorPage />} />
          <Route path="/interiors/puja-room" element={<PujaRoomInteriorPage />} />
          <Route path="/interiors/dining-hall" element={<DiningHallInteriorPage />} />
          <Route path="/welding/main-gates" element={<MainGatesPage />} />
          <Route path="/welding/window-grills" element={<WindowGrillsPage />} />
          <Route path="/welding/balcony-grills" element={<WindowGrillsPage />} />
          <Route path="/welding/sheet-works" element={<WindowGrillsPage />} />
          <Route path="/welding/staircase" element={<StaircasePage />} />
          <Route path="/welding/compound-grills" element={<WindowGrillsPage />} />
          <Route path="/welding/technical-works" element={<TechnicalWeldingPage />} />
          <Route path="/services/iot-integration" element={<IotIntegrationPage />} />
          <Route path="/services/smart-home" element={<SmartHomePage />} />
          <Route path="/services/automatic-gate" element={<AutomaticGatePage />} />
          <Route path="/services/iot-water" element={<IotWaterPage />} />
          <Route path="/works/wood-work" element={<WoodWorkPage />} />
          <Route path="/works/welding-works" element={<WeldingWorksPage />} />
          <Route path="/works/furnished-work" element={<FurnishedWorkPage />} />
          <Route path="/works/craft-works" element={<CraftWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/customer-gallery" element={<CustomerGalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
