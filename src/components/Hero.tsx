import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-scale-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            🎂 Handcrafted with Love in Colombo
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "150ms" }}>
            Sweet Moments,{" "}
            <span className="text-primary inline-block animate-pulse">Crafted Perfectly</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "300ms" }}>
            From stunning wedding cakes to delightful birthday treats, we create 
            custom desserts that make every celebration unforgettable. 
            Fresh, delicious, and delivered to your doorstep in Colombo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "450ms" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Order Custom Cake
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="text-center group cursor-default hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">500+</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Happy Customers</p>
            </div>
            <div className="text-center group cursor-default hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fresh Ingredients</p>
            </div>
            <div className="text-center group cursor-default hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">Same Day</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Delivery Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
