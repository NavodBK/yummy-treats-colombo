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
        className="absolute inset-0 bg-cover bg-center"
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
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
            Sweet Moments,{" "}
            <span className="text-primary">Crafted Perfectly</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
            From stunning wedding cakes to delightful birthday treats, we create 
            custom desserts that make every celebration unforgettable. 
            Fresh, delicious, and delivered to your doorstep in Colombo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-lg px-8 hover:scale-105 transition-transform"
            >
              Explore Our Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 hover:scale-105 transition-transform"
            >
              Order Custom Cake
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">100%</p>
              <p className="text-sm text-muted-foreground">Fresh Ingredients</p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">Same Day</p>
              <p className="text-sm text-muted-foreground">Delivery Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
