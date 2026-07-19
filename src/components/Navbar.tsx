import { useState, useEffect } from "react";
import { Calendar, Menu, X, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onBookRoom: () => void;
}

const Navbar = ({ onBookRoom }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["our_story", "wellness", "dining", "accommodation"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our story", href: "#our_story", id: "our_story" },
    { name: "Wellness", href: "#wellness", id: "wellness" },
    { name: "Dining", href: "#dining", id: "dining" },
    { name: "Suites", href: "#accommodation", id: "accommodation" },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all transition-duration-[700ms] antialiased",
          scrolled
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-8",
        )}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* --- LEFT: Nav Links (Sentence Case) --- */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative">
                  <span
                    className={cn(
                      "text-[15px] font-semibold transition-colors duration-300",
                      scrolled
                        ? activeSection === link.id
                          ? "text-black"
                          : "text-black/50 hover:text-black"
                        : activeSection === link.id
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                    )}>
                    {link.name}
                  </span>
                  {/* Active Indicator Dot */}
                  <div
                    className={cn(
                      "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[hsl(var(--vertex-gold))] transition-all duration-300",
                      activeSection === link.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0",
                    )}
                  />
                </a>
              ))}
            </div>

            {/* --- CENTER: Clean Logo --- */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                to="/"
                onClick={(e) => scrollToSection(e, "#home")}
                className="group">
                <h1
                  className={cn(
                    "font-body text-2xl font-bold tracking-tight transition-all duration-500",
                    scrolled ? "text-black scale-95" : "text-white scale-100",
                  )}>
                  Vertex
                </h1>
              </Link>
            </div>

            {/* --- RIGHT: Action Pill --- */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/my-reservations")}
                className={cn(
                  "hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 shadow-lg",
                  scrolled
                    ? "bg-black text-white hover:bg-[hsl(var(--vertex-gold))]"
                    : "bg-white text-black hover:bg-[hsl(var(--vertex-gold))]",
                )}>
                <Calendar size={16} className="opacity-50" />
                <span>Reservations</span>
              </button>

              <button
                className={cn(
                  "lg:hidden p-2 transition-colors z-[60] relative",
                  mobileOpen || scrolled ? "text-black" : "text-white",
                )}
                onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-all transition-duration-[800ms] transition-timing-[cubic-bezier(0.85,0,0.15,1)]",
          mobileOpen ? "translate-y-0" : "-translate-y-full",
        )}>
        <div className="container mx-auto px-10 h-full flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "font-body text-5xl font-semibold tracking-tight transition-all transition-duration-[600ms]",
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                  activeSection === link.id
                    ? "text-[hsl(var(--vertex-gold))]"
                    : "text-black",
                )}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}>
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={cn(
              "pt-10 border-t border-black/5 transition-all transition-duration-[800ms] delay-500",
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
            )}>
            <button
              onClick={() => {
                onBookRoom();
                setMobileOpen(false);
              }}
              className="w-full py-5 bg-black text-white rounded-full font-semibold text-base flex items-center justify-center gap-3 shadow-xl">
              <BookmarkCheck size={20} />
              Book your stay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
