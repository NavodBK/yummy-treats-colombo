import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by calling us at 0781539664 or messaging us on WhatsApp. Simply share your requirements including the type of cake/dessert, design preferences, size, and delivery date. We'll provide a quote and confirm your order.",
  },
  {
    question: "How much advance notice do you need for custom cakes?",
    answer:
      "For standard cakes and desserts, we recommend at least 2-3 days advance notice. For elaborate wedding cakes or highly customized designs, please order at least 1-2 weeks in advance to ensure we can create your perfect cake.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver to all areas within Colombo. Our base is in Pita Kotte, and delivery charges vary based on distance. Same-day delivery is available for orders placed before noon (subject to availability).",
  },
  {
    question: "Can I customize the cake design and flavors?",
    answer:
      "Absolutely! We specialize in custom creations. You can choose your preferred flavors (vanilla, chocolate, red velvet, butter cake, and more), fillings, frosting styles, and decorations. Share your ideas or reference photos, and we'll bring your vision to life.",
  },
  {
    question: "What sizes are available for cakes?",
    answer:
      "We offer cakes in various sizes to suit your needs: 1 lb (serves 4-6), 1.5 lb (serves 8-10), 2 lb (serves 12-15), 3 lb (serves 18-22), and larger multi-tier cakes for weddings and big events. We'll help you choose the right size based on your guest count.",
  },
  {
    question: "Do you offer eggless or sugar-free options?",
    answer:
      "Yes, we can accommodate dietary requirements including eggless cakes. For sugar-free or other special dietary needs, please mention this when placing your order so we can advise on available options.",
  },
  {
    question: "What is your payment method?",
    answer:
      "We accept cash on delivery, bank transfers, and online payments. A 50% advance payment is required for custom orders, with the balance due upon delivery.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "Orders can be modified or cancelled up to 48 hours before the scheduled delivery date for standard cakes. For custom designs where work has already begun, modifications may be limited. Please contact us as soon as possible if you need to make changes.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Find everything you need to know 
            about ordering, delivery, and customization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:underline"
            >
              Contact us directly
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
