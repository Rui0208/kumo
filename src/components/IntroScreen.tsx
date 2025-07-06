"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeIn, scaleIn } from "@/lib/animations"
import { useClientSide } from "@/lib/hooks"

interface IntroScreenProps {
  onComplete: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const isClient = useClientSide()

  useEffect(() => {
    if (!isClient) return

    // 在 intro 期間禁止頁面滾動
    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        // 恢復頁面滾動
        document.body.style.overflow = 'auto'
        document.body.style.height = 'auto'
        onComplete()
      }, 1000) // 等待淡出動畫完成後觸發 onComplete
    }, 3000)

    return () => {
      clearTimeout(timer)
      // 清理時恢復滾動
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [onComplete, isClient, isVisible])

  // 在客戶端渲染之前不顯示任何內容，避免 hydration mismatch
  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#EAE8E4] w-screen h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          suppressHydrationWarning
        >
          <div className="text-center">
            {/* 品牌 Logo/名稱 */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <h1 className="text-7xl font-light text-gray-800 mb-6 font-serif tracking-wider">
                kumoくも
              </h1>
              <div className="w-32 h-px bg-gray-600 mx-auto mb-6 opacity-60" />
            </motion.div>

            {/* 簡化的載入動畫 */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <div className="flex space-x-3">
                <motion.div
                  className="w-1 h-1 bg-gray-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-1 h-1 bg-gray-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-1 h-1 bg-gray-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
              </div>
            </motion.div>

            {/* 進度條 */}
            <motion.div
              className="mt-12 w-48 h-px bg-gray-300 mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-gray-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 