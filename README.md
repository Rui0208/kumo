# 日系選品服飾品牌官網

## 📋 專案進度

### ✅ Task 1: 專案基礎設置 (已完成)
- [x] 安裝必要依賴（Framer Motion、shadcn/ui 相關套件）
- [x] 設置 Tailwind CSS 配置（日系配色方案）
- [x] 建立基本目錄結構（components、sections、assets、lib）
- [x] 配置 TypeScript 設定
- [x] 加入日系字體（Noto Serif JP、Zen Maru Gothic、Playfair Display）
- [x] 建立 shadcn/ui 工具函式
- [x] 建立基本 Button 元件
- [x] 建立 Framer Motion 動畫 helper 函式
- [x] 更新專案 metadata 和品牌資訊

### ✅ Task 2: 建立 IntroScreen 進場動畫 (已完成)
- [x] 建立全畫面進場動畫元件
- [x] 實作 3 秒後自動轉場到主頁
- [x] 加入品牌 logo 淡入效果和縮放動畫
- [x] 加入載入動畫（三個跳動的點）
- [x] 加入進度條動畫
- [x] 建立基本 Navbar 導覽列
- [x] 修正 viewport 警告問題
- [x] 整合 IntroScreen 到主頁面

### 🚧 待完成任務
- [ ] Task 3: 開發 Hero 區塊
- [ ] Task 4: 實作 About 品牌介紹區塊
- [ ] Task 5: 建立 Products 商品展示區塊
- [ ] Task 6: 開發 Gallery 品牌照片牆
- [ ] Task 7: 建立 Lookbook 穿搭展示區
- [ ] Task 8: 實作 Contact 聯絡區塊
- [ ] Task 9: 建立 Footer 頁尾
- [ ] Task 10: 整合與優化

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

## 🎨 設計系統

### 配色方案
- **主色**: #2c5530 (深綠)
- **次要色**: #8b7355 (木色)
- **背景**: #fafafa (米白)
- **文字**: #1a1a1a (深灰)

### 字體
- **主要字體**: Noto Serif JP
- **次要字體**: Zen Maru Gothic
- **標題字體**: Playfair Display

## 📁 專案結構

```
src/
├─ app/
│  ├─ layout.tsx        # 全站 layout
│  ├─ page.tsx          # 首頁
│  └─ globals.css       # Tailwind 全域樣式
├─ components/
│  ├─ ui/               # shadcn/ui 元件
│  │  └─ button.tsx     # 按鈕元件
│  ├─ IntroScreen.tsx   # 進場動畫元件 ✅
│  ├─ Navbar.tsx        # 導覽列 ✅
│  └─ Footer.tsx        # 頁尾
├─ sections/
│  ├─ Hero.tsx          # Hero 區塊
│  ├─ About.tsx         # 品牌介紹
│  ├─ Products.tsx      # 精選商品
│  ├─ Gallery.tsx       # 品牌照片牆
│  ├─ Lookbook.tsx      # Lookbook 展示
│  └─ Contact.tsx       # 聯絡區塊
├─ assets/              # 靜態圖片、圖示
└─ lib/
   ├─ utils.ts          # 工具函式
   └─ animations.ts     # 動畫 helper ✅
```

## 🛠 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **UI 元件**: shadcn/ui
- **套件管理**: pnpm

## 🎬 功能特色

### IntroScreen 進場動畫
- 全畫面品牌展示
- 3 秒自動轉場
- 品牌 logo 縮放動畫
- 載入動畫效果
- 進度條顯示
- 平滑淡出轉場
