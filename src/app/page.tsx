import Banner from "@/conponents/shared/Banner";
import FloatingButtons from "@/conponents/shared/FloatingButtons";
import OurWorks from "@/conponents/shared/OurWorks";
import Packages from "@/conponents/shared/Packages";
import SportsOptions from "@/conponents/shared/SportsOptions";


export default function HomePage() {
  return (
    <main>
      
      <Banner />
      <SportsOptions />
      <OurWorks/>
      <Packages />
      {/* <MdReviews /> */}
      <FloatingButtons />
    </main>
  );
}
