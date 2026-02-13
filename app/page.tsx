"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Heart, Shield, Download, Star, Moon, Sun, ChevronDown, Compass, PenLine, Leaf, Wind, Flame } from "lucide-react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-secondary" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors border border-border"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Moon size={18} className="text-[#C8A55C]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Sun size={18} className="text-[#C8A55C]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// 3D Card Component (Aceternity-style)
function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 + rotation.x * 2}%, rgba(200, 165, 92, 0.15), transparent 50%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

// Animated Gradient Background
function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary gradient orb */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(200, 165, 92, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-10%", "20%", "-10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Secondary gradient orb */}
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(200, 165, 92, 0.2) 0%, rgba(154, 123, 60, 0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-5%", "10%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Accent orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(200, 165, 92, 0.4) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Ember particle component - FIXED to distribute across full width
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
        left: `${startX}%`, // FIXED: Use percentage for full width distribution
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

// Floating embers background - FIXED distribution
function EmberBackground() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    startX: Math.random() * 100, // 0-100% for full width distribution
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

// iPhone Mockup Component
function IPhoneMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "320px" }}>
      {/* Phone frame */}
      <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
        {/* Outer bezel */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]" />
        {/* Inner bezel */}
        <div className="relative bg-background rounded-[2.5rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground rounded-full z-20" />
          {/* Screen content */}
          <div className="aspect-[9/19.5] bg-gradient-to-b from-background to-secondary p-4 pt-12">
            {children || (
              <div className="h-full flex flex-col">
                {/* Mock app content */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#C8A55C] rounded-2xl mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/app-icon.png" 
                      alt="Unfold" 
                      width={64} 
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">Today&apos;s Devotional</h3>
                </div>
                <div className="flex-1 bg-card rounded-2xl p-4 border border-border">
                  <div className="w-12 h-3 bg-[#C8A55C]/30 rounded-full mb-3" />
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-full" />
                    <div className="h-2 bg-muted rounded w-4/5" />
                    <div className="h-2 bg-muted rounded w-3/4" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="h-2 bg-muted rounded w-full mb-2" />
                    <div className="h-2 bg-muted rounded w-2/3" />
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="flex justify-around mt-4 pt-3 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-[#C8A55C]/20" />
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <div className="w-8 h-8 rounded-full bg-muted" />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute left-[-2px] top-24 w-[2px] h-8 bg-[#3a3a3a] rounded-l" />
        <div className="absolute left-[-2px] top-36 w-[2px] h-16 bg-[#3a3a3a] rounded-l" />
        <div className="absolute left-[-2px] top-56 w-[2px] h-16 bg-[#3a3a3a] rounded-l" />
        <div className="absolute right-[-2px] top-40 w-[2px] h-20 bg-[#3a3a3a] rounded-r" />
      </div>
      {/* Reflection */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

// Navigation - FIXED alignment and app icon
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
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-[#C8A55C]/20 overflow-hidden">
            <Image 
              src="/app-icon.png" 
              alt="Unfold" 
              width={40} 
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-foreground font-serif text-xl tracking-tight">Unfold</span>
        </div>
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">How it Works</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            href="#pricing"
            className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section with GSAP
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text animation for title
      gsap.fromTo(
        ".hero-title-word",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
      );

      // Buttons animation
      gsap.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.3, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <EmberBackground />
      <AnimatedGradientBackground />
      
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A55C]/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C8A55C]/5 rounded-full blur-3xl"
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
          <span className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full text-muted-foreground text-sm font-medium mb-8 border border-border">
            Now available on the App Store
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="font-serif text-6xl md:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight overflow-hidden"
        >
          <span className="hero-title-word inline-block">A sacred</span>{" "}
          <span className="hero-title-word inline-block text-[#C8A55C] italic">daily practice</span>
          <br />
          <span className="hero-title-word inline-block">crafted just for you.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Personalized devotionals that meet you where you are. Each day's reading is designed around your spiritual season.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="https://apps.apple.com/app/unfold"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer pill container with border */}
            <div className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#C8A55C] text-[#1a1a1a] font-semibold text-lg overflow-hidden shadow-[0_0_40px_rgba(200,165,92,0.4)] border-2 border-[#C8A55C] ring-4 ring-[#C8A55C]/20">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C8A55C] via-[#e8d4a8] to-[#C8A55C]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Animated glow pulse */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-[#C8A55C]"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ filter: "blur(20px)" }}
              />
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download size={22} />
                </motion.div>
                Download for iOS
              </span>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>
          </motion.a>
        </div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="flex items-center gap-2">
            <Star size={16} className="text-[#C8A55C] fill-[#C8A55C]" />
            <span className="text-sm font-medium">4.9 App Store Rating</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <span className="text-sm">10,000+ downloads</span>
        </motion.div>
      </motion.div>

      {/* FIXED: Animated chevron scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-[#C8A55C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Nature-inspired animated feature card
function NatureFeatureCard({ 
  feature, 
  index 
}: { 
  feature: { icon: React.ElementType; title: string; description: string; natureEffect: string };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Different nature-inspired background effects
  const renderNatureEffect = () => {
    switch (feature.natureEffect) {
      case 'ember':
        return (
          <>
            {/* Floating embers */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#C8A55C]"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '20%',
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 50% 80%, rgba(200, 165, 92, 0.15) 0%, transparent 60%)',
              }}
            />
          </>
        );
      case 'wind':
        return (
          <>
            {/* Wind lines */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#C8A55C]/30 to-transparent"
                style={{
                  width: '60%',
                  top: `${30 + i * 15}%`,
                  left: '-10%',
                }}
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );
      case 'leaf':
        return (
          <>
            {/* Floating particles like falling leaves */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#C8A55C]/40"
                style={{
                  left: `${10 + i * 15}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0%', '400%'],
                  x: [0, 20 + i * 5, -10, 15, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );
      case 'glow':
        return (
          <>
            {/* Pulsing glow orbs */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 60 + i * 30,
                  height: 60 + i * 30,
                  background: `radial-gradient(circle, rgba(200, 165, 92, ${0.2 - i * 0.05}) 0%, transparent 70%)`,
                  right: `${10 + i * 20}%`,
                  bottom: `${10 + i * 15}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      className="feature-card group relative bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border hover:border-[#C8A55C]/30 transition-all duration-500 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Nature background effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        {renderNatureEffect()}
      </div>
      
      {/* Spotlight effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 165, 92, 0.1), transparent 40%)`,
        }}
      />
      
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10"
      >
        <div className="w-14 h-14 bg-[#C8A55C]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C8A55C]/20 transition-colors">
          <feature.icon size={24} className="text-[#C8A55C]" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </motion.div>
    </div>
  );
}

// Features Section - ENHANCED with nature-inspired animations
function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: BookOpen,
      title: "Personalized Devotionals",
      description: "AI-crafted daily readings tailored to your spiritual journey and interests.",
      natureEffect: "ember",
    },
    {
      icon: Heart,
      title: "Guided Reflection",
      description: "Journal prompts and reflection questions to deepen your understanding.",
      natureEffect: "wind",
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "A calm, distraction-free reading experience that honors the sacred.",
      natureEffect: "leaf",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your spiritual journey is private. We never sell your data.",
      natureEffect: "glow",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger reveal
      gsap.fromTo(
        ".feature-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
            Designed for your
            <br />
            <span className="italic">spiritual growth</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <NatureFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// App Showcase Section with iPhone Mockup
function AppShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Phone reveal with parallax
      gsap.fromTo(
        phoneRef.current,
        { x: 60, opacity: 0, rotateY: -15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on phone while scrolling
      gsap.to(phoneRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
              The Experience
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Sacred moments,
              <br />
              <span className="italic">anywhere.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Unfold brings the beauty of daily devotion to your pocket. 
              With an elegant, distraction-free design, you can focus on what matters most.
            </p>
            <ul className="space-y-4">
              {[
                "Daily push notifications for your devotional",
                "Offline reading for your commute",
                "Seamless sync across devices",
                "Beautiful typography that reads like a book",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-[#C8A55C]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div ref={phoneRef} className="flex justify-center">
            <IPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section - REDESIGNED as a journey path
function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  const steps = [
    { 
      number: "01", 
      title: "Choose a Journey", 
      description: "Select from themed devotional journeys on topics that speak to your season of life.",
      icon: Compass,
    },
    { 
      number: "02", 
      title: "Daily Readings", 
      description: "Receive a personalized devotional each day, crafted with scripture and reflection.",
      icon: BookOpen,
    },
    { 
      number: "03", 
      title: "Reflect & Grow", 
      description: "Journal your thoughts, highlight meaningful passages, and track your spiritual progress.",
      icon: PenLine,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Journey path animation
      gsap.fromTo(
        ".journey-path",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: journeyRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Steps reveal with scroll trigger
      gsap.fromTo(
        ".journey-step",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: journeyRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Step icons bounce animation
      gsap.fromTo(
        ".step-icon",
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: journeyRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-[#C8A55C]/5 to-transparent -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            How it Works
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground">
            Your journey
            <br />
            <span className="italic">begins here.</span>
          </h2>
        </div>

        <div ref={journeyRef} className="relative">
          {/* Journey path line - desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 origin-left">
            <div className="journey-path absolute inset-0 bg-gradient-to-r from-[#C8A55C]/20 via-[#C8A55C] to-[#C8A55C]/20 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="journey-step relative flex flex-col items-center text-center"
              >
                {/* Step icon circle */}
                <div className="relative mb-6">
                  <motion.div 
                    className="step-icon w-20 h-20 rounded-full bg-card border-2 border-[#C8A55C] flex items-center justify-center shadow-lg shadow-[#C8A55C]/20 z-10 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon size={32} className="text-[#C8A55C]" />
                  </motion.div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#C8A55C]/20 blur-xl -z-10" />
                </div>
                
                {/* Step number */}
                <span className="font-serif text-sm text-[#C8A55C]/60 font-medium mb-2">
                  Step {step.number}
                </span>
                
                {/* Step title */}
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                  {step.title}
                </h3>
                
                {/* Step description */}
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
                
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-[#C8A55C] to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Journey end decoration */}
          <motion.div 
            className="hidden md:flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[#C8A55C]/60">
              <Leaf size={16} />
              <span className="text-sm font-medium">Begin your transformation</span>
              <Leaf size={16} className="scale-x-[-1]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section with 3D Cards - ADDED gold border
function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards reveal
      gsap.fromTo(
        ".pricing-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-32 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-[#C8A55C] font-medium text-sm tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
            Go deeper.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full Unfold experience and transform your daily spiritual practice.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <Card3D className="pricing-card">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#C8A55C]/30 h-full">
              <h3 className="font-serif text-2xl text-foreground mb-2">Free</h3>
              <p className="text-muted-foreground mb-6">Start your journey</p>
              <div className="font-serif text-5xl text-foreground mb-8">$0</div>
              <ul className="space-y-4 mb-8">
                {["1 active journey", "Basic devotionals", "Limited highlights"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A55C]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-[#C8A55C]/30 text-foreground font-medium hover:bg-[#C8A55C]/10 transition-colors">
                Get Started
              </button>
            </div>
          </Card3D>

          {/* Premium Plan */}
          <Card3D className="pricing-card">
            <div className="bg-foreground p-8 rounded-3xl border-2 border-[#C8A55C] relative overflow-hidden h-full">
              <div className="absolute top-4 right-4 bg-[#C8A55C] text-background text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="font-serif text-2xl text-background mb-2">Premium</h3>
              <p className="text-background/60 mb-6">Unlock everything</p>
              <div className="font-serif text-5xl text-background mb-2">$3.99<span className="text-lg text-background/60">/mo</span></div>
              <p className="text-background/50 text-sm mb-8">or $29.99/year (save 25%)</p>
              <ul className="space-y-4 mb-8">
                {["Unlimited journeys", "Premium reading themes", "AI journal prompts", "Daily reminders", "Wallpaper sharing", "Priority support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-background/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A55C]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-[#C8A55C] text-background font-medium hover:bg-[#B8954C] transition-colors">
                Start Free Trial
              </button>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}

// Footer - FIXED app icon
function Footer() {
  return (
    <footer className="bg-secondary/30 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <Image 
                src="/app-icon.png" 
                alt="Unfold" 
                width={40} 
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-foreground font-serif text-xl">Unfold</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms</a>
            <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Support</a>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Unfold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
