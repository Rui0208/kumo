"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg"
]

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const next = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* 輪播圖片 */}
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Hero banner"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* 左右切換按鈕 */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={prev}
        aria-label="上一張"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={next}
        aria-label="下一張"
      >
        <ChevronRight size={28} />
      </button>

      {/* 圓點指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${i === index ? 'bg-white' : 'bg-white/30'}`}
            onClick={() => setIndex(i)}
            aria-label={`切換到第${i+1}張`}
          />
        ))}
      </div>
    </div>
  )
} 