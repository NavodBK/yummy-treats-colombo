import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProductCard = ({ image, title, description, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
          {category}
        </span>
      </div>
      <CardContent className="p-5 group-hover:bg-card/50 transition-colors duration-300">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
