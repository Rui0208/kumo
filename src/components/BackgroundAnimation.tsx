"use client"

import { motion } from "framer-motion"

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-20">
      {/* kumo 英文動畫 */}
      <motion.div
        className="absolute top-1/4 -left-20 text-[200px] lg:text-[300px] font-serif font-light text-[#2d3132] opacity-[0.04]"
        animate={{
          x: [0, 150, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        kumo
      </motion.div>

      {/* くも 日文動畫 */}
      <motion.div
        className="absolute top-1/4 right-32 text-[150px] lg:text-[200px] font-serif font-light text-[#2d3132] opacity-[0.05]"
        animate={{
          x: [0, 200, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      >
        くも
      </motion.div>

      {/* cloud 中央動畫 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] lg:text-[180px] font-serif font-light text-[#2d3132] opacity-[0.03]"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Cloud
      </motion.div>

      {/* fashion 左上動畫 */}
      <motion.div
        className="absolute top-1/6 left-1/4 text-[100px] lg:text-[140px] font-serif font-light text-[#2d3132] opacity-[0.035]"
        animate={{
          y: [0, 80, 0],
          opacity: [0.025, 0.045, 0.025]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      >
        Fashion
      </motion.div>

      {/* style 右下動畫 */}
      <motion.div
        className="absolute bottom-1/6 right-1/4 text-[90px] lg:text-[120px] font-serif font-light text-[#2d3132] opacity-[0.038]"
        animate={{
          x: [0, 100, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
      >
        Design
      </motion.div>
    </div>
  )
} 