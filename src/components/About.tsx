import { Heart, Sparkles, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every creation comes from the heart, baked fresh for your special moments.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We use only the finest ingredients to ensure exceptional taste and freshness.",
  },
  {
    icon: Truck,
    title: "Colombo Delivery",
    description: "Quick and careful delivery across all areas of Colombo, right to your door.",
  },
  {
    icon: Award,
    title: "Custom Designs",
    description: "Your imagination is our canvas. We bring your dream desserts to life.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Spreading Sweetness Across Colombo
            </h2>
            
            {/* Mission Statement */}
            <div className="bg-secondary/50 rounded-lg p-6 mb-8 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground italic">
                "To create unforgettable sweet experiences that bring joy to every celebration. 
                We are dedicated to crafting artisanal cakes and desserts using the finest ingredients, 
                delivered with love and care to homes across Colombo. Every treat we bake is a 
                celebration of tradition, creativity, and the happiness that comes from sharing 
                something truly delicious."
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Based in the heart of Pita Kotte, Yummy Treats CMB has been delighting taste buds 
              with our handcrafted cakes, cookies, and desserts. Whether it's a grand wedding, 
              a joyful birthday, or a cozy family gathering, we're here to make your moments sweeter.
            </p>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
