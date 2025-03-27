import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface FAQProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQProps) => {
  return (
    <div className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/10 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-blue-200">{question}</span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {isOpen ? (
            <MinusCircle className="h-5 w-5 text-blue-400" />
          ) : (
            <PlusCircle className="h-5 w-5 text-blue-400" />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="px-6 overflow-hidden"
      >
        <p className="text-blue-200/80 pb-4">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does it cost to create a website?",
      answer: "The price depends on the complexity and features of the website. Contact me for a custom quote."
    },
    {
      question: "How much does it cost to set up a Minecraft game mode?",
      answer: "The cost varies based on the mode's complexity and customization. Let's discuss your needs for an exact price."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "It depends on the project. A simple website might take a few days, while a complex one could take weeks."
    },
    {
      question: "How long does it take to configure a Minecraft server?",
      answer: "Setup time varies based on the complexity, but most servers can be configured within a few days."
    },
    {
      question: "Can you optimize my existing website?",
      answer: "Yes! I can improve speed, security, and user experience based on your needs."
    },
    {
      question: "Who developed this website?",
      answer: "This website was created by Hert00l. If you need a custom site, feel free to reach out!"
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, I offer maintenance plans to keep your website or Minecraft server running smoothly."
    },
    {
      question: "Can you add custom plugins to my Minecraft server?",
      answer: "Absolutely! I can develop or configure plugins to match your requirements."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-200">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
