import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ester-tangi-visit-count'

export function useVisitCount() {
  const [visitCount] = useState(() => {
    if (typeof window === 'undefined') {
      return 0
    }

    return Number(window.localStorage.getItem(STORAGE_KEY) ?? 0) + 1
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(visitCount))
  }, [visitCount])

  return visitCount
}
