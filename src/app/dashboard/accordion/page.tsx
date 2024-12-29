import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
	{
		id: "1",
		question: "Is it accessible?",
		answer: "Yes. It adheres to the WAI-ARIA design pattern.",
	},
	{
		id: "2",
		question: "Is it styled?",
		answer:
			"Yes. It comes with default styles that matches the other components&apos; aesthetic.",
	},
	{
		id: "3",
		question: "Is it animated?",
		answer:
			"Yes. It&apos;s animated by default, but you can disable it if you prefer.",
	},
];

export default function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{data.map((item) => (
				<AccordionItem value={item.id} key={item.id}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
