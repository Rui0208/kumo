// Footer.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import { config } from "@/lib/config"
import { fadeIn } from "@/lib/animations"

const socialLinks = [
  { name: 'Instagram', url: config.brand.contact.social.instagram },
  { name: 'LINE', url: config.brand.contact.social.line },
  { name: 'Facebook', url: config.brand.contact.social.facebook },
  { name: 'Threads', url: config.brand.contact.social.threads },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer 
      className="w-full text-white py-14 px-4 border-t"
      style={{ 
        backgroundColor: config.page.footer.backgroundColor,
        borderColor: config.page.footer.borderColor 
      }}
      role="contentinfo"
      aria-label="網站頁尾"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0"
        >
          {/* 左側：地址與SNS */}
          <div className="flex-1 flex flex-col gap-8 min-w-[220px]">
            <div>
              <h3 className="text-gray-400 text-sm mb-3 tracking-widest font-light">
                地址
              </h3>
              <address className="text-base font-light border-b border-white/70 inline-block pb-0.5 not-italic">
                {config.brand.contact.address}
              </address>
            </div>
            
            <div>
              <h3 className="text-gray-400 text-sm mb-3 tracking-widest font-light">
                社群媒體
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-white/70 inline-block pb-0.5 hover:text-[#C0C0C0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label={`在 ${social.name} 上關注我們`}
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右側：品牌logo與資訊 */}
          <div className="flex flex-col items-end gap-6 min-w-[220px]">
            {/* 品牌名稱 */}
            <div className="flex flex-col items-end">
              <h2 className="text-4xl font-serif tracking-widest font-light select-none mb-2">
                {config.brand.name}
              </h2>
              <p className="text-gray-400 text-sm font-light text-right max-w-xs">
                {config.brand.description}
              </p>
            </div>

            {/* 版權信息 */}
            <div className="text-right text-sm text-gray-400">
              <p className="mb-1">
                © {currentYear} {config.brand.name}. 版權所有.
              </p>
              <p className="text-xs">
                Made in Taiwan
              </p>
            </div>
          </div>
        </motion.div>

        {/* 底部分隔線和額外信息 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap gap-6">
              <a 
                href="/privacy" 
                className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="隱私權政策"
              >
                隱私權政策
              </a>
              <a 
                href="/terms" 
                className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="使用條款"
              >
                使用條款
              </a>
              <a 
                href="/shipping" 
                className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="配送資訊"
              >
                配送資訊
              </a>
            </div>
            
           
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 