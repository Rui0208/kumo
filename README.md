# kumo くも - 日系選品服飾品牌官網

現代化的日系時尚品牌官網

## 🚀 快速開始

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev

# 建置專案
pnpm build

# 啟動生產伺服器
pnpm start
```

## 🛠 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS 4
- **動畫**: Framer Motion
- **UI 元件**: shadcn/ui
- **套件管理**: pnpm
- **字體**: Google Fonts (Noto Serif JP, Zen Maru Gothic, Playfair Display)

### 設計理念

- **簡約主義**: 去除多餘元素，專注於核心內容
- **日式美學**: 融合傳統日本設計元素與現代排版
- **空間感**: 充分利用留白，創造優雅的視覺層次
- **細膩質感**: 精心調校的字體、間距和色彩搭配

## 📁 專案結構

```
src/
├─ app/
│  ├─ layout.tsx        # 全站佈局與 SEO 設定
│  ├─ page.tsx          # 首頁
│  └─ globals.css       # 全域樣式
├─ components/
│  ├─ ui/               # 基礎 UI 元件
│  ├─ IntroScreen.tsx   # 進場動畫
│  ├─ Header.tsx        # 導覽列
│  ├─ Footer.tsx        # 頁尾
│  └─ ...
├─ sections/
│  ├─ Hero.tsx          # 主視覺區塊
│  ├─ About.tsx         # 品牌介紹
│  ├─ Products.tsx      # 商品展示
│  ├─ Lookbook.tsx      # 穿搭展示
│  └─ Contact.tsx       # 聯絡資訊
├─ lib/
│  ├─ animations.ts     # 動畫配置
│  ├─ config.ts         # 統一配置
│  └─ utils.ts          # 工具函式
└─ public/
   ├─ manifest.json     # PWA 配置
   ├─ robots.txt        # SEO 設定
   └─ 圖片資源...
```

## 🎬 功能特色

### 🖼️ 圖片優化

- Next.js Image 組件自動優化
- 懶加載和響應式圖片
- WebP 格式自動轉換

### 🎭 動畫系統

- 統一的動畫配置
- 滾動觸發動畫
- 平滑的頁面轉場

### 📱 響應式設計

- 移動優先設計
- 平板和桌面設備優化
- 觸控手勢支持

### ♿ 可訪問性

- ARIA 標籤支持
- 鍵盤導航
- 屏幕閱讀器友好

### 🔍 SEO 優化

- 完整的 meta 標籤
- Open Graph 支持
- 結構化數據
- PWA 功能

---
