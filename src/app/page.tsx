"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroScreen from "@/components/IntroScreen"
import Navbar from "@/components/Navbar"
import { fadeIn } from "@/lib/animations"
import { useClientSide } from "@/lib/hooks"

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
            <h1 className="text-5xl font-light text-primary mb-8 font-serif tracking-wider">
              kumoくも
            </h1>
            <div className="w-24 h-px bg-secondary mx-auto mb-8 opacity-60" />
            <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              精選日系服飾，展現獨特品味與質感生活
            </p>
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
            {/* 導覽列 */}
            <Navbar />

            {/* 主頁內容 */}
            <div className="flex items-center justify-center min-h-screen bg-background pt-20">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-center max-w-4xl mx-auto px-4"
              >
                <h1 className="text-5xl font-light text-primary mb-8 font-serif tracking-wider">
                  kumoくも
                </h1>
                <div className="w-24 h-px bg-secondary mx-auto mb-8 opacity-60" />
                <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                  精選日系服飾，展現獨特品味與質感生活
                </p>
                <p className="text-base text-muted-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
                  我們致力於為您精選最優質的日系服飾，每一件商品都承載著日本匠人的精神與美學。
                  在這裡，您將發現屬於自己的獨特風格。
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 