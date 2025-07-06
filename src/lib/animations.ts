import { Variants } from "framer-motion"

// 基礎動畫配置
const baseTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as any
}

const fastTransition = {
  duration: 0.3,
  ease: [0.25, 0.46, 0.45, 0.94] as any
}

const slowTransition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94] as any
}

// 淡入動畫
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: baseTransition
  }
}

// 從下方滑入
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransition
  }
}

// 從上方滑入
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransition
  }
}

// 從左側滑入
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: baseTransition
  }
}

// 從右側滑入
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: baseTransition
  }
}

// 縮放動畫
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: baseTransition
  }
}

// 交錯動畫容器
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// 滾動觸發動畫
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: slowTransition
  }
}

// 視差效果
export const parallax: Variants = {
  hidden: { y: 0 },
  visible: {
    y: -50,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

// 按鈕 hover 動畫
export const buttonHover = {
  scale: 1.05,
  transition: fastTransition
}

// 圖片 hover 動畫
export const imageHover = {
  scale: 1.1,
  transition: {
    duration: 0.7,
    ease: [0.25, 0.46, 0.45, 0.94] as any
  }
}

// 導航顯示/隱藏動畫
export const navAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    transition: fastTransition
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: fastTransition
  }
}

// 卡片動畫
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransition
  }
}

// 標題動畫
export const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

// 文字逐字動畫
export const textAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

// 浮動動畫
export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

// 旋轉動畫
export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
}

// 載入動畫
export const loadingAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.3, 1, 0.3],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

// 頁面轉場動畫
export const pageTransition: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  },
  exit: { 
    opacity: 0, 
    x: -200,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

// 通用動畫配置
export const animationConfig = {
  baseTransition,
  fastTransition,
  slowTransition,
  staggerDelay: 0.1,
  viewportOnce: true,
  viewportAmount: 0.3
} 