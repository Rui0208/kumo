"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import HeroSlideshow from "./HeroSlideshow"
import { fadeIn, slideUp } from "@/lib/animations"

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex  items-center justify-center overflow-hidden">
      {/* 輪播圖背景 */}
      <div className="absolute inset-0 z-0">
        <HeroSlideshow />
      </div>



      {/* 主要內容 */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-light mb-6 font-serif tracking-wider">
            kumoくも
          </h1>
          <div className="w-32 h-px bg-white/60 mx-auto mb-8" />
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
         
        </motion.div>

     
      </div>

      {/* Scroll Down 箭頭 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors duration-300"
          whileHover={{ y: 5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
} 