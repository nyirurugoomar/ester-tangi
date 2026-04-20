export function DetailsSection({ visitCount, contacts, venues }) {
  return (
    <section className="content-section details-section" id="rsvp">
      <div className="details-header">
        <div>
          <p className="section-label">Visits</p>
          <h2 className="details-header__stat">{visitCount}</h2>
        </div>
        <div>
          <p className="section-label">Contact us</p>
        </div>
      </div>

      <div className="contact-grid">
        <article className="panel contact-card">
          <p className="section-kicker">Bride &amp; family</p>
          <ul>
            {contacts.brideFamily.map((person) => (
              <li key={person.phone}>
                <span>{person.name}</span>
                <a href={`tel:${person.phone.replaceAll(' ', '')}`}>
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel contact-card">
          <p className="section-kicker">Groom &amp; family</p>
          <ul>
            {contacts.groomFamily.map((person) => (
              <li key={person.phone}>
                <span>{person.name}</span>
                <a href={`tel:${person.phone.replaceAll(' ', '')}`}>
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="venue-grid">
        {venues.map((venue) => (
          <article className="panel venue-card" key={venue.label}>
            <p className="section-kicker">{venue.label}</p>
            <h3>{venue.name}</h3>
            <p>{venue.location}</p>
            <a href={venue.mapUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
