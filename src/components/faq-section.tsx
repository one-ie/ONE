import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "What exactly does ONE offer?",
		answer: "ONE provides a suite of free and open AI-powered software, designs, and knowledge to help individuals and enterprises automate tasks, educate, improve operational efficiency, and sell products, services, and ideas at unprecedented speed.",
	},
	{
		id: "item-2",
		question: "Is ONE really free?",
		answer: "Yes, ONE is free to use with your own AI keys. Companies who pay for access to our lab get access to our source code with a MIT License, providing maximum freedom to use, modify, and sell our software as you see fit.",
	},
	{
		id: "item-3",
		question: "Can I use ONE for my business?",
		answer: "Absolutely! ONE is designed for businesses of all sizes, from startups to Fortune 100 companies, to create AI agents that can significantly enhance your operations and customer engagement.",
	},
	{
		id: "item-4",
		question: "Do I need technical skills to use ONE?",
		answer: "No. ONE is designed to be user-friendly. We offer educational resources and courses for both non-technical users and developers.",
	},
	{
		id: "item-6",
		question: "Is my data safe with ONE?",
		answer: "Yes, data privacy and security are our top priorities. You own your data, and we ensure it is stored securely and accessible to you in real-time.",
	},
	{
		id: "item-7",
		question: "Can I customize ONE to fit my brand?",
		answer: "Definitely! ONE is designed to be fully customizable, allowing you to change logos, colors, and other branding elements to match your company's identity.",
	},

	{
		id: "item-11",
		question: "How do I get started with ONE?",
    answer:
      "Getting started is easy. <a href='/docs/get-started'> >> Start Here</a>.",	
	},
	{
		id: "item-12",
		question: "Do I need to install anything to use ONE?",
		answer: "You can use ONE online with your own keys or download it to run on your own servers. The choice is yours based on your preference and needs.",
	},
	{
		id: "item-13",
		question: "What kind of AI agents can I create with ONE?",
		answer: "You can create a wide variety of AI agents, from customer service bots to sales and marketing assistants, tailored to automate and enhance various aspects of your business.",
	},
	{
		id: "item-14",
		question: "Can ONE integrate with my existing systems?",
		answer: "Yes, ONE is designed to seamlessly integrate with a broad range of systems and platforms, enhancing your existing infrastructure with powerful AI capabilities.",
	},
	{
		id: "item-16",
		question: "Are there any hidden costs with ONE?",
		answer: "There are no hidden costs. ONE is free to use under the MIT License, though certain third-party services or integrations you choose to use with ONE may have their own costs.",
	},
];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
