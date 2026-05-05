import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
    onBookRoom: () => void;
}

const HeroSection = ({ onBookRoom }: HeroSectionProps) => {
    const heroBuilding = "/bg-img.webp";
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden bg-[#050505]"
        >
            {/* --- BACKGROUND IMAGE SIDE --- */}
            <div className="absolute inset-0 lg:relative lg:w-[45%] lg:order-2 h-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-black/40 lg:bg-black/10 z-10" />

                <img
                    src={heroBuilding}
                    alt="VERTEX Hotel Modern Architecture"
                    fetchPriority="high"
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
                        }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent lg:hidden z-20" />
            </div>

            {/* --- CONTENT SIDE --- */}
            <div className="relative z-30 lg:w-[55%] lg:order-1 h-full flex flex-col justify-end lg:justify-center px-8 md:px-16 lg:px-24 pb-20 lg:py-0 bg-transparent lg:bg-[#050505]">

                <div
                    className={`w-12 h-[1px] bg-vertex-gold mb-8 transition-all duration-1000 delay-300 ${showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                />

                <div className="overflow-hidden">
                    <h1
                        className={`font-display text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] leading-[0.8] font-bold text-white transition-all duration-1000 ease-out ${showText ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
                            }`}
                    >
                        VERTEX
                    </h1>
                </div>

                <div className="overflow-hidden mb-10">
                    <h2
                        className={`font-serif italic text-xl md:text-2xl text-vertex-gold/90 mt-4 transition-all duration-1000 delay-200 ease-out ${showText ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
                            }`}
                    >
                        The Pinnacle of Luxury
                    </h2>
                </div>

                <div
                    className={`max-w-md transition-all duration-1000 delay-500 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light tracking-widest uppercase">
                        A sanctuary where timeless elegance meets modern sanctuary.
                        Your journey into refined living begins here.
                    </p>
                </div>
                {/* --- BUTTONS GROUP --- */}
                <div
                    className={`flex flex-col sm:flex-row gap-5 mt-12 transition-all duration-1000 delay-700 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <button
                        onClick={onBookRoom}
                        className="group relative px-9 py-4 border border-white/20 text-white font-display font-bold tracking-[0.25em] text-[10px] uppercase overflow-hidden transition-all duration-500"
                    >
                        {/* White Slide up fill */}
                        <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                        <span className="relative flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-500">
                            Book a suite{" "}
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>

                    <Link
                        to="/accommodations"
                        className="group relative px-9 py-4 bg-white border border-white text-black font-display font-bold tracking-[0.25em] text-[10px] uppercase overflow-hidden transition-all duration-500"
                    >
                        {/* Black Slide up fill */}
                        <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                        <span className="relative flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                            Explore Residences
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;