import { useMemo } from 'react'

export function CountdownSection({ event, countdown }) {
  const items = useMemo(
    () => [
      { label: 'Days', value: String(countdown.days).padStart(2, '0') },
      { label: 'Hours', value: String(countdown.hours).padStart(2, '0') },
      { label: 'Minutes', value: String(countdown.minutes).padStart(2, '0') },
      { label: 'Seconds', value: String(countdown.seconds).padStart(2, '0') },
    ],
    [countdown],
  )

  return (
    <section className="content-section countdown-section">
      <p className="section-label">Counting down to</p>
      <h2>{event.title}</h2>
      <p className="countdown-location">
        {event.displayDate} · {event.location}
      </p>
      <p className="ornament">◆</p>

      <div className="countdown-grid">
        {items.map((item) => (
          <div className="countdown-cell" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
