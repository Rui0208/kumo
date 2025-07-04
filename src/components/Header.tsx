"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X, Globe, Search, User, ShoppingBag } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
  { label: "主頁", href: "#" },
  { label: "所有商品", href: "#" },
  { label: "精選系列", href: "#" },
  { label: "2025春夏", href: "#" },
  { label: "分類", href: "#category", dropdown: true },
  { label: "關於", href: "#" },
  { label: "訊息", href: "#" },
]
const categoryItems = [
  { label: "帽子", href: "#" },
  { label: "外套", href: "#" },
  { label: "上衣", href: "#" },
  { label: "褲子", href: "#" },
  { label: "配件", href: "#" },
]

export default function Header() {
  const [show, setShow] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const lastScroll = useRef(0)
  const categoryBtnRef = useRef<HTMLButtonElement>(null)
  const [dropdownPos, setDropdownPos] = useState<{left: number, top: number, width: number} | null>(null)
  const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 當分類dropdown開啟時，計算分類按鈕位置
  useEffect(() => {
    if (categoryOpen && categoryBtnRef.current) {
      const rect = categoryBtnRef.current.getBoundingClientRect()
      setDropdownPos({
        left: rect.left,
        top: rect.bottom,
        width: rect.width
      })
    } else {
      setDropdownPos(null)
    }
  }, [categoryOpen])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 10)
      if (y < 10) {
        setShow(true)
        lastScroll.current = y
        return
      }
      if (y > lastScroll.current) {
        setShow(false)
      } else {
        setShow(true)
      }
      lastScroll.current = y
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // 清理 category timeout
  useEffect(() => {
    return () => {
      if (categoryTimeoutRef.current) {
        clearTimeout(categoryTimeoutRef.current)
      }
    }
  }, [])

  // Helper functions for category hover
  const handleCategoryMouseEnter = () => {
    if (categoryTimeoutRef.current) {
      clearTimeout(categoryTimeoutRef.current)
      categoryTimeoutRef.current = null
    }
    setCategoryOpen(true)
  }

  const handleCategoryMouseLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setCategoryOpen(false)
    }, 300) // 給更多時間讓滑鼠移動到dropdown
  }

  const headerClass = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-500",
    hovered || !atTop ? "bg-white text-[#2d3132] shadow" : "bg-transparent text-[#EFECED]",
    show ? "translate-y-0" : "-translate-y-full"
  ].join(" ")

  return (
    <header
      className={headerClass}
      style={{backdropFilter: atTop && !hovered ? "blur(0px)" : "blur(8px)"}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-full px-4 sm:px-12 flex items-center justify-between h-[80px] lg:h-[96px] relative">
        {/* 桌機左側主選單+分類（同一個flex） */}
        <div className="hidden lg:flex gap-2 md:gap-4 items-center min-w-0 flex-shrink-0 overflow-x-auto relative">
          {navItems.filter(item => !item.dropdown).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`py-1.5 rounded font-light text-sm md:text-base transition-all duration-200`}
            >
              {item.label}
            </a>
          ))}
          {/* 分類dropdown（portal浮動） */}
          <div 
            className="relative"
            onMouseEnter={handleCategoryMouseEnter}
            onMouseLeave={handleCategoryMouseLeave}
          >
                        <button
              ref={categoryBtnRef}
              className={`px-3 py-1.5 rounded font-light text-sm md:text-base transition-all duration-200 flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={categoryOpen}

                          >
                分類
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            {categoryOpen && dropdownPos && createPortal(
              <div
                className="fixed bg-white text-[#2d3132] rounded shadow-lg border border-border py-2 animate-in fade-in duration-200 z-[9999]"
                style={{
                  left: dropdownPos.left,
                  top: dropdownPos.top,
                  width: dropdownPos.width + 80 // dropdown寬度略大於按鈕
                }}
                onMouseEnter={handleCategoryMouseEnter}
                onMouseLeave={handleCategoryMouseLeave}
              >
                {categoryItems.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="block px-4 py-2 text-base font-light transition relative overflow-hidden group"
                  >
                    {cat.label}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  </a>
                ))}
              </div>,
              document.body
            )}
          </div>
        </div>
        {/* LOGO 置中（absolute，僅桌機） */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
          <div className="text-2xl font-serif tracking-widest font-light whitespace-nowrap">kumoくも</div>
        </div>
        {/* 手機版flex排版：左漢堡+搜尋，中logo，右user+購物車 */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* 左側 */}
          <div className="flex items-center gap-1">
            <button
              className="flex items-center justify-center p-2 rounded bg-transparent border-none outline-none focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="開啟選單"
            >
              <Menu size={26} />
            </button>
            <Search size={20} className="inline-block mx-1" />
          </div>
          {/* 中間LOGO */}
          <div className="flex-1 flex justify-center items-center min-w-0">
            <div className="text-2xl font-serif tracking-widest font-light select-none whitespace-nowrap">kumoくも</div>
          </div>
          {/* 右側 */}
          <div className="flex items-center gap-1">
            <User size={20} className="inline-block mx-1" />
            <ShoppingBag size={20} className="inline-block mx-1" />
          </div>
        </div>
        {/* 桌機右側icon */}
        <div className="hidden lg:flex items-center gap-3 min-w-[180px] justify-end flex-shrink-0">
          <Globe size={20} className="inline-block mr-1" />
          <span className="text-base font-light hidden sm:inline">Chinese (Traditional)</span>
          <Search size={20} className="inline-block mx-1" />
          <User size={20} className="inline-block mx-1" />
          <ShoppingBag size={20} className="inline-block mx-1" />
        </div>
      </div>
      {/* 手機版 overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white min-h-screen flex flex-col animate-in fade-in duration-300"
          >
            <div className="flex items-center justify-between px-6 border-b border-border">
              <div className="text-2xl font-serif tracking-widest font-light select-none">kumoくも</div>
              <button
                className="p-2 rounded text-[#2d3132] bg-transparent border-none outline-none focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="關閉選單"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col bg-white px-3 py-6 overflow-y-auto custom-scrollbar">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      className="w-full text-left px-3 py-3 rounded font-light text-lg hover:text-[#2d3132] flex items-center gap-1"
                      aria-haspopup="true"
                      aria-expanded={categoryOpen}
                      onClick={() => setCategoryOpen((v) => !v)}
                    >
                      {item.label}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {categoryOpen && (
                      <div className="ml-4 mt-1 w-36 bg-white text-[#2d3132] rounded shadow-lg border border-border py-2 animate-in fade-in duration-200 z-50">
                        {categoryItems.map((cat) => (
                          <a
                            key={cat.label}
                            href={cat.href}
                            className="block px-4 py-2 text-base font-light transition relative overflow-hidden group"
                          >
                            {cat.label}
                            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-3 rounded font-light text-lg text-[#2d3132] hover:text-[#2d3132] transition-all duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 