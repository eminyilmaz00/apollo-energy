"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Mission Overview */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600">
            Apollo Green Solutions was founded with a single purpose: to empower industrial and commercial enterprises with the data they need to radically reduce energy waste. We build the hardware that gathers the data, and the software that makes sense of it.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
            <p className="text-slate-600">Industrial energy management requires exact measurements. Our IoT edge devices deliver sub-second accuracy.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainability</h3>
            <p className="text-slate-600">We are committed to helping the industrial sector transition to a low-carbon future through intelligent optimization.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership</h3>
            <p className="text-slate-600">We don't just sell hardware. We partner with our clients to ensure continuous operational improvement.</p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-slate-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Engineering Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Apollo is driven by a diverse team of hardware engineers, data scientists, and full-stack developers operating across Europe. We bring together expertise from aerospace, heavy industry, and modern web technologies to solve the most complex energy challenges.
          </p>
        </motion.div>

      </div>
    </div>
  );
}