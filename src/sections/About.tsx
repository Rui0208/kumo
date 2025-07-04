"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"

export default function About() {
  const { scrollYProgress } = useScroll()
  
  // 圖片縮放效果：從 0.3 縮放到 0.8
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [0.3, 1])

  return (
    <section id="about" className="w-full min-h-screen relative overflow-hidden">
      {/* 背景圖片 */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{ scale: imageScale }}
      >
        <img 
          src="/road.jpg" 
          alt="kumoくも 品牌之路"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
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
          {/* 品牌介紹文字區塊 */}
          <motion.div variants={fadeIn} className="text-center space-y-12">
            <motion.div variants={slideUp} className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-light text-white font-serif tracking-wider">
                About kumoくも
              </h2>
              <div className="w-24 h-px bg-white opacity-60 mx-auto" />
            </motion.div>
            
            <motion.div variants={slideUp} className="max-w-4xl mx-auto space-y-8 text-white leading-relaxed">
              <p className="text-xl lg:text-2xl font-light">
                kumoくも 源自日文「雲」，象徵著飄逸自在的生活態度。我們相信，服飾不僅是穿著，更是表達內心世界的語言。
              </p>
              
              <p className="text-lg lg:text-xl font-light opacity-90">
                每一件精選單品都經過嚴格挑選，追求質感與舒適的完美平衡。從面料的選擇到版型的設計，我們堅持日系美學的純粹與簡約。
              </p>
              
              <p className="text-lg lg:text-xl font-light opacity-90">
                在這個快速變化的時代，我們希望為您帶來一份寧靜與優雅，讓每一天的穿搭都充滿意義。
              </p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
} 