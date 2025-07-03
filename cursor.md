# 日系選品服飾品牌官網 - 一頁式網站開發文件

## 🧾 專案簡介
這是一個使用 Next.js + Tailwind CSS + TypeScript + Framer Motion 製作的日系選品服飾品牌網站，風格模仿 fugetsuro.co.jp，具有高質感 UI 動效、scroll 動畫、intro 首頁進場畫面。網站將展示品牌理念、商品、穿搭照、聯絡表單等。
模板參考https://fugetsuro.co.jp/ 此網站設計 一個區域慢慢開發
---

## 🧱 技術棧
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion（動畫用）
- shadcn/ui（UI 元件，按鈕、表單等）
- pnpm 套件管理器
- 結構化於 `src/` 目錄下

---

## 📁 專案目錄規劃

```txt
src/
├─ app/
│  ├─ layout.tsx        # 全站 layout
│  ├─ page.tsx          # 首頁
│  └─ globals.css       # Tailwind 全域樣式
├─ components/
│  ├─ IntroScreen.tsx   # 進場動畫元件
│  ├─ Navbar.tsx        # 導覽列
│  └─ Footer.tsx
├─ sections/
│  ├─ Hero.tsx          # Hero 區塊
│  ├─ About.tsx         # 品牌介紹
│  ├─ Products.tsx      # 精選商品
│  ├─ Gallery.tsx       # 品牌照片牆
│  ├─ Lookbook.tsx      # Lookbook 展示
│  └─ Contact.tsx       # 聯絡區塊
├─ assets/              # 靜態圖片、圖示
├─ lib/                 # 工具函式、動畫 helper

 各區塊功能與設計說明
1. IntroScreen.tsx
全畫面大圖或 logo 進場動畫

使用 framer-motion 進行淡入淡出、縮放

3 秒後自動 transition 到主頁

2. Hero.tsx
滿版背景圖（模特穿搭）

中央顯示品牌名稱、標語

加入 scroll-down 提示動畫箭頭

3. About.tsx
左圖右文佈局，介紹品牌理念

滾動時文字與圖片由兩側滑入淡入

4. Products.tsx
使用卡片顯示 3–6 件商品

每張卡片：圖片、商品名、簡短描述、價格

hover 時圖片放大或替換，點擊可彈出更多細節（可後續擴充）

5. Gallery.tsx
使用多張品牌氛圍圖片

滾動觸發 parallax 視差效果

保持留白與日系簡約感

6. Lookbook.tsx
可滑動的季度穿搭展示區（橫向 scroll）

加入 2025 SS、2025 FW 等切換區段

7. Contact.tsx
顯示品牌地址、電話、Email

表單欄位：姓名、Email、訊息（使用 shadcn/ui 元件）

Google Map 嵌入（後續可加）

8. Footer.tsx
LOGO / 品牌聲明

導航連結 / 社群連結（IG、LINE）

🎨 視覺風格參考
字體：Noto Serif JP, Zen Maru Gothic, Playfair Display

配色：米白、木色、深藍、灰綠（中性色為主）

動畫節奏：緩進、延遲、交錯出現

