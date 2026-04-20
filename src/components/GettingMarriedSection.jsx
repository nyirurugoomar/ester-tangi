export function GettingMarriedSection({
  couple,
  intro,
  people,
  revealedPerson,
  onSelectPerson,
  portraits,
}) {
  const activePerson = people.find((person) => person.id === revealedPerson)

  return (
    <section className="getting-married-section">
      <div className="getting-married-section__intro">
        <p className="section-label">We are</p>
        <h2>Getting Married</h2>
        <span className="rule rule--center" aria-hidden="true" />
        <p className="lead-copy lead-copy--serif">{intro}</p>
        <p className="couple-script">
          {couple.bride} <span>&amp;</span> {couple.groom}
        </p>
      </div>

      <div className="portrait-pair">
        <figure className="portrait-pair__frame">
          <img src={portraits.groom} alt={portraits.groomAlt} loading="lazy" />
        </figure>
        <figure className="portrait-pair__frame">
          <img src={portraits.bride} alt={portraits.brideAlt} loading="lazy" />
        </figure>
      </div>

      <div className="getting-married-section__reveal">
        <div className="reveal-tabs">
          {people.map((person) => (
            <button
              className={`reveal-tab ${
                revealedPerson === person.id ? 'is-active' : ''
              }`}
              key={person.id}
              type="button"
              onClick={() => onSelectPerson(person.id)}
            >
              <span className="reveal-tab__name">{person.name}</span>
              <span className="reveal-tab__hint">Tap to reveal</span>
            </button>
          ))}
        </div>

        <article className="quote-panel">
          <p className="quote-panel__name">{activePerson?.name}</p>
          <p className="quote-panel__role">{activePerson?.role}</p>
          <blockquote>{activePerson?.quote}</blockquote>
        </article>
      </div>
    </section>
  )
}
