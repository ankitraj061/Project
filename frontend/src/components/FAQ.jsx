import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is personalized skincare?',
    answer: 'Personalized skincare products are formulated to suit your unique skin type and concerns. Our skin quiz helps us understand your needs.',
  },
  {
    question: 'How do I know which products are right for me?',
    answer: 'Our skin quiz analyzes your skin type, goals, and concerns to provide personalized product recommendations.',
  },
  {
    question: 'Are EcoGlam products cruelty-free?',
    answer: 'Yes! All EcoGlam products are cruelty-free and made with natural ingredients.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Depending on your skin type and concern, you may begin to notice improvements within 2-4 weeks.',
  },
  {
    question: 'What is the delivery time for EcoGlam products?',
    answer: 'We offer 2-3 day delivery across the country.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
