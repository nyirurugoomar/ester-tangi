export function ProposalSection({ imageSrc, imageAlt, dateLabel, paragraphs }) {
  return (
    <section className="content-section proposal-section">
      <p className="section-label">And now, forever begins</p>
      <figure className="proposal-photo full-bleed">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
        <figcaption className="proposal-photo__caption">
          {dateLabel} · The proposal
        </figcaption>
      </figure>
      {paragraphs?.length ? (
        <div className="proposal-copy">
          {paragraphs.map((paragraph, index) => (
            <p key={`proposal-${index}`}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </section>
  )
}
