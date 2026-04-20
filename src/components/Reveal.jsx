import { useInView } from '../hooks/useInView.js'

export function Reveal({
  children,
  variant = 'slide-up',
  delay = 0,
  className = '',
}) {
  const [ref, visible] = useInView()
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      className={`reveal-wrap reveal reveal--${variant}${visible ? ' reveal--visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
