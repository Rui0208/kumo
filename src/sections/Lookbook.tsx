"use client"

import { motion } from "framer-motion"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"

export default function Lookbook() {
  return (
    <section id="lookbook" className="w-full min-h-screen relative bg-gray-50">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0" />
      
      {/* 內容區域 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-20 lg:space-y-32 pt-32 lg:pt-48 pb-32"
        >
          {/* 標題區塊 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-16"
          >
        
            
            {/* 副標題 */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 font-serif tracking-wide">
              2025 Autumn/Winter Collection<br />
              </h3>
              <p className="text-lg lg:text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                探索日常的溫暖，展現季節交替的穿搭靈感。<br />
                <br />
                我們的服飾陪伴你的每一天。<br />
              </p>
            </div>
          </motion.div>
          
          {/* Lookbook 展示區塊 */}
          <div className="space-y-20">
            {/* 第一組 - 秋季穿搭 */}
            <div className="space-y-12">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-2xl lg:text-3xl font-light text-gray-800 font-serif tracking-wide mb-4">
                Autumn Collection<br />
                </h4>
                <p className="text-lg font-light text-gray-600">
                  迎接秋天，展現嶄新風格<br />
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                    <Image
                      src="/look-1.jpg"
                      alt="Autumn Look 1 - Warm Knit Collection"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                    <Image
                      src="/look-2.jpg"
                      alt="Autumn Look 2 - Classic Trench Coat"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                    <Image
                      src="/look-3.jpg"
                      alt="Autumn Look 3 - Layered Styling"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* 分隔線 */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-px bg-gray-300" />
            </motion.div>
            
            {/* 第二組 - 冬季穿搭 */}
            <div className="space-y-12">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-2xl lg:text-3xl font-light text-gray-800 font-serif tracking-wide mb-4">
                Winter Collection<br />
                </h4>
                <p className="text-lg font-light text-gray-600">
                  沉浸冬日氛圍，展現自信風采<br />
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                    <Image
                      src="/look-4.jpg"
                      alt="Winter Look 1 - Down Jacket"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                    <Image
                      src="/look-5.jpg"
                      alt="Winter Look 2 - Wool Coat"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* 第三組 - 特別企劃 */}
            <div className="space-y-12">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-2xl lg:text-3xl font-light text-gray-800 font-serif tracking-wide mb-4">
                Special Collection<br />
                </h4>
                <p className="text-lg font-light text-gray-600">
                  為特別日子打造專屬造型<br />
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative max-w-2xl mx-auto"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[2/3]">
                  <Image
                    src="/look-6.jpg"
                    alt="Special Look - Elegant Evening Wear"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
             
              </motion.div>
            </div>
          </div>
          
          {/* 底部文字區塊 */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="relative inline-block">
              <p className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
              2025 Autumn/Winter Lookbook<br />
              </p>
              <p className="text-lg lg:text-xl font-light text-gray-600 mt-4 leading-relaxed">
                讓季節的美好，成為你的日常風格<br />
              </p>
              
              {/* 底部裝飾 */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-8 h-px bg-gray-300" />
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="w-8 h-px bg-gray-300" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 