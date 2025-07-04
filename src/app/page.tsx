"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroScreen from "@/components/IntroScreen"
import Hero from "@/sections/Hero"
import { fadeIn } from "@/lib/animations"
import { useClientSide } from "@/lib/hooks"
import About from "@/sections/About"

export default function Home() {
  const [introCompleted, setIntroCompleted] = useState(false)
  const isClient = useClientSide()

  const handleIntroComplete = () => {
    setIntroCompleted(true)
  }

  // 在客戶端渲染之前顯示簡化的載入狀態
  if (!isClient) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-5xl font-light text-black mb-8 font-serif tracking-wider">
              kumoくも
            </h1>
            <div className="w-24 h-px bg-secondary mx-auto mb-8 opacity-60" />
       
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* IntroScreen 進場動畫 */}
      <IntroScreen onComplete={handleIntroComplete} />

      {/* 主頁內容 */}
      <AnimatePresence>
        {introCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="min-h-screen"
            suppressHydrationWarning
          >
            <Hero />
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 