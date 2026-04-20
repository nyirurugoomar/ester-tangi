export function LoveStorySection({ entries }) {
  return (
    <section className="content-section story-section">
      <p className="section-label">A journey of love</p>
      <h2>Our Love Story</h2>

      <div className="story-list">
        {entries.map((entry) => (
          <article className="story-row" key={entry.title}>
            <div className="story-row__year">{entry.year}</div>
            <div className="panel story-row__content">
              <h3>{entry.title}</h3>
              {(entry.paragraphs ?? (entry.text ? [entry.text] : [])).map(
                (paragraph, index) => (
                  <p key={`${entry.title}-${index}`}>{paragraph}</p>
                ),
              )}
              {entry.quote ? <blockquote>{entry.quote}</blockquote> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
