"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Heart, Shield, Download, Star } from "lucide-react";

// Ember particle component
function EmberParticle({
  delay,
  startX,
  size,
  duration,
}: {
  delay: number;
  startX: number;
  size: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: startX,
        backgroundColor: "#C8A55C",
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(200, 165, 92, 0.4)`,
      }}
      initial={{ y: "100vh", opacity: 0, scale: 0.3 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.8, 0.6, 0],
        scale: [0.3, 1, 0.8, 0.2],
        x: [0, -30, 30, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        x: {
          duration: duration * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}

// Floating embers background
function EmberBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    startX: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 10 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <EmberParticle key={particle.id} {...particle} />
      ))}
    </div>
  );
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-stone-50/80 backdrop-blur-xl" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C8A55C] rounded-xl flex items-center justify-center shadow-lg shadow-[#C8A55C]/20">
            <span className="text-stone-900 font-serif text-xl font-bold">U</span>
          </div>
          <span className="text-stone-800 font-serif text-xl tracking-tight">Unfold</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">Features</a>
          <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">How it Works</a>
          <a href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">Pricing</a>
        </div>
        <motion.button
          className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <EmberBackground />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 z-[-1]" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A55C]/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-stone-200/50 backdrop-blur-sm px-4 py-2 rounded-full text-stone-600 text-sm font-medium mb-8">
            <Sparkles size={14} className="text-[#C8A55C]" />
            Now available on the App Store
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-6xl md:text-8xl text-stone-900 mb-6 leading-[0.95] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Your personal
          <br />
          <span className="text-[#C8A55C] italic">spiritual journey</span>
          <br />
          awaits.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Personalized daily devotionals crafted just for you. 
          Deepen your faith, one day at a time.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="bg-stone-900 text-stone-50 px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 shadow-2xl shadow-stone-900/20"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download for iOS
          </motion.button>
          <motion.button
            className="bg-white/50 backdrop-blur-sm text-stone-800 px-8 py-4 rounded-full text-lg font-medium border border-stone-200"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.98 }}
          >
            Watch the film
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-8 text-stone-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <Star size={16} className="text-[#C8A55C] fill-[#C8A55C]" />
            <span className="text-sm font-medium">4.9 App Store Rating</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="text-sm">10,000+ downloads</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Personalized Devotionals",
      description: "AI-crafted daily readings tailored to your spiritual journey and interests.",
    },
    {
      icon: Heart,
      title: "Guided Reflection",
      description: "Journal prompts and reflection questions to deepen your understanding.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "A calm, distraction-free reading experience that honors the sacred.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your spiritual journey is private. We never sell your data.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-stone-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">
            Designed for your
            <br />
            <span className="italic">spiritual growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-200/50 hover:border-[#C8A55C]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="w-14 h-14 bg-[#C8A55C]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C8A55C]/20 transition-colors">
                <feature.icon size={24} className="text-[#C8A55C]" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { number: "01", title: "Choose a Journey", description: "Select from themed devotional journeys on topics that speak to your season of life." },
    { number: "02", title: "Daily Readings", description: "Receive a personalized devotional each day, crafted with scripture and reflection." },
    { number: "03", title: "Reflect & Grow", description: "Journal your thoughts, highlight meaningful passages, and track your spiritual progress." },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C8A55C]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            How it Works
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900">
            Simple. Meaningful.
            <br />
            <span className="italic">Transformative.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col md:flex-row items-start md:items-center gap-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="font-serif text-7xl text-[#C8A55C]/20 font-bold">{step.number}</span>
              <div className="flex-1 border-b border-stone-200 pb-8">
                <h3 className="font-serif text-3xl text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 text-lg max-w-xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-stone-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">
            Go deeper.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Unlock the full Unfold experience and transform your daily spiritual practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <motion.div
            className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-200/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-stone-900 mb-2">Free</h3>
            <p className="text-stone-500 mb-6">Start your journey</p>
            <div className="font-serif text-5xl text-stone-900 mb-8">$0</div>
            <ul className="space-y-4 mb-8">
              {["1 active journey", "Basic devotionals", "Limited highlights"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8A55C]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Premium */}
          <motion.div
            className="bg-stone-900 p-8 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute top-4 right-4 bg-[#C8A55C] text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            <h3 className="font-serif text-2xl text-stone-50 mb-2">Premium</h3>
            <p className="text-stone-400 mb-6">Unlock everything</p>
            <div className="font-serif text-5xl text-stone-50 mb-2">$3.99<span className="text-lg text-stone-400">/mo</span></div>
            <p className="text-stone-500 text-sm mb-8">or $29.99/year (save 25%)</p>
            <ul className="space-y-4 mb-8">
              {["Unlimited journeys", "Premium reading themes", "AI journal prompts", "Daily reminders", "Wallpaper sharing", "Priority support"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-stone-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8A55C]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-[#C8A55C] text-stone-900 font-medium hover:bg-[#B8954C] transition-colors">
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-stone-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8A55C] rounded-xl flex items-center justify-center">
              <span className="text-stone-900 font-serif text-xl font-bold">U</span>
            </div>
            <span className="text-stone-800 font-serif text-xl">Unfold</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Terms</a>
            <a href="/support" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Support</a>
          </div>
          <p className="text-stone-500 text-sm">© 2025 Unfold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="bg-stone-50 min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
