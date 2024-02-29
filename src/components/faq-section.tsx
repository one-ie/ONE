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
		answer: "ONE provides access to a suite of free and open AI-powered software, designs, and knowledge to help individuals and enterprises sell products, services, and ideas at unprecedented speed.",
	},
	{
		id: "item-2",
		question: "Is ONE really free?",
		answer: "Yes, ONE cloud is free to use with your own AI keys. You pay for AI completions at cost. We are working on a free cloud service that allows you to use your own database. If you pay to join our lab you get access to our source code with a MIT License, providing maximum freedom to use, modify, and profit from our software as you see fit.",
	},
	{
		id: "item-3",
		question: "Can I use ONE for my business?",
		answer: "Absolutely! ONE is designed for businesses of all sizes, from startups to Fortune 100 companies, to create AI agents that can significantly enhance your operations and customer engagement.",
	},
	{
		id: "item-4",
		question: "Do I need technical skills to use ONE?",
		answer: "No. ONE is user-friendly. Your AI will make your life easier. We offer educational resources and courses for both non-technical users and developers.",
	},
	{
		id: "item-6",
		question: "Is my data safe with ONE?",
		answer: "Yes, data privacy and security are our top priorities. All customer data is encrypted at rest with AES-256 and in transit via TLS.Sensitive information like access tokens and keys are encrypted at the application level before they are stored in the database. Enterprise customers can have SSO, SOC2 Type 2 and HIPAA compliance.",
	},
	{
		id: "item-7",
		question: "Can I whitelabel ONE to fit my brand?",
    answer:
      "Definitely! Members of ONE Lab have full access to modifiy our source code and we can also host ONE for you with your logo, colours and brand.",
	},

	{
		id: "item-11",
		question: "How do I get started with ONE?",
    answer:
      "Getting started is easy. Just click the Get Started button and your AI will be ready and activated in a few minutes. ",	
	},
	{
		id: "item-12",
		question: "Do I need to install anything to use ONE?",
		answer: "You can use ONE online with your own keys or download it to run on your own servers. The choice is yours based on your preference and needs.",
	},
	{
		id: "item-13",
		question: "What kind of AI agents can I create with ONE?",
		answer: "You can create a wide variety of AI agents, for marketing, sales, customer service, design, engineering, education and intelligence.",
	},
	{
		id: "item-14",
		question: "Can ONE integrate with my existing systems?",
		answer: "Yes, ONE is designed to integrate with a broad range of systems and platforms, enhancing your existing infrastructure with powerful AI capabilities.",
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
