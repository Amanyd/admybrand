"use client"

import { motion } from "framer-motion"
import Accordion from "@/components/ui/Accordion"

const faqItems = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI is trained on millions of successful marketing campaigns and uses advanced natural language processing to understand your brand voice, target audience, and campaign objectives. It generates content that aligns with your brand guidelines and optimizes for engagement and conversion.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! We offer seamless integrations with over 100+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, LinkedIn, Mailchimp, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also offer comprehensive documentation, video tutorials, and regular webinars.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade security with AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is never shared with third parties and we offer on-premise deployment options for Enterprise customers.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.",
  },
  {
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training where we can train our AI specifically on your brand data, industry specifics, and unique requirements to provide even more personalized and effective content generation.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
