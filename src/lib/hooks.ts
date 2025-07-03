import { useState, useEffect } from "react"

/**
 * 自定義 hook 用於確保組件只在客戶端渲染
 * 避免服務器端和客戶端渲染不一致導致的 hydration mismatch
 */
export function useClientSide() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

/**
 * 自定義 hook 用於延遲渲染，確保動畫和狀態在客戶端正確初始化
 */
export function useDelayedRender(delay: number = 0) {
  const [shouldRender, setShouldRender] = useState(false)
  const isClient = useClientSide()

  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      setShouldRender(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [isClient, delay])

  return shouldRender
} 