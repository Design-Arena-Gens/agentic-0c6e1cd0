'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Truck, Building2, Monitor, Recycle, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  glowColor: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: ServiceCard[] = [
    {
      icon: Truck,
      title: "Doorstep Scrap Pickup",
      description: "Seamless collection service that comes to you",
      features: ["24/7 Scheduling", "Real-time Tracking", "Instant Quotes"],
      accentColor: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      icon: Building2,
      title: "Corporate Waste Solutions",
      description: "Enterprise-grade sustainability programs",
      features: ["Custom Contracts", "Compliance Reports", "Bulk Discounts"],
      accentColor: "from-violet-400 via-purple-500 to-fuchsia-600",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      icon: Monitor,
      title: "E-waste Recycling",
      description: "Certified electronic disposal with data protection",
      features: ["Data Destruction", "Certified Recycling", "Asset Recovery"],
      accentColor: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      icon: Recycle,
      title: "Circular Economy Programs",
      description: "Transform waste into valuable resources",
      features: ["Material Recovery", "Upcycling Services", "Carbon Credits"],
      accentColor: "from-orange-400 via-amber-500 to-yellow-600",
      glowColor: "rgba(251, 146, 60, 0.3)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-6"
        >
          <Sparkles className="w-12 h-12 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="text-gradient from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Premium Services
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          Experience the future of waste management with our innovative, sustainable solutions
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
          <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                }}
              />

              {/* Card */}
              <div className="relative h-full glass-effect rounded-3xl p-8 transition-all duration-500 hover:border-white/20 overflow-hidden">
                {/* Animated gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                  }}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2.5s linear infinite',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={floatVariants}
                    animate="animate"
                    className="mb-6 relative inline-block"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.accentColor} p-5 shadow-2xl relative`}>
                      <Icon className="w-full h-full text-white" strokeWidth={2} />

                      {/* Icon glow */}
                      <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                        style={{ background: `linear-gradient(135deg, ${service.glowColor}, transparent)` }}
                      />
                    </div>

                    {/* Floating particles */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ background: service.glowColor }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(135deg, white, ${service.glowColor})`,
                      }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accentColor}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${service.accentColor} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
                    style={{
                      boxShadow: `0 10px 40px -10px ${service.glowColor}`,
                    }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />

                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 text-center"
      >
        <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-gray-400 text-sm font-medium">Trusted by 10,000+ customers worldwide</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
