"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroScreen from "@/components/IntroScreen"
import Hero from "@/sections/Hero"
import { useClientSide } from "@/lib/hooks"
import About from "@/sections/About"
import Lookbook from "@/sections/Lookbook"
import Products from "@/sections/Products"
import Contact from "@/sections/Contact"
import FollowUsPrompt from "@/components/FollowUsPrompt"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  const [introCompleted, setIntroCompleted] = useState(false)
  const isClient = useClientSide()
  const hasScrolledRef = useRef(false)

  // 確保頁面加載時就滾動到頂部 - 只執行一次
  useEffect(() => {
    if (isClient && !hasScrolledRef.current) {
      window.scrollTo(0, 0)
      hasScrolledRef.current = true
    }
  }, [isClient])

  const handleIntroComplete = () => {
    setIntroCompleted(true)
    // intro 完成後滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

      {/* 主頁內容 - 在intro期間隱藏 */}
      <div className={introCompleted ? 'block' : 'hidden'}>
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
              <Lookbook />
              <Products />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 獨立的 UI 組件 - 不受主要內容動畫影響 */}
      {introCompleted && (
        <>
          <FollowUsPrompt />
          <ScrollToTop />
        </>
      )}
    </main>
  )
} 