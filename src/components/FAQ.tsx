
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

// FAQ data
const faqItems = [
  {
    question: "What services do you offer?",
    answer: "I offer a range of web development services including responsive website design, frontend and backend development, UI/UX design, database design, and technical consultation."
  },
  {
    question: "What technologies do you work with?",
    answer: "I specialize in modern web technologies like React, TypeScript, Node.js, and various CSS frameworks like Tailwind CSS. I'm always learning new technologies to stay current with industry trends."
  },
  {
    question: "How do you approach new projects?",
    answer: "I start with understanding the client's needs through detailed discussions. Then I create wireframes and prototypes before moving into development. I maintain regular communication throughout the process to ensure the final product meets all requirements."
  },
  {
    question: "Do you offer maintenance after project completion?",
    answer: "Yes, I offer maintenance packages for all completed projects. This includes regular updates, bug fixes, and content changes as needed."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while more complex applications can take several months. I always provide a detailed timeline during the initial consultation."
  },
  {
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I have experience working with clients from all over the world. We can communicate through email, video calls, and project management tools to ensure smooth collaboration regardless of location."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background dark:bg-background/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are answers to some common questions about my services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/40 data-[state=open]:bg-muted/40">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
