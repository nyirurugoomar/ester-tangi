export function GallerySection({ items }) {
  return (
    <section className="content-section gallery-section">
      <p className="section-label">Adventures & Memories</p>
      <h2>Moments We Treasure</h2>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <article className="gallery-card" key={item.src}>
            <img
              className="gallery-card__img"
              src={item.src}
              alt={item.caption}
              loading="lazy"
            />
            <div className="gallery-card__overlay">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
