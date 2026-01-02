import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Pita Kotte, Colombo
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              0781539664
            </span>
          </div>
          <span className="text-primary font-medium">🚚 We deliver across Colombo!</span>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-serif font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Yummy Treats<span className="text-accent">CMB</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Products", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")}>
              Order Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {["Products", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Order Now
              </Button>
              <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                <p className="flex items-center gap-2 py-1">
                  <Phone className="h-4 w-4" /> 0781539664
                </p>
                <p className="flex items-center gap-2 py-1">
                  <MapPin className="h-4 w-4" /> Pita Kotte, Colombo
                </p>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
