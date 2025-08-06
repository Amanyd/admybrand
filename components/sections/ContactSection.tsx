"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      })

      reset()
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Ready to Get
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Started?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Contact our team to learn how ADmyBRAND AI Suite can transform your marketing strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Name" placeholder="Your full name" {...register("name")} error={errors.name?.message} />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <Input
                  label="Company"
                  placeholder="Your company name"
                  {...register("company")}
                  error={errors.company?.message}
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/90">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your marketing goals..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                  {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card variant="glass">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Free Consultation</h4>
                  <p className="text-white/80">
                    Get a personalized demo and strategy session with our marketing experts.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="glass">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
                  <p className="text-white/80">
                    Our team responds to all inquiries within 2 hours during business days.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="glass">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">Or call us directly</h4>
                <a
                  href="tel:+1-555-0123"
                  className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 (987) 654-3210
                </a>
                <p className="text-white/70 mt-2">Monday - Friday, 9AM - 6PM IST</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
