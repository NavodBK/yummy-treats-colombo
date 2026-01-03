import ProductCard from "./ProductCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import weddingCakeRoses from "@/assets/wedding-cake-roses.jpg";
import birthdayCake from "@/assets/birthday-cake-real.jpg";
import birthdayCakeDark from "@/assets/birthday-cake-dark.jpg";
import chocoFusionCookies from "@/assets/choco-fusion-cookies.jpg";
import cupcakes from "@/assets/cupcakes.jpeg";
import miniDesserts from "@/assets/mini-desserts.jpg";
import anniversaryCake from "@/assets/anniversary-cake.jpg";

const products = [
  {
    image: birthdayCake,
    title: "Birthday Cakes",
    description: "Colorful, fun, and customized to make birthdays extra special. From themed cakes to personalized designs.",
    category: "Cakes",
  },
  {
    image: weddingCakeRoses,
    title: "Wedding Cakes",
    description: "Elegant multi-tiered masterpieces for your special day. Crafted with love and attention to every detail.",
    category: "Cakes",
  },
  {
    image: anniversaryCake,
    title: "Anniversary Cakes",
    description: "Romantic designs to celebrate your love story. Hearts, flowers, and sweet memories baked in.",
    category: "Cakes",
  },
  {
    image: chocoFusionCookies,
    title: "Choco Fusion Cookies",
    description: "Rich, decadent chocolate cookies with white chocolate chips. Sweetness you can't stop at one bite!",
    category: "Cookies",
  },
  {
    image: cupcakes,
    title: "Cupcakes",
    description: "Beautifully frosted cupcakes in various flavors. Perfect for birthdays, parties, and special occasions.",
    category: "Mini Desserts",
  },
  {
    image: miniDesserts,
    title: "Mini Desserts & Platters",
    description: "Delightful assortments of donuts, eclairs, swiss rolls, and cake pops. Perfect for parties and gatherings.",
    category: "Platters",
  },
];

const Products = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Delights
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Freshly Baked Happiness
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every treat is handcrafted with premium ingredients and lots of love. 
            Customize any item to make your celebration truly unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="transition-all duration-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: headerVisible ? 'fade-up 0.8s ease-out forwards' : 'none',
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-muted-foreground">
            Want something special? We love creating custom designs!{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:underline transition-all duration-300 hover:scale-105 inline-block"
            >
              Contact us to discuss your ideas
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
