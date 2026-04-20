export function FormalInvitationSection({ events }) {
  return (
    <section className="content-section invitation-section">
      <p className="section-label">Formal Invitation</p>
      <div
        className={`event-grid ${events.length === 1 ? 'event-grid--single' : ''}`}
      >
        {events.map((event) => (
          <article className="panel event-card" key={event.title}>
            <p className="section-kicker">Join us for</p>
            <h2>{event.title}</h2>
            <p className="event-card__date">{event.displayDate}</p>
            <p>{event.location}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
