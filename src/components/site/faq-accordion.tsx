import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion multiple={false} className="divide-y divide-border">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`faq-${i}`}>
          <AccordionTrigger className="px-1 py-4 text-base font-semibold">
            <span className="flex items-start gap-2">
              <span className="text-brand-primary">Q</span>
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4 text-sm leading-relaxed text-muted-foreground">
            <span className="flex items-start gap-2">
              <span className="font-semibold text-brand-accent">A</span>
              <span>{item.answer}</span>
            </span>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
