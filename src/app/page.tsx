
import AboutUs from "@/conponents/home/AboutUs";
import { FAQSection } from "@/conponents/home/FAQSection";
import { PortfolioSection } from "@/conponents/home/PortfolioSection";
import { PricingSection } from "@/conponents/home/PricingSection";
import { ProcessSection } from "@/conponents/home/ProcessSection";
import { ServicesSection } from "@/conponents/home/ServicesSection";
import { TestimonialsSection } from "@/conponents/home/TestimonialsSection";
import Banner from "@/conponents/shared/Banner";
import FloatingButtons from "@/conponents/shared/FloatingButtons";
import Footer from "@/conponents/shared/Footer";
import OurWorks from "@/conponents/shared/OurWorks";
import Packages from "@/conponents/shared/Packages";
import SportsOptions from "@/conponents/shared/SportsOptions";


export default function HomePage() {
  return (
    <main>
      
      <Banner />
      <SportsOptions />
      <OurWorks/>
     <ServicesSection/>
     {/* <PortfolioSection/> */}
     <ProcessSection/> 
     <AboutUs/>
      {/* <FloatingButtons /> */}
     <PricingSection/>
      <Packages />
     <FAQSection/>
      <Footer/>
    </main>
  );
}
