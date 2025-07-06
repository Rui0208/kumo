// FollowUsPrompt.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function FollowUsPrompt() {
  const [isVisible, setIsVisible] = useState(false)

  // 5秒後顯示提示
  setTimeout(() => {
    setIsVisible(true)
  }, 5000)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-white shadow-xl rounded-lg p-4 max-w-sm z-50 border border-gray-200"
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          
          <div className="pr-6">
            <h3 className="font-medium text-gray-900 mb-2">關注我們</h3>
            <p className="text-sm text-gray-600 mb-3">
              追蹤 kumoくも 獲取最新穿搭靈感！
            </p>
            <div className="flex gap-2">
              <button className="text-xs bg-gray-100 text-gray-900 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                Instagram
              </button>
              <button className="text-xs bg-gray-100 text-gray-900 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                Line
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 