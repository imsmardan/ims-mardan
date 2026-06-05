import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuickInfoBar from "@/components/home/QuickInfoBar";
import ProgramsSection from "@/components/home/ProgramsSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import StatsSection from "@/components/home/StatsSection";
import CampusFacilitiesSection from "@/components/home/CampusFacilitiesSection";
import TeamSection from "@/components/home/TeamSection";
import GoalsSection from "@/components/home/GoalsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ClinicalTrainingSection from "@/components/home/ClinicalTrainingSection";
import InquiryFormSection from "@/components/home/InquiryFormSection";
import FloatingElements from "@/components/ui/FloatingElements";

export default function HomePage() {
  return (
    <>
      {/* Fixed top bar: announcement + header stacked */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>

      <main>
        <HeroSection />
        <QuickInfoBar />
        <ProgramsSection />
        <VisionMissionSection />
        <StatsSection />
        <CampusFacilitiesSection />
        <TeamSection />
        <GoalsSection />
        <TestimonialsSection />
        <ClinicalTrainingSection />
        <InquiryFormSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
