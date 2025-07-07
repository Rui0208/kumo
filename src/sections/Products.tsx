"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ProductSkeleton } from "@/components/ui/skeleton"
import { cardAnimation, titleAnimation } from "@/lib/animations"
import { config } from "@/lib/config"

const products = [
  {
    id: 1,
    name: "日系亞麻短袖上衣（深藍）",
    price: 1480,
    img: "/product-1.jpg",
    description: "優質亞麻材質，舒適透氣"
  },
  {
    id: 2,
    name: "日系亞麻無袖背心（黑）",
    price: 1200,
    img: "/product-2.jpg",
    description: "極簡設計，百搭單品"
  },
  {
    id: 3,
    name: "日系亞麻短袖上衣（白）",
    price: 1480,
    img: "/product-3.jpg",
    description: "純白經典，時尚必備"
  }
]

export default function Products() {
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({})
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const formatPrice = (price: number) => {
    return `${config.product.currencySymbol}${price.toFixed(2)}`
  }

  return (
    <section id="products" className="w-full min-h-screen bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 font-light text-center mb-4 tracking-wider font-serif">
            Products
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            精選日系服飾，每件都是經過嚴格挑選的優質單品
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full"
              >
                {/* 圖片區域 */}
                <div className="relative w-full h-72 mb-6 overflow-hidden rounded-lg">
                  {!imageLoaded[product.id] && (
                    <ProductSkeleton className="absolute inset-0" />
                  )}
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={288}
                    className={`w-full h-full object-contain transition-all duration-700 ${
                      hoveredProduct === product.id ? 'scale-105' : 'scale-100'
                    } ${imageLoaded[product.id] ? 'opacity-100' : 'opacity-0'}`}
                    quality={80}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [product.id]: true }))}
                  />
                </div>

                {/* 內容區域 */}
                <div className="text-center flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-medium text-base lg:text-lg mb-2 leading-snug text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-light mb-4">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-gray-900 font-semibold text-lg lg:text-xl mb-4">
                      {formatPrice(product.price)}
                    </div>
                    
                    {/* 小圓點裝飾 */}
                    <div className="flex justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-light hover:bg-gray-50 transition-colors duration-200"
          >
            查看更多商品
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 