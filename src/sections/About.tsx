"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"

export default function About() {
  const { scrollYProgress } = useScroll()
  
  // 圖片縮放效果：從 0.3 縮放到 0.8
  const imageScale = useTransform(scrollYProgress, [0,0.2], [0.5, 1])

  return (
    <section id="about" className="w-full min-h-screen relative overflow-hidden">
      {/* 背景圖片 */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{ scale: imageScale }}
      >
        <Image
          src="/road.jpg"
          alt="kumoくも 品牌之路"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      
      {/* 內容區域 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-20 lg:space-y-32 pt-32 lg:pt-48"
        >
          {/* 藝術化標題區塊 */}
          <motion.div variants={fadeIn} className="text-center space-y-16">
            {/* 主標題 - 錯位排列 */}
            <motion.div variants={slideUp} className="relative">
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-6xl lg:text-8xl font-light text-white font-serif tracking-widest leading-none">
                  About
                </h2>
                <div className="flex items-center space-x-8">
                  <span className="text-4xl lg:text-6xl font-light text-white/80 font-serif tracking-wider">
                    kumo
                  </span>
                  <span className="text-5xl lg:text-7xl font-light text-white font-serif tracking-widest">
                    くも
                  </span>
                </div>
              </div>
              
              {/* 裝飾線條 */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <div className="w-16 h-px bg-white/40" />
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <div className="w-16 h-px bg-white/40" />
              </div>
            </motion.div>
            
            {/* 藝術化文字內容 */}
            <motion.div variants={slideUp} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* 左側 - 主要理念 */}
                <div className="space-y-8">
                  <div className="relative">
                    <p className="text-2xl lg:text-3xl font-light text-white leading-relaxed">
                      kumoくも 源自日文「雲」
                    </p>
                    <p className="text-lg lg:text-xl font-light text-white/80 mt-4 leading-relaxed">
                      象徵著飄逸自在的生活態度
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-white/20">
                    <p className="text-lg lg:text-xl font-light text-white/90 leading-relaxed">
                      我們相信，服飾不僅是穿著，更是表達內心世界的語言
                    </p>
                  </div>
                </div>
                
                {/* 右側 - 設計理念 */}
                <div className="space-y-8">
                  <div className="relative">
                    <p className="text-xl lg:text-2xl font-light text-white leading-relaxed">
                      每一件精選單品都經過
                    </p>
                    <p className="text-2xl lg:text-3xl font-light text-white mt-2 leading-relaxed">
                      嚴格挑選
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg lg:text-xl font-light text-white/90 leading-relaxed">
                      追求質感與舒適的完美平衡
                    </p>
                    <p className="text-lg lg:text-xl font-light text-white/90 leading-relaxed">
                      從面料的選擇到版型的設計
                    </p>
                    <p className="text-xl lg:text-2xl font-light text-white leading-relaxed">
                      我們堅持日系美學的純粹與簡約
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 底部哲學語句 */}
              <motion.div 
                variants={slideUp}
                className="mt-16 text-center"
              >
                <div className="relative inline-block">
                  {/* 底部裝飾 */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                    <div className="w-8 h-px bg-white/30" />
                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                    <div className="w-8 h-px bg-white/30" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
} 