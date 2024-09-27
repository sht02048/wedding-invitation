import {
  Accordion,
  AccordionContent,
  AccordionDetail,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import minsugAccount from "./text";

export default function Body() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">신랑측</AccordionTrigger>
        <AccordionContent>
          <AccordionDetail detail={minsugAccount} role="신랑" name="채민석"  />
        </AccordionContent>
        </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">신부측</AccordionTrigger>
        <AccordionContent>
          <AccordionDetail detail={minsugAccount} role="신부" name="최다은" />
        </AccordionContent>
        </AccordionItem>
    </Accordion>
  );
}
