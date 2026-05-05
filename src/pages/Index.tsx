import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureSections from "@/components/FeatureSections";
import DiningGallery from "@/components/DiningGallery";
import AccommodationGrid from "@/components/AccommodationGrid";
import Footer from "@/components/Footer";

interface IndexProps {
    onBookRoom: () => void;
    onBookTable: () => void;
}

const Index = ({ onBookRoom, onBookTable }: IndexProps) => {
    return (
        <>
            <Helmet>
                <title>VERTEX | The Pinnacle of Luxury</title>
                <meta name="description" content="Experience the art of living where the horizon meets heritage. A sanctuary crafted for the world's most discerning guests." />
            </Helmet>
            <Navbar onBookRoom={onBookRoom} />
            <main>
                <HeroSection onBookRoom={onBookRoom} />
                <AboutSection />
                <FeatureSections />
                <DiningGallery onBookTable={onBookTable} />
                <AccommodationGrid onBookRoom={onBookRoom} />
            </main>
            <Footer />
        </>
    );
};

export default Index;