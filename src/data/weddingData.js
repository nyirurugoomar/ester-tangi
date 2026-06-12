const WEDDING_EVENT_ISO = '2026-08-09T15:00:00+02:00'

function formatEventDisplayDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Kigali',
  })
}

export const weddingData = {
  couple: {
    bride: 'Esther',
    groom: 'Tangi',
  },
  music: {
    youtubeId: '8BCHH7uOWcw',
    youtubeUrl: 'https://youtu.be/8BCHH7uOWcw',
  },
  portraits: {
    groom: '/wedding/pic01.jpeg',
    bride: '/wedding/pc02.jpeg',
    groomAlt: 'Tangi — the groom',
    brideAlt: 'Esther — the bride',
    image1: '/wedding/gallery-05.png',
    image2: '/wedding/gallery-04.png',
  },
  proposal: {
    image: '/wedding/proposal.png',
    alt: 'Tangi proposing to Esther',
    dateLabel: '20 March 2026',
    paragraphs: [
      'On 20 March 2026, she thought she was simply going on a date like any other. She had no idea that this day was about to become one of the most beautiful moments of her life.',
      'With love in his heart and a future in his mind, he surprised her with a proposal she never saw coming. In that moment, everything changed.',
      "It wasn't just a date anymore—it became the beginning of forever. ❤️",
    ],
  },
  registryUrl: '#registry',
  events: [
    {
      title: 'Wedding day celebration',
      date: WEDDING_EVENT_ISO,
      displayDate: formatEventDisplayDate(WEDDING_EVENT_ISO),
      location: 'Details on your invitation to follow',
    },
  ],
  story: [
    {
      year: 'Our story',
      title: 'How it began',
      paragraphs: [
        "We've known each other for a long time—long before I ever realized what we would become. I even lived with his cousin for seven years, never knowing that the man who would one day mean everything to me used to come visit us.",
        'Life had its own quiet plan.',
        "Then came the moment that changed everything—his cousin's wedding in Tanzania. We traveled there together, unaware that our story was just beginning. And from that moment on… the rest is history.",
      ],
    },
    {
      year: 'First date',
      title: 'Our first date',
      paragraphs: [
        'We talked for hours, completely lost in each other, as if the world around us had disappeared. Time moved so fast, yet none of it ever felt like enough—we couldn’t even bring ourselves to say goodbye.',
        'In that quiet, beautiful moment, my heart gently whispered that I had finally found the piece I had been missing all along. Everything felt right, so natural, like a love that was always meant to find its way.',
        'And the most beautiful part… he felt it too.',
      ],
    },
  ],
  gallery: [
    {
      src: '/wedding/save-the-date.png',
      caption: 'Save the date',
    },
    {
      src: '/wedding/gallery-01.png',
      caption: 'Pure joy',
    },
    {
      src: '/wedding/gallery-02.png',
      caption: 'Side by side',
    },
    {
      src: '/wedding/gallery-03.png',
      caption: 'Forever starts here',
    },
    {
      src: '/wedding/gallery-04.png',
      caption: 'Walking forward together',
    },
    {
      src: '/wedding/gallery-05.png',
      caption: 'The sweetest yes',
    },
  ],
  people: [
    {
      id: 'groom',
      name: 'Tangi',
      role: 'The Groom',
      quote: `She says she thanks God for me every single day, with so much love and gratitude in her heart. She calls me her answered prayer—the one she prayed for without knowing when or how I would come into her life. And knowing I am loved like that… it makes me want to love her even more, and cherish her every single day. ❤️`,
    },
    {
      id: 'bride',
      name: 'Esther',
      role: 'The Bride',
      quote: `Bae, you came into my life and filled it with a happiness I had never known before. With you, I feel valued, loved, and truly at peace. You inspire me in ways words can't fully explain. Every day, you give me a reason to grow, to work harder, and to become a better man—just to make you proud. I am grateful for your love, and I cherish you deeply. I look forward to building a life with you, full of love, joy, and beautiful memories that last forever. ❤️`,
    },
  ],
  contacts: {
    brideFamily: [
      { name: 'Ester', phone: '+250 782 325 506' },
      { name: 'Brother Mugisha', phone: '+1(207) 252 133 6' },
      { name: 'Sister Muhoza', phone: '+250 786 140 042' },
    ],
    groomFamily: [
      { name: 'Tangi', phone: '+250 788 637 051' },
      { name: 'Sister Sifa', phone: '+250 781 999 434' },
      
    ],
  },
  gettingMarriedIntro:
    "We've known each other for a long time—long before we knew all we would become. Life had its own quiet plan, and our story unfolded in the most beautiful way. We would be honoured to celebrate with you as we begin our forever together.",
  venues: [
    {
      label: 'Guest will be hosted at',
      location: 'Golden Garden(Rebero)',
      mapUrl: 'https://www.google.com/maps/place/Golden+Garden+Rebero/@-1.9981323,30.0790456,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca9ef90b6aee5:0x7f9bee3f6658856a!8m2!3d-1.9981323!4d30.0816205!16s%2Fg%2F11l8tlxqqp?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      label: 'Kigali Bilingual Church',
      location: '',
      mapUrl: 'https://www.google.com/maps/place/Kigali+Bilingual+Seventh-day+Adventist+Church/@-1.9639807,30.1026366,17z/data=!4m16!1m9!3m8!1s0x19dca79e8e038591:0x3f9578d55becc68c!2sKigali+Bilingual+Seventh-day+Adventist+Church!8m2!3d-1.9639807!4d30.1052115!9m1!1b1!16s%2Fg%2F11rw67c36t!3m5!1s0x19dca79e8e038591:0x3f9578d55becc68c!8m2!3d-1.9639807!4d30.1052115!16s%2Fg%2F11rw67c36t?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
  ],
}
