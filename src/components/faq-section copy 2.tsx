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
		answer: "ONE provides a suite of free and open AI-powered software, designs, and knowledge to help individuals and enterprises automate tasks, improve operational efficiency, and sell products, services, and ideas at unprecedented speed.",
	},
	{
		id: "item-2",
		question: "Is ONE really free?",
		answer: "Yes, ONE is entirely free to use under the MIT License, allowing you maximum freedom to use, modify, and distribute our software as you see fit.",
	},
	{
		id: "item-3",
		question: "Can I use ONE for my business?",
		answer: "Absolutely! ONE is designed for businesses of all sizes, from startups to Fortune 100 companies, to create AI agents that can significantly enhance your operations and customer engagement.",
	},
	{
		id: "item-4",
		question: "Do I need technical skills to use ONE?",
		answer: "While having technical skills can be beneficial, ONE is designed to be user-friendly. We offer educational resources and courses for both non-technical users and developers.",
	},
	{
		id: "item-5",
		question: "How can ONE help me sell more products or services?",
		answer: "ONE's AI agents can automate and personalize customer interactions across multiple channels, improving engagement, capturing leads, and ultimately boosting sales and profits.",
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
		id: "item-8",
		question: "How does ONE differ from other AI solutions?",
		answer: "Unlike many other solutions, ONE is open-source, free to use, and focuses on empowering users to create AI agents tailored to their specific needs and goals.",
	},
	{
		id: "item-9",
		question: "Can I contribute to the development of ONE?",
		answer: "Yes, we encourage contributions from our community. Whether you're improving existing features or developing new ones, your input is valuable to us.",
	},
	{
		id: "item-10",
		question: "What kind of support can I expect from ONE?",
		answer: "We offer a range of support options, including a Discord channel for real-time assistance, developer resources, and educational courses to help you make the most of ONE.",
	},
	{
		id: "item-11",
		question: "How do I get started with ONE?",
		answer: "Getting started is easy. Visit our website, sign up for the free courses to familiarize yourself with our platform, and start creating your AI agents right away.",
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
		id: "item-15",
		question: "What makes ONE's AI technology unique?",
		answer: "ONE leverages the latest in large language models (LLMs) and AI research, combined with an open-source approach, to provide a powerful, customizable, and accessible AI solution.",
	},
	{
		id: "item-16",
		question: "Are there any hidden costs with ONE?",
		answer: "There are no hidden costs. ONE is free to use under the MIT License, though certain third-party services or integrations you choose to use with ONE may have their own costs.",
	},
	{
		id: "item-17",
		question: "How can I ensure my AI agents are effective?",
		answer: "We recommend leveraging our educational resources to understand best practices for AI agent development and utilizing our community and support channels for guidance.",
	},
	{
		id: "item-18",
		question: "Can ONE help me understand my customers better?",
		answer: "Yes, by analyzing interactions and data collected by your AI agents, ONE can provide valuable insights into customer behavior, preferences, and trends.",
	},
	{
		id: "item-19",
		question: "How does ONE stay ahead of AI advancements?",
		answer: "We continuously invest in research and development, exploring new technologies and methodologies to ensure ONE remains at the forefront of AI innovation.",
	},
	{
		id: "item-20",
		question: "What are the future plans for ONE?",
		answer: "We are committed to continuous improvement and innovation, focusing on enhancing user experience, expanding our educational offerings, and developing new features and integrations.",
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
