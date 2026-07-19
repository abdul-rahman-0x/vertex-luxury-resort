import { useEffect, useRef, useState } from "react";
import { Star, ShieldCheck, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import lobbyImage from "@/assets/lobby.png";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="our_story"
      ref={sectionRef}
      className="py-24 lg:py-40 bg-[hsl(var(--vertex-offwhite))] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* --- IMAGE SIDE --- */}
          <div className="lg:w-1/2 relative group cursor-pointer">
            {/* Outer Decorative Border */}
            <div
              className={`absolute -inset-4 border border-black/5 transition-all transition-duration-[1500ms] z-0 hidden lg:block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />

            <div className="relative overflow-hidden z-10 bg-[#1a1a1a]">
              {/* Image Reveal Mask */}
              <div
                className={`absolute inset-0 bg-[hsl(var(--vertex-offwhite))] z-20 transition-transform transition-duration-[1500ms] transition-timing-[cubic-bezier(0.85,0,0.15,1)] origin-top ${
                  isVisible ? "scale-y-0" : "scale-y-100"
                }`}
              />

              <img
                src={lobbyImage}
                alt="VERTEX Hotel Lobby"
                className="w-full h-[500px] lg:h-[750px] object-cover will-change-transform transition-transform transition-duration-[2000ms] transition-timing-[ease-out] group-hover:scale-110"
              />

              {/* Voted Badge - Glass Effect */}
              <div
                className={`absolute bottom-8 right-8 glass-card p-6 max-w-[200px] shadow-2xl transition-all transition-duration-[1000ms] transition-delay-[800ms] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}>
                <div className="flex gap-1 mb-2 text-[hsl(var(--vertex-gold))]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="font-display text-sm tracking-widest leading-tight text-white uppercase">
                  Voted #1 Design Hotel 2026
                </p>
              </div>
            </div>
          </div>

          {/* --- CONTENT SIDE --- */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span
                className={`inline-block text-[hsl(var(--vertex-gold))] text-xs font-bold tracking-[0.3em] uppercase transition-all transition-duration-[800ms] ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}>
                Established 2025
              </span>

              <h2 className="font-display text-5xl lg:text-7xl leading-[1] text-black">
                <span
                  className={`block transition-all transition-duration-[1000ms] transition-delay-[200ms] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
                  THE EPITOME OF
                </span>
                <span
                  className={`block font-serif italic font-normal text-black/40 mt-2 transition-all transition-duration-[1000ms] transition-delay-[400ms] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
                  Refined Luxury
                </span>
              </h2>
            </div>

            <div
              className={`space-y-8 text-black/60 leading-relaxed text-lg font-light transition-all transition-duration-[1000ms] transition-delay-[600ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <p className="border-l-2 border-[hsl(var(--vertex-gold))/30] pl-6">
                Vertex is more than a hotel; it is a landmark of architectural
                excellence and personalized sanctuary.
              </p>
              <p className="font-body">
                Every suite is designed as an observation deck to the city's
                skyline, merging industrial chic with unparalleled comfort.
              </p>
            </div>

            {/* Features Grid */}
            <div
              className={`grid grid-cols-2 gap-8 pt-4 transition-all transition-duration-[1000ms] transition-delay-[800ms] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
              <div className="flex items-start gap-4">
                <Gem className="w-5 h-5 text-[hsl(var(--vertex-gold))] mt-1" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-black">
                    World Class
                  </h4>
                  <p className="text-xs text-black/40">Top 1% Global Rating</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-[hsl(var(--vertex-gold))] mt-1" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-black">
                    Privacy
                  </h4>
                  <p className="text-xs text-black/40">Exclusive VIP Access</p>
                </div>
              </div>
            </div>

            {/* Link to Story */}
            <div
              className={`pt-6 transition-all transition-duration-[1000ms] transition-delay-[1000ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <Link
                to="/story"
                className="inline-block border-b border-black pb-1 text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[hsl(var(--vertex-gold))] hover:border-[hsl(var(--vertex-gold))] transition-all duration-500">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
