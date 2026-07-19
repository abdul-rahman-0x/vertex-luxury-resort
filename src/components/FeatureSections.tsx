import { useEffect, useRef, useState } from "react";
import { Star, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spaBath from "@/assets/spa-bath.png";
import restaurantBar from "@/assets/restaurant-bar.png";

// --- Sub-Component: Enhanced Review Card ---
interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  position: "left" | "right";
}

const ReviewCard = ({
  name,
  date,
  rating,
  comment,
  avatar,
  position,
}: ReviewCardProps) => (
  <div
    className={`absolute bottom-8 ${
      position === "left"
        ? "left-6 md:left-[-2rem]"
        : "right-6 md:right-[-2rem]"
    } 
        w-[90%] md:w-[320px] bg-white/10 backdrop-blur-md border border-white/20 p-5 shadow-2xl 
        transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 z-20`}>
    {/* Header */}
    <div className="flex items-center gap-3 mb-3">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border border-white/30"
        />
        <div className="absolute -bottom-1 -right-1 bg-vertex-gold rounded-full p-[2px]">
          <CheckCircle className="w-2.5 h-2.5 text-black" />
        </div>
      </div>
      <div>
        <p className="text-white font-display text-sm tracking-wide">{name}</p>
        <p className="text-white/50 text-[10px] uppercase tracking-wider">
          {date}
        </p>
      </div>
      <div className="ml-auto">
        <Quote className="w-4 h-4 text-vertex-gold/50" />
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < rating ? "fill-vertex-gold text-vertex-gold" : "text-gray-500"
          }`}
        />
      ))}
    </div>

    {/* Comment */}
    <p className="text-white/80 text-xs font-light italic leading-relaxed">
      "{comment}"
    </p>
  </div>
);

// --- Main Component ---
const FeatureSections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="wellness"
      ref={sectionRef}
      className="py-24 lg:py-40 bg-vertex-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 space-y-32 lg:space-y-40">
        {/* --- FEATURE 1: SPA & WELLNESS (Left Image) --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div
            className={`lg:w-1/2 relative transition-all transition-duration-[1000ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="relative overflow-hidden h-[450px] lg:h-[650px] w-full bg-[#0a0a0a]">
              <img
                src={spaBath}
                alt="Wellness"
                className="w-full h-full object-cover"
              />
            </div>

            <ReviewCard
              name="Hannah S."
              date="Stayed Oct 2025"
              rating={5}
              comment="The spa services are world-class. I've never felt more rejuvenated."
              avatar="https://images.unsplash.com/photo-1545912453-865b693e5561?w=200"
              position="left"
            />
          </div>

          {/* --- TEXT SIDE (Perfectly Aligned) --- */}
          <div
            className={`lg:w-1/2 transition-all transition-duration-[1000ms] transition-delay-[300ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="flex flex-col gap-8 items-start">
              {/* 1. Tag */}
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-vertex-gold" />
                <p className="text-vertex-gold text-[10px] uppercase tracking-[0.4em] font-bold">
                  Wellness Sanctuary
                </p>
              </div>

              {/* 2. Heading */}
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
                INDULGE IN <br />
                <span className="font-serif italic font-normal text-white/40">
                  Absolute Serenity
                </span>
              </h2>

              {/* 3. Description */}
              <p className="text-white/50 text-base leading-relaxed max-w-md font-light border-l border-white/10 pl-8 font-body">
                Escape the city's rhythm and find your own. Our wellness center
                offers treatments inspired by ancient rituals, paired with
                modern hydrotherapy technology.
              </p>

              {/* 4. Action Button (The ONLY thing with group-hover now) */}
              <div className="pt-4">
                <Link to="/wellness">
                  <button className="group relative px-10 py-5 border border-white/20 text-white font-display font-bold tracking-[0.3em] text-[10px] uppercase overflow-hidden">
                    {/* White Fill: Triggers ONLY when hovering this specific button */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                    <span className="relative flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                      Explore Treatments <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- FEATURE 2: BAR & NIGHTLIFE (Right Image) --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
          <div
            className={`lg:w-1/2 relative transition-all transition-duration-[1000ms] transition-delay-[400ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="relative overflow-hidden h-[450px] lg:h-[650px] w-full bg-[#0a0a0a]">
              <img
                src={restaurantBar}
                alt="Social & Nightlife"
                className="w-full h-full object-cover"
              />
            </div>

            <ReviewCard
              name="Percy W."
              date="Dined Nov 2025"
              rating={5}
              comment="The cocktail menu is an absolute masterpiece. The atmosphere is electric."
              avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
              position="right"
            />
          </div>

          {/* --- TEXT SIDE (Left on Desktop - Aligned) --- */}
          <div
            className={`lg:w-1/2 transition-all transition-duration-[1000ms] transition-delay-[600ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {/* Balanced vertical stack */}
            <div className="flex flex-col gap-8 items-start">
              {/* 1. Tag */}
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-vertex-gold" />
                <p className="text-vertex-gold text-[10px] uppercase tracking-[0.4em] font-bold">
                  Social & Nightlife
                </p>
              </div>

              {/* 2. Heading */}
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
                A TASTE OF THE <br />
                <span className="font-serif italic font-normal text-white/40">
                  High Life
                </span>
              </h2>

              {/* 3. Paragraph */}
              <p className="text-white/50 text-base leading-relaxed max-w-md font-light border-l border-white/10 pl-8 font-body">
                From the freshest seafood to the most succulent steaks, every
                dish is crafted with care. Our lounge transforms into the city's
                most exclusive social destination.
              </p>

              {/* 4. Action Button (Isolated Group) */}
              <div className="pt-4">
                <Link to="/dining-menu">
                  <button className="group relative px-10 py-5 border border-white/20 text-white font-display font-bold tracking-[0.3em] text-[10px] uppercase overflow-hidden">
                    {/* White Slide fill */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                    <span className="relative flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                      View Menus <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSections;
