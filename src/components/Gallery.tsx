import { useState } from "react";
import { X } from "lucide-react";

import galleryDesserts1 from "@/assets/gallery-desserts-1.jpg";
import galleryDesserts2 from "@/assets/gallery-desserts-2.jpg";
import galleryBabyShower from "@/assets/gallery-baby-shower.jpg";
import galleryBunnyCake from "@/assets/gallery-bunny-cake.jpg";
import galleryWelcomeBaby from "@/assets/gallery-welcome-baby.jpg";
import galleryDripCake from "@/assets/gallery-drip-cake.jpg";
import galleryDadCake from "@/assets/gallery-dad-cake.jpg";
import cakePops from "@/assets/cake-pops.jpg";
import weddingCakeRoses from "@/assets/wedding-cake-roses.jpg";

const galleryImages = [
  { src: weddingCakeRoses, alt: "Elegant wedding cake with roses", category: "Wedding" },
  { src: galleryBunnyCake, alt: "Cute bunny birthday cake", category: "Birthday" },
  { src: galleryDripCake, alt: "Chocolate drip birthday cake", category: "Birthday" },
  { src: galleryBabyShower, alt: "Beautiful baby shower setup", category: "Baby Shower" },
  { src: galleryWelcomeBaby, alt: "Welcome baby cake with cupcakes", category: "Baby Shower" },
  { src: galleryDadCake, alt: "Father's birthday cake", category: "Birthday" },
  { src: galleryDesserts1, alt: "Dessert platter with donuts and cake pops", category: "Platters" },
  { src: galleryDesserts2, alt: "Cupcakes and macarons display", category: "Platters" },
  { src: cakePops, alt: "Chocolate cake pops with sprinkles", category: "Mini Desserts" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Creations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Gallery of Sweet Memories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through some of our favorite creations. Each one is crafted with 
              love and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(image.src)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
