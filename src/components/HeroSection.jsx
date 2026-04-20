export function HeroSection({ couple, events, portraits }) {
  const primary = events[0]

  return (
    <section className="hero-section" id="top">
      <div className="hero-section__texture" aria-hidden="true" />

      <div
        className="hero-float hero-float--left hero-float--enter"
        aria-hidden="true"
      >
        <img
          src={portraits.image1 ?? portraits.bride}
          alt=""
          loading="eager"
        />
      </div>
      <div
        className="hero-float hero-float--right hero-float--enter"
        aria-hidden="true"
      >
        <img
          src={portraits.image2 ?? portraits.groom}
          alt=""
          loading="eager"
        />
      </div>

      <div className="hero-section__inner">
        <p className="hero-kicker hero-in hero-in--1">We&apos;re getting married</p>

        <h1 className="hero-heading hero-in hero-in--2">
          <span className="hero-heading__name">{couple.bride}</span>
          <span className="hero-heading__amp">&amp;</span>
          <span className="hero-heading__name">{couple.groom}</span>
        </h1>

        <div className="hero-divider hero-in hero-in--3" aria-hidden="true">
          <span className="hero-divider__line" />
          <span className="hero-divider__mark hero-bounce-soft">◆</span>
          <span className="hero-divider__line" />
        </div>

        <p className="hero-date hero-in hero-in--4">{primary.displayDate}</p>
        <p className="hero-tagline hero-in hero-in--5">{primary.title}</p>

        
      </div>

      <div className="hero-scroll hero-scroll--bounce" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="hero-scroll__line hero-scroll__line--bounce" />
      </div>
    </section>
  )
}
