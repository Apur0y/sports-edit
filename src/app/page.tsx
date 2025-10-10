import Banner from "@/conponents/shared/Banner";
import FloatingButtons from "@/conponents/shared/FloatingButtons";
import Navbar from "@/conponents/shared/Navbar";
import Packages from "@/conponents/shared/Packages";
import SportsOptions from "@/conponents/shared/SportsOptions";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Banner />
      <SportsOptions />
      <Packages />
      {/* <MdReviews /> */}
      <FloatingButtons />
    </main>
  );
}
