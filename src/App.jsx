import { useState } from 'react'
import { CountdownSection } from './components/CountdownSection.jsx'
import { DetailsSection } from './components/DetailsSection.jsx'
import { FormalInvitationSection } from './components/FormalInvitationSection.jsx'
import { GallerySection } from './components/GallerySection.jsx'
import { GettingMarriedSection } from './components/GettingMarriedSection.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { LoveStorySection } from './components/LoveStorySection.jsx'
import { ProposalSection } from './components/ProposalSection.jsx'
import { Reveal } from './components/Reveal.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { SoundToggle } from './components/SoundToggle.jsx'
import { YouTubeMusic } from './components/YouTubeMusic.jsx'
import { weddingData } from './data/weddingData.js'
import { useCountdown } from './hooks/useCountdown.js'
import { useVisitCount } from './hooks/useVisitCount.js'
import './App.css'

function App() {
  const [revealedPerson, setRevealedPerson] = useState('groom')
  const [isPlaying, setIsPlaying] = useState(true)
  const countdown = useCountdown(weddingData.events[0].date)
  const visitCount = useVisitCount()

  return (
    <div className="page-shell">
      <YouTubeMusic
        videoId={weddingData.music.youtubeId}
        isPlaying={isPlaying}
      />
      <SoundToggle
        isPlaying={isPlaying}
        onToggle={() => setIsPlaying((current) => !current)}
      />

      <HeroSection
        couple={weddingData.couple}
        events={weddingData.events}
        portraits={weddingData.portraits}
      />

      <Reveal variant="slide-up">
        <FormalInvitationSection events={weddingData.events} />
      </Reveal>

      <Reveal variant="slide-up" className="reveal-wrap--countdown-stagger">
        <CountdownSection event={weddingData.events[0]} countdown={countdown} />
      </Reveal>

      <Reveal variant="slide-right">
        <GettingMarriedSection
          couple={weddingData.couple}
          intro={weddingData.gettingMarriedIntro}
          people={weddingData.people}
          revealedPerson={revealedPerson}
          onSelectPerson={setRevealedPerson}
          portraits={weddingData.portraits}
        />
      </Reveal>

      <Reveal variant="slide-left" className="reveal-wrap--story-stagger">
        <LoveStorySection entries={weddingData.story} />
      </Reveal>

      <Reveal variant="slide-up" className="reveal-wrap--gallery-stagger">
        <GallerySection items={weddingData.gallery} />
      </Reveal>

      <Reveal variant="slide-right">
        <ProposalSection
          imageSrc={weddingData.proposal.image}
          imageAlt={weddingData.proposal.alt}
          dateLabel={weddingData.proposal.dateLabel}
          paragraphs={weddingData.proposal.paragraphs}
        />
      </Reveal>

      <Reveal variant="slide-up">
        <DetailsSection
          visitCount={visitCount}
          contacts={weddingData.contacts}
          venues={weddingData.venues}
        />
      </Reveal>

      <Reveal variant="slide-up">
        <SiteFooter couple={weddingData.couple} />
      </Reveal>
    </div>
  )
}

export default App
