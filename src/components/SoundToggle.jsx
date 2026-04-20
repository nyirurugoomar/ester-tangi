export function SoundToggle({ isPlaying, onToggle }) {
  return (
    <button
      className={`sound-toggle ${isPlaying ? 'is-playing' : ''}`}
      type="button"
      onClick={onToggle}
      aria-label={
        isPlaying ? 'Music is on. Tap to mute.' : 'Tap to play background music.'
      }
    >
      <span className="sound-toggle__icon" aria-hidden="true">
        ♪
      </span>
      <span className="sound-toggle__label" aria-hidden="true">
        {isPlaying ? 'Sound on' : 'Tap to play'}
      </span>
    </button>
  )
}
