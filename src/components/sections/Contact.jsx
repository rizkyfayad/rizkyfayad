import React, { useState, memo } from "react";
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-background text-foreground py-12 sm:py-20 lg:py-28 px-4 sm:px-[5%] lg:px-[10%] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12 sm:mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center backdrop-blur-md bg-card border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl hover:shadow-purple-500/10"
        >
          {/* Left Side Text or Illustration */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Let’s Talk
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Have a question, project idea, or just want to say hi? Fill out the form
              and let’s start a conversation. I’ll get back to you as soon as I can!
            </p>
          </div>

          {/* Right Side Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:bg-purple-500/5 shadow-inner transition"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="you@example.com"
              className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:bg-purple-500/5 shadow-inner transition"
            />

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message..."
              className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:bg-purple-500/5 shadow-inner transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Contact;
