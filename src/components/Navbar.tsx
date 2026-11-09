import { useState, useEffect } from "react";
import { Calendar, Menu, X, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoDark from "@/assets/logo-dark.svg";

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
      setScrolled(window.scrollY > 40);
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
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          mobileOpen
            ? "bg-transparent py-6"
            : scrolled
              ? "bg-black/50 backdrop-blur-md py-4 shadow-lg shadow-black/25"
              : "bg-transparent py-6",
        )}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
            <div className="flex items-center">
              <Link
                to="/"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex items-center gap-3.5 group">
                <img
                  src={logoDark}
                  alt="Vertex"
                  className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[17px] font-semibold tracking-[0.24em] uppercase text-white transition-opacity duration-300 group-hover:opacity-90">
                  Vertex
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative group py-1">
                  <span
                    className={cn(
                      "text-[15px] font-normal transition-colors duration-200",
                      activeSection === link.id
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                    )}>
                    {link.name}
                  </span>
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[hsl(var(--vertex-gold))] transition-all duration-200",
                      activeSection === link.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0",
                    )}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => navigate("/my-reservations")}
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium bg-white text-neutral-900 hover:bg-neutral-100 transition-colors shadow-sm">
                <Calendar size={15} className="opacity-60" />
                <span>Reservations</span>
              </button>

              <button
                aria-label="Toggle Navigation"
                className="lg:hidden p-2 text-white z-[70] ml-auto"
                onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[55] bg-[#0c0c0c] transition-opacity duration-300 ease-in-out lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}>
        <div className="container mx-auto px-7 h-full flex flex-col justify-between pt-28 pb-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "text-[28px] font-light tracking-tight transition-colors py-1",
                  activeSection === link.id
                    ? "text-[hsl(var(--vertex-gold))]"
                    : "text-white hover:text-white/80",
                )}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onBookRoom();
                setMobileOpen(false);
              }}
              className="w-full py-4 bg-white text-neutral-900 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-neutral-100 transition-colors">
              <BookmarkCheck size={18} />
              Book your stay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
