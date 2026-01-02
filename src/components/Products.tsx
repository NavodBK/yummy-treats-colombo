import ProductCard from "./ProductCard";
import weddingCake from "@/assets/wedding-cake.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import anniversaryCake from "@/assets/anniversary-cake.jpg";
import cookies from "@/assets/cookies.jpg";
import miniDesserts from "@/assets/mini-desserts.jpg";

const products = [
  {
    image: birthdayCake,
    title: "Birthday Cakes",
    description: "Colorful, fun, and customized to make birthdays extra special. From themed cakes to personalized designs.",
    category: "Cakes",
  },
  {
    image: weddingCake,
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
    image: cookies,
    title: "Artisan Cookies",
    description: "Classic butter cookies and rich Choco Fusion varieties. Perfect for gifting or treating yourself.",
    category: "Cookies",
  },
  {
    image: miniDesserts,
    title: "Mini Desserts & Platters",
    description: "Delightful assortments of donuts, eclairs, swiss rolls, and cake pops. Perfect for parties and gatherings.",
    category: "Platters",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
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
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want something special? We love creating custom designs!{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:underline"
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
