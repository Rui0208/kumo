// 設計系統配置
export const designSystem = {
  colors: {
    primary: '#2c5530',
    primaryForeground: '#ffffff',
    secondary: '#8b7355',
    secondaryForeground: '#ffffff',
    background: '#f3f4f4',
    foreground: '#2d3132',
    muted: '#f5f5f5',
    mutedForeground: '#6b7280',
    accent: '#e8f5e8',
    accentForeground: '#2c5530',
    border: '#e5e7eb',
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  fonts: {
    primary: '"Source Han Sans Japanese", "游ゴシック体", "YuGothic", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", "Noto Serif JP", serif',
    serif: '"Noto Serif JP", serif',
    gothic: '"Zen Maru Gothic", sans-serif',
    display: '"Playfair Display", serif',
    mono: '"Geist Mono", monospace'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}

// 品牌配置
export const brandConfig = {
  name: 'kumoくも',
  tagline: '精選日系服飾，展現獨特品味與質感生活',
  description: '源自日文「雲」，象徵著飄逸自在的生活態度',
  keywords: ['日系服飾', '選品', '時尚', '質感', '穿搭'],
  contact: {
    address: '台北市松山區南京東路四段120號',
    social: {
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      threads: 'https://threads.net/',
      line: 'https://line.me/'
    }
  }
}

// 動畫配置
export const animationConfig = {
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    verySlow: 1.2
  },
  easings: {
    smooth: [0.25, 0.46, 0.45, 0.94] as any,
    bounce: [0.68, -0.55, 0.265, 1.55] as any,
    ease: [0.25, 0.1, 0.25, 1] as any
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15
  },
  viewport: {
    once: true,
    amount: 0.3
  }
}

// 頁面配置
export const pageConfig = {
  hero: {
    autoSlideInterval: 4000,
    images: [
      '/hero-1.jpg',
      '/hero-2.jpg',
      '/hero-3.jpg',
      '/hero-4.jpg'
    ]
  },
  intro: {
    duration: 3000,
    fadeOutDelay: 2500
  },
  header: {
    height: 80,
    heightLg: 96,
    hideOnScroll: true,
    backgroundBlur: true
  },
  footer: {
    backgroundColor: '#23201E',
    borderColor: '#2d2a28'
  }
}

// 產品配置
export const productConfig = {
  categories: ['帽子', '外套', '上衣', '褲子', '配件'],
  collections: ['2025 秋冬', '經典系列', '限量款'],
  currency: 'TWD',
  currencySymbol: '$'
}

// 通用配置
export const config = {
  ...designSystem,
  brand: brandConfig,
  animation: animationConfig,
  page: pageConfig,
  product: productConfig
} 