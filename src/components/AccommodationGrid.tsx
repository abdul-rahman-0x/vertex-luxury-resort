import { ArrowUpRight, Maximize, Users, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

import bedroom from "@/assets/presidential-suite.png";
import amenities from "@/assets/amenities.png";
import bathroomMirror from "@/assets/bathroom-mirror.png";
import bathtubView from "@/assets/skyline-bath.png";

interface AccommodationGridProps {
  onBookRoom: () => void;
}

const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    image: bedroom,
    price: "$1,500",
    size: "150m²",
    capacity: "Up to 4 Guests",
    feature: "Private Butler 24/7",
    view: "Panoramic Cityscape",
    gridClass: "md:col-span-1 md:row-span-2 h-[500px] md:h-full",
  },
  {
    id: 2,
    name: "Ocean Deluxe",
    image: amenities,
    price: "$950",
    size: "90m²",
    capacity: "2-3 Guests",
    feature: "Infinity Balcony",
    view: "Ocean Horizon",
    gridClass: "md:col-span-1 md:row-span-2 h-[500px] md:h-full",
  },
  {
    id: 3,
    name: "Spa Sanctuary",
    image: bathroomMirror,
    price: "$750",
    size: "75m²",
    capacity: "2 Guests",
    feature: "In-room Sauna",
    view: "Garden View",
    gridClass: "md:col-span-1 md:row-span-1 h-[320px]",
  },
  {
    id: 4,
    name: "Skyline Bath",
    image: bathtubView,
    price: "$650",
    size: "65m²",
    capacity: "2 Guests",
    feature: "Soaking Tub",
    view: "Skyline View",
    gridClass: "md:col-span-1 md:row-span-1 h-[320px]",
  },
];

const AccommodationGrid = ({ onBookRoom }: AccommodationGridProps) => {
  const navigate = useNavigate();

  return (
    <section
      id="accommodation"
      className="py-24 lg:py-40 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="relative">
            <span className="absolute -top-16 -left-8 text-[8rem] font-display font-bold text-white/5 select-none tracking-tighter">
              03
            </span>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-[hsl(var(--vertex-gold))]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[hsl(var(--vertex-gold))]">
                Accommodations
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase tracking-tight">
              Rest & <br />
              <span className="font-serif italic font-normal text-white/30">
                Rejuvenation
              </span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 font-light leading-relaxed border-l border-white/10 pl-8 font-body text-sm md:text-base">
            Each suite is an architectural masterpiece, designed to blur the
            lines between indoor luxury and the outdoor horizon.
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`group relative overflow-hidden cursor-pointer bg-[#0a0a0a] ${room.gridClass}`}
              onClick={onBookRoom}>
              {/* Static Image Layer */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover opacity-80 transition-all transition-duration-[1200ms] group-hover:opacity-100"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Reveal Link Icon */}
              <div className="absolute top-8 right-8 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all transition-duration-[500ms] bg-white text-black p-3 rounded-full z-20">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform transition-duration-[700ms] transition-timing-[cubic-bezier(0.2,1,0.3,1)]">
                  <p className="text-[hsl(var(--vertex-gold))] text-[9px] font-bold tracking-[0.4em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all transition-duration-[500ms] transition-delay-[100ms]">
                    Starting from {room.price}
                  </p>

                  <h3 className="font-display text-3xl mb-4 uppercase tracking-wider text-white">
                    {room.name}
                  </h3>

                  {/* Amenities Reveal */}
                  <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-5 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all transition-duration-[600ms] transition-delay-[200ms]">
                    <div className="flex items-center gap-2 text-[10px] tracking-widest text-white/60">
                      <Maximize className="w-3.5 h-3.5 text-[hsl(var(--vertex-gold))]" />{" "}
                      {room.size}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] tracking-widest text-white/60">
                      <Users className="w-3.5 h-3.5 text-[hsl(var(--vertex-gold))]" />{" "}
                      {room.capacity}
                    </div>
                    {/* Secondary Detail Row */}
                    <div className="w-full text-[9px] font-bold tracking-[0.25em] text-[hsl(var(--vertex-gold))] uppercase">
                      {room.feature}{" "}
                      <span className="mx-2 text-white/20">•</span> {room.view}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW ALL --- */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => {
              navigate("/accommodations");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative px-12 py-5 border border-white/20 text-white font-display font-bold tracking-[0.4em] text-[10px] uppercase overflow-hidden transition-all transition-duration-[500ms]">
            {/* White Slide fill */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform transition-duration-[500ms] transition-timing-[cubic-bezier(0.85,0,0.15,1)]" />

            <span className="relative flex items-center gap-4 group-hover:text-black transition-colors transition-duration-[500ms]">
              View All Residences <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationGrid;
