"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Cpu, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  // Framer Motion Animasyon Ayarları
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex-grow flex items-center relative overflow-hidden">
        {/* Arka plan efekti */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
          >
            Industrial Energy Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto mb-10"
          >
            Advanced IoT edge products and energy management solutions to monitor, optimize, and drastically reduce your operational costs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* CALL TO ACTION BUTTONS */}
            <Link href="/products" className="bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-4 px-8 rounded-md transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
              Explore Our Edge IoT <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-4 px-8 rounded-md transition-all flex items-center justify-center">
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION & KEY FEATURES */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Apollo Green Solutions?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Built for industrial scale, designed for immediate ROI. Our platform seamlessly bridges your hardware operations with intelligent cloud analytics.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Monitoring</h3>
              <p className="text-slate-600">Track energy consumption across all your facilities with sub-second latency and pinpoint accuracy.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Edge IoT Integration</h3>
              <p className="text-slate-600">Deploy robust edge devices that process data locally for maximum security, speed, and reliability in industrial zones.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Optimization</h3>
              <p className="text-slate-600">Identify inefficiencies automatically through AI-driven insights and reduce your operational energy costs by up to 30%.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION */}
      <section className="py-20 bg-slate-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to optimize your industrial energy consumption?</h2>
          <Link href="/contact" className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-slate-100 transition-colors">
            Get in touch with our engineers
          </Link>
        </div>
      </section>
    </div>
  );
}