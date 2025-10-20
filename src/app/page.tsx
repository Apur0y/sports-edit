

import AboutUs from "@/conponents/home/AboutUs";
import ReviewSection from "@/conponents/home/Review";
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
     <AboutUs/>
 
      <FloatingButtons />
      <Packages />
      <Footer/>
    </main>
  );
}
