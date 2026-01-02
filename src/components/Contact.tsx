import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "0781539664";
  const whatsappLink = `https://wa.me/94781539664?text=${encodeURIComponent("Hi! I'd like to place an order from Yummy Treats CMB.")}`;

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact us to discuss your order, ask about customizations, or get a quote 
            for your special event. We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <a
              href={`tel:${phoneNumber}`}
              className="text-primary hover:underline font-medium"
            >
              {phoneNumber}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Message Us
            </a>
          </div>

          {/* Location */}
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Pita Kotte, Colombo</p>
          </div>

          {/* Delivery */}
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Delivery</h3>
            <p className="text-muted-foreground">All Colombo Areas</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Make Your Event Sweet?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Whether it's a birthday, wedding, or just because – we're here to create 
            the perfect treat for you. Order now via WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
