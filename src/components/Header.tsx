"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X, Globe, Search, User, ShoppingBag } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { config } from "@/lib/config"

const navItems = [
  { label: "主頁", href: "#" },
  { label: "所有商品", href: "#" },
  { label: "精選系列", href: "#" },
  { label: "2025 秋冬", href: "#" },
  { label: "分類", href: "#category", dropdown: true },
  { label: "關於", href: "#" },
  { label: "訊息", href: "#" },
]

const categoryItems = config.product.categories.map(category => ({
  label: category,
  href: `#${category.toLowerCase()}`
}))

export default function Header() {
  const [show, setShow] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [desktopCategoryOpen, setDesktopCategoryOpen] = useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false)
  const [introCompleted, setIntroCompleted] = useState(false)
  const lastScroll = useRef(0)
  const categoryBtnRef = useRef<HTMLButtonElement>(null)
  const [dropdownPos, setDropdownPos] = useState<{left: number, top: number, width: number} | null>(null)
  const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 簡化的 intro 檢測邏輯
  useEffect(() => {
    // 直接使用延遲來檢測 intro 完成
    const timer = setTimeout(() => {
      setIntroCompleted(true)
    }, 4000) // intro 總時長 4 秒

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (desktopCategoryOpen && categoryBtnRef.current) {
      const rect = categoryBtnRef.current.getBoundingClientRect()
      setDropdownPos({
        left: rect.left,
        top: rect.bottom,
        width: rect.width
      })
    } else {
      setDropdownPos(null)
    }
  }, [desktopCategoryOpen])

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
      // 當移動版選單關閉時，也關閉移動版分類選單
      setMobileCategoryOpen(false)
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      if (categoryTimeoutRef.current) {
        clearTimeout(categoryTimeoutRef.current)
      }
    }
  }, [])

  const handleDesktopCategoryMouseEnter = () => {
    if (categoryTimeoutRef.current) {
      clearTimeout(categoryTimeoutRef.current)
      categoryTimeoutRef.current = null
    }
    setDesktopCategoryOpen(true)
  }

  const handleDesktopCategoryMouseLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setDesktopCategoryOpen(false)
    }, 300)
  }

  const handleMobileCategoryClick = () => {
    setMobileCategoryOpen(prev => !prev)
  }

  const headerBgClass = hovered || !atTop ? "bg-white text-gray-900 shadow" : "bg-transparent text-white"
  const transformClass = show ? "translate-y-0" : "-translate-y-full"
  
  // 如果 intro 還沒完成，完全隱藏 header
  if (!introCompleted) {
    return null
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 lg:h-24 ${headerBgClass} ${transformClass}`}
            style={{backdropFilter: atTop && !hovered ? "blur(0px)" : "blur(8px)"}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
      <div className="max-w-full px-4 sm:px-12 flex items-center justify-between h-full relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 md:gap-4 items-center min-w-0 flex-shrink-0 overflow-x-auto relative">
          {navItems.filter(item => !item.dropdown).map((item) => (
            <a key={item.label} href={item.href} className="py-1.5 rounded font-light text-sm md:text-base transition-opacity duration-300 hover:opacity-80">
              {item.label}
            </a>
          ))}
          
          <div className="relative" onMouseEnter={handleDesktopCategoryMouseEnter} onMouseLeave={handleDesktopCategoryMouseLeave}>
            <button ref={categoryBtnRef} className="px-3 py-1.5 rounded font-light text-sm md:text-base transition-opacity duration-300 flex items-center gap-1 hover:opacity-80">
              分類
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {desktopCategoryOpen && dropdownPos && createPortal(
              <div className="fixed bg-white text-gray-900 rounded shadow-lg border py-2 z-[9999]"
                   style={{left: dropdownPos.left, top: dropdownPos.top, width: dropdownPos.width + 80}}
                   onMouseEnter={handleDesktopCategoryMouseEnter}
                   onMouseLeave={handleDesktopCategoryMouseLeave}>
                {categoryItems.map((cat) => (
                  <a key={cat.label} href={cat.href} className="block px-4 py-2 text-base font-light transition-colors duration-300 hover:bg-gray-50">
                    {cat.label}
                  </a>
                ))}
              </div>,
              document.body
            )}
          </div>
        </div>

        {/* Logo Center */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
          <div className="text-2xl font-serif tracking-widest font-light whitespace-nowrap">
            {config.brand.name}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center p-2 rounded" onClick={() => setMenuOpen(true)}>
              <Menu size={26} />
            </button>
            <Search size={20} className="inline-block mx-1" />
          </div>
          <div className="flex-1 flex justify-center items-center min-w-0">
            <div className="text-2xl font-serif tracking-widest font-light select-none whitespace-nowrap">
              {config.brand.name}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <User size={20} className="inline-block mx-1" />
            <ShoppingBag size={20} className="inline-block mx-1" />
          </div>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center gap-3 min-w-[180px] justify-end flex-shrink-0">
          <Globe size={20} className="inline-block mr-1" />
          <span className="text-base font-light hidden sm:inline">Chinese (Traditional)</span>
          <Search size={20} className="inline-block mx-1" />
          <User size={20} className="inline-block mx-1" />
          <ShoppingBag size={20} className="inline-block mx-1" />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white min-h-screen flex flex-col">
            <div className="flex items-center justify-between px-6 border-b">
              <div className="text-2xl font-serif tracking-widest font-light select-none">
                {config.brand.name}
              </div>
              <button className="p-2 rounded text-gray-900" onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col bg-white px-3 py-6 overflow-y-auto">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button className="w-full text-left px-3 py-3 rounded font-light text-lg text-gray-900 flex items-center gap-1 transition-colors duration-300"
                            onClick={handleMobileCategoryClick}>
                      {item.label}
                      <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${mobileCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileCategoryOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 bg-gray-50 rounded-lg overflow-hidden"
                        >
                          {categoryItems.map((cat) => (
                            <a key={cat.label} href={cat.href} 
                               className="block px-4 py-3 text-base font-light transition-colors duration-300 hover:bg-gray-100"
                               onClick={() => setMenuOpen(false)}>
                              {cat.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a key={item.label} href={item.href} className="block px-3 py-3 rounded font-light text-lg text-gray-900 transition-colors duration-300"
                     onClick={() => setMenuOpen(false)}>
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