import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -6% 0px', once = true } =
    options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
