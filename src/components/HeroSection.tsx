import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    BedDouble,
    UtensilsCrossed,
    Sparkles,
    Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "@/assets/heroBg.webp";

interface HeroSectionProps {
    onBookRoom: () => void;
}

const HeroSection = ({ onBookRoom }: HeroSectionProps) => {
    const [active, setActive] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        // Trigger visual animations on mount
        const timer = setTimeout(() => setActive(true), 150);
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        {
            name: "Residences",
            icon: <BedDouble size={18} />,
            link: "/accommodations",
        },
        {
            name: "Gastronomy",
            icon: <UtensilsCrossed size={18} />,
            link: "/dining-menu",
        },
        { name: "Wellness", icon: <Sparkles size={18} />, link: "/wellness" },
    ];

    return (
        <section
            id="home"
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden antialiased font-body bg-[#111c24]">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black z-0" />
                <img
                    src={heroBg}
                    alt="Vertex Resort coastal overlook"
                    fetchPriority="high"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-out z-10 ${
                        isImageLoaded
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-[1.02]"
                    }`}
                />

                <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/15 via-transparent to-black/55 z-20" />
            </div>

            {/* --- CENTRAL CONTENT (Modernized spacing and entry) --- */}
            <div className="relative z-30 text-center px-6 max-w-5xl flex flex-col items-center gap-10">
                <div
                    className={`flex flex-col gap-4 transition-all duration-[1200ms] ease-out ${
                        active
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                    }`}>
                    <span className="text-white/95 text-sm font-medium tracking-wide drop-shadow-sm">
                        Experience the stillness of Vertex
                    </span>

                    <h1 className="font-body text-5xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
                        Your sanctuary <br />
                        <span className="font-serif italic font-normal text-white/90">
                            for stillness
                        </span>
                    </h1>
                </div>

                <p
                    className={`max-w-lg text-white/90 font-medium text-base md:text-lg leading-relaxed drop-shadow-md transition-all duration-[1000ms] delay-200 ease-out ${
                        active
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}>
                    Discover hand-crafted suites and coastal escapes{" "}
                    <br className="hidden md:block" /> shaped by architecture
                    and the ocean.
                </p>

                {/* Pill-style CTA button */}
                <div
                    className={`mt-2 transition-all duration-[1000ms] delay-400 ease-out ${
                        active
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}>
                    <button
                        onClick={onBookRoom}
                        className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-[hsl(var(--vertex-gold))] transition-all duration-500 shadow-xl group cursor-pointer">
                        <Calendar size={18} className="text-black/50" />
                        <span className="text-sm font-semibold tracking-tight">
                            Check Availability
                        </span>
                        <div className="w-[1px] h-4 bg-black/10 mx-1" />
                        <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                    </button>
                </div>
            </div>

            {/* --- BOTTOM CATEGORY BAR --- */}
            <div
                className={`absolute bottom-0 w-full bg-white/95 backdrop-blur-md z-40 transition-all duration-[1000ms] delay-500 ease-out ${
                    active ? "translate-y-0" : "translate-y-full"
                }`}>
                <div className="container mx-auto px-6 py-5 flex justify-center items-center gap-12 md:gap-24 overflow-x-auto scrollbar-hide">
                    {categories.map((item, i) => (
                        <Link
                            to={item.link}
                            key={i}
                            className="group flex flex-col items-center gap-2.5 min-w-max transition-all duration-300">
                            <div className="text-black/40 group-hover:text-[hsl(var(--vertex-gold))] transition-colors duration-300">
                                {item.icon}
                            </div>
                            <span className="text-[11px] font-semibold text-black/60 group-hover:text-black tracking-wider uppercase">
                                {item.name}
                            </span>
                            {/* Active-style line indicator */}
                            <div className="w-0 h-[2px] bg-[hsl(var(--vertex-gold))] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
