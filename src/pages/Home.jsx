import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import MissionSection from "../components/MissionSection";
import PartnerCTA from "../components/PartnerCTA";
import Marketplace from "../components/Marketplace";
import WhyChooseUs from "../components/WhyChooseUs";
import RegionsSection from "../components/RegionsSection";

export default function Home() {
  return (
    <>
<Navbar />

<Hero />

<Marketplace />

<WhyChooseUs />

<ProductSection />

<RegionsSection />

<MissionSection />

<PartnerCTA />

<Footer />
    </>
  );
}