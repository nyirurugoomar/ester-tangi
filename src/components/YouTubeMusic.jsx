import { useEffect, useRef } from 'react'

let apiPromise

function loadYouTubeApi() {
  if (window.YT?.Player) {
    return Promise.resolve()
  }

  if (apiPromise) {
    return apiPromise
  }

  apiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve()
    }

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
  })

  return apiPromise
}

export function YouTubeMusic({ videoId, isPlaying }) {
  const hostRef = useRef(null)
  const playerRef = useRef(null)
  const isPlayingRef = useRef(isPlaying)

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    let cancelled = false

    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) {
        return
      }

      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId,
        width: '320',
        height: '180',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          fs: 0,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(85)
            if (isPlayingRef.current) {
              event.target.unMute()
              event.target.playVideo()
            } else {
              event.target.mute()
              event.target.pauseVideo()
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      try {
        playerRef.current?.destroy?.()
      } catch {
        /* ignore */
      }
      playerRef.current = null
    }
  }, [videoId])

  useEffect(() => {
    const player = playerRef.current
    if (!player?.playVideo) {
      return
    }

    if (isPlaying) {
      player.unMute()
      player.playVideo()
    } else {
      player.pauseVideo()
    }
  }, [isPlaying])

  return (
    <div className="yt-audio-host" aria-hidden="true">
      <div ref={hostRef} />
    </div>
  )
}
