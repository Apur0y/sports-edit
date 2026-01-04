
import AboutUs from "@/conponents/home/AboutUs";
import ChooseUs from "@/conponents/home/ChooseUs";
import { FAQSection } from "@/conponents/home/FAQSection";
import { ProcessSection } from "@/conponents/home/ProcessSection";
import { TestimonialsSection } from "@/conponents/home/TestimonialsSection";
import Banner from "@/conponents/shared/Banner";
import FloatingButtons from "@/conponents/shared/FloatingButtons";
import Footer from "@/conponents/shared/Footer";
import OurWorks from "@/conponents/home/OurWorks";
import Packages from "@/conponents/home/Packages";
import SportsOptions from "@/conponents/shared/SportsOptions";


export default function HomePage() {
  return (
    <main>
      
      <Banner />
      <SportsOptions />
      <OurWorks/>
      <ChooseUs/>
     <ProcessSection/> 
     <AboutUs/>
      {/* <FloatingButtons /> */}
      <Packages />
     <FAQSection/>
      <Footer/>
    </main>
  );
}
