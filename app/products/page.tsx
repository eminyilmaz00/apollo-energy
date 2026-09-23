"use client";

import { motion } from "framer-motion";
import { Server, Activity, Cpu, Wifi, Shield, Zap, BarChart3, Settings } from "lucide-react";

// Ürün verilerini bir dizi (array) içinde tutmak, React'te temiz kod yazımının göstergesidir.
const products = [
  {
    id: 1,
    title: "Apollo Edge Gateway Pro",
    description: "Industrial-grade IoT gateway that aggregates sensor data locally and securely transmits to the cloud dashboard with zero data loss.",
    icon: <Server className="w-12 h-12 text-green-500" />,
    specs: [
      { text: "Sub-second latency processing", icon: <Activity size={16} /> },
      { text: "End-to-end military grade encryption", icon: <Shield size={16} /> },
      { text: "Supports Modbus, MQTT, & OPC UA", icon: <Settings size={16} /> }
    ]
  },
  {
    id: 2,
    title: "Smart Meter Node X1",
    description: "High-precision edge sensor designed for heavy machinery and 3-phase power monitoring in harsh industrial environments.",
    icon: <Cpu className="w-12 h-12 text-green-500" />,
    specs: [
      { text: "IP67 rated for industrial zones", icon: <Zap size={16} /> },
      { text: "Wireless mesh networking", icon: <Wifi size={16} /> },
      { text: "10-year battery life", icon: <Activity size={16} /> }
    ]
  },
  {
    id: 3,
    title: "Apollo Cloud Analytics",
    description: "AI-powered digital twin platform that visualizes your energy flow, predicts maintenance needs, and automates cost saving.",
    icon: <BarChart3 className="w-12 h-12 text-green-500" />,
    specs: [
      { text: "Real-time anomaly detection", icon: <Activity size={16} /> },
      { text: "Automated ESG reporting", icon: <Settings size={16} /> },
      { text: "Custom API integrations", icon: <Server size={16} /> }
    ]
  }
];

export default function ProductsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Sayfa Başlığı */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Hardware Meets <span className="text-green-500">Intelligence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Explore our suite of edge devices and cloud software engineered to optimize your industrial energy consumption.
          </motion.p>
        </div>

        {/* Ürün Kartları (Grid Yapısı) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 bg-slate-50 w-20 h-20 rounded-xl flex items-center justify-center border border-slate-100">
                {product.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h2>
              <p className="text-slate-600 mb-8 flex-grow">{product.description}</p>
              
              {/* Teknik Özellikler */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-slate-600 text-sm">
                      <span className="text-green-500 mr-3">{spec.icon}</span>
                      {spec.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}