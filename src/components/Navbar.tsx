"use client"

import { motion } from "framer-motion"
import { slideDown } from "@/lib/animations"

export default function Navbar() {
  return (
    <motion.nav
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light text-primary font-serif tracking-wider"
          >
            kumoくも
          </motion.div>

          {/* 導航選單 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-10"
          >
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light text-sm tracking-wide">
              關於我們
            </a>
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light text-sm tracking-wide">
              精選商品
            </a>
            <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light text-sm tracking-wide">
              品牌照片
            </a>
            <a href="#lookbook" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light text-sm tracking-wide">
              Lookbook
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light text-sm tracking-wide">
              聯絡我們
            </a>
          </motion.div>

          {/* 手機選單按鈕 */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:hidden p-2"
          >
            <div className="w-6 h-px bg-foreground/80 mb-1.5 transition-colors duration-300"></div>
            <div className="w-6 h-px bg-foreground/80 mb-1.5 transition-colors duration-300"></div>
            <div className="w-6 h-px bg-foreground/80 transition-colors duration-300"></div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
} 