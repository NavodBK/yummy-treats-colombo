import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amaya Fernando",
    rating: 5,
    text: "The birthday cake for my daughter was absolutely stunning! Not only did it look amazing with the butterfly theme, but it tasted incredible too. Will definitely order again!",
    occasion: "Birthday Party",
  },
  {
    name: "Rashmi Perera",
    rating: 5,
    text: "Ordered a wedding cake and it exceeded all our expectations. The attention to detail was remarkable and all our guests loved it. Thank you for making our special day sweeter!",
    occasion: "Wedding",
  },
  {
    name: "Kamal Silva",
    rating: 5,
    text: "The Choco Fusion cookies are addictive! Ordered for our office party and everyone kept asking where they came from. Best cookies in Colombo!",
    occasion: "Office Party",
  },
  {
    name: "Dilini Jayawardena",
    rating: 5,
    text: "Yummy Treats made the cutest bunny cake for my son's birthday. The kids loved it! Fast delivery and great communication throughout.",
    occasion: "Kids Birthday",
  },
  {
    name: "Tharanga Wickrama",
    rating: 5,
    text: "The mini dessert platter was perfect for our anniversary celebration. Beautifully presented and delicious. Highly recommend their services!",
    occasion: "Anniversary",
  },
  {
    name: "Nimali De Silva",
    rating: 5,
    text: "Best baby shower cake ever! The pastel colors and decorations were exactly what I wanted. Everyone asked for the baker's contact!",
    occasion: "Baby Shower",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers who've 
            made their celebrations sweeter with Yummy Treats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-primary">{review.occasion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
