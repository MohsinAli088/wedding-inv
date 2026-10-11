// Engagement Invitation Content for Dr. Shiva Shalini & Dr. Sankalp Shashwat
// Based on changes.jpeg and Logo.jpeg

export const music = { src: 'audio/preet-re.mp3', title: 'Preet Re', volume: 0.6 }

export const couple = {
  bride: 'Dr. Shiva Shalini',
  groom: 'Dr. Sankalp Shashwat',
  tagline: 'Two souls, one journey, hand in hand with faith, love and destiny.',
  ceremony: 'Engagement Ceremony',
}

export const mantra = {
  om: 'ॐ',
  shri: 'श्री',
  ganesh: '॥ श्री गणेशाय नमः ॥',
  shlokaTop: 'यत्र धर्मस्तत्र जयः यत्र प्रेम तत्र परमात्मा।',
  shlokaTopMeaning: 'Where there is righteousness, there is victory; where there is love, there is the Divine.',
  spiritualReminderTitle: 'A SPIRITUAL REMINDER',
  spiritualReminder: [
    'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।',
    'सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत् ॥',
  ],
  spiritualReminderMeaning:
    'May all be happy, may all be free from illness. May all see what is auspicious, may none suffer.',
}

// MAIN PAGE 1: GANESH & AUSPICIOUS INVITATION
export const opening = {
  invocation: '॥ श्री गणेशाय नमः ॥',
  shloka: 'यत्र धर्मस्तत्र जयः यत्र प्रेम तत्र परमात्मा।',
  shlokaMeaning: 'Where there is righteousness, there is victory; where there is love, there is the Divine.',
  blessingIntro: 'WITH THE BLESSINGS OF ALMIGHTY AND OUR ELDERS',
  inviteIntro: 'WE JOYFULLY INVITE YOU TO GRACE THE',
  eventType: 'ENGAGEMENT',
  belovedIntro: 'OF OUR BELOVED',
  bride: {
    name: 'Dr. Shiva Shalini',
    relation: 'D/O',
    parents: 'Samrendra Singh & Sangita Singh',
    residence: 'Purnia, Bihar',
  },
  groom: {
    name: 'Dr. Sankalp Shashwat',
    relation: 'S/O',
    parents: 'Dr. Jitendra Pratap Singh & Vimla Singh',
    residence: 'Varanasi, Uttar Pradesh',
  },
  dateSummary: 'WEDNESDAY, 1ST JULY 2026',
  timeSummary: '7 PM AND ONWARDS',
  venueSummary: 'HOTEL MAYFAIR RESORT, PURNIA',
}

// CONCEPT / UNION PAGE: BIHAR & VARANASI
export const description = {
  title: 'Two Souls, One Journey',
  subtitle: 'A Sacred Confluence of Bihar & Varanasi',
  quote: 'Two souls, one journey, hand in hand with faith, love and destiny.',
  paragraphs: [
    'With the divine grace of Almighty and elders, Dr. Shiva Shalini and Dr. Sankalp Shashwat unite two revered lands and traditions in a lifetime promise of love and togetherness.',
    'From the serene, timeless heritage of Bodh Gaya and Purnia in Bihar to the eternal sacred ghats, evening aartis, and holy waters of the Ganges in Varanasi, their bond is blessed by the Divine.',
    'As rings are exchanged and two families unite as one, we warmly welcome you to celebrate this auspicious evening with us and shower your loving blessings.',
  ],
}

// SACRED ELEMENTS REFLECTED IN ARTWORK
export const sequenceOfElements = [
  { icon: 'lotus', name: 'Divine Lotus', meaning: 'Purity, spiritual awakening, and blessings of Bihar.' },
  { icon: 'knot', name: 'The Sacred Ring', meaning: 'The eternal vow of engagement and unity of two souls.' },
  { icon: 'waves', name: 'Holy Ganga', meaning: 'Sacred waters carrying timeless blessings from Varanasi.' },
  { icon: 'north-star', name: 'Dhruva Tara', meaning: 'Steadfast guidance and eternal devotion through life.' },
  { icon: 'infinity', name: 'Infinity', meaning: 'An unbroken bond of faith, health, and prosperity.' },
  { icon: 'sun-moon', name: 'Sun & Moon', meaning: 'Celestial balance and harmonious new beginnings.' },
  { icon: 'agni', name: 'Sacred Light', meaning: 'Where righteousness resides, the Divine illuminates love.' },
]

export const VENUE_LINES = [
  'Hotel Mayfair Resort',
  'Green Valley Campus, Gulabhbagh,',
  'Purnia, Bihar',
]

// EVENTS LIST
export const events = [
  {
    id: 'engagement',
    title: 'The Engagement Ceremony',
    subtitle: 'Shubh Sagai & Ring Exchange',
    theme: 'rajputana',
    element: 'knot',
    invocation: { lang: 'sa', text: '॥ श्री गणेशाय नमः ॥' },
    blessing: {
      verse: {
        lang: 'sa',
        lines: ['यत्र धर्मस्तत्र जयः यत्र प्रेम तत्र परमात्मा।'],
      },
      lines: [
        'Two souls, one journey, hand in hand with faith, love and destiny.',
        'With rings exchanged and hearts united, we step into a blessed forever.',
      ],
    },
    date: 'Wednesday, 1st July 2026',
    dateNote: '01 | 07 | 2026',
    schedule: [
      { label: 'Guest Arrival', time: '6:30 PM onwards', note: '(Welcome & Refreshments)' },
      { label: 'Ring Ceremony', time: '7:00 PM onwards', note: '(Auspicious Ring Exchange)' },
      { label: 'Celebration Feast', time: '8:00 PM onwards', note: '(Followed by Dinner)' },
    ],
    dressCode: {
      label: 'Regal Traditional / Festive Indo-Western',
      colors: ['#741829', '#c99738', '#1b3a4b', '#2d5032', '#d9822b'],
    },
    venue: VENUE_LINES,
    description:
      'We joyfully invite you to grace the engagement of Dr. Shiva Shalini & Dr. Sankalp Shashwat. Your presence and blessings will make our celebration complete.',
  },
  {
    id: 'celebrations',
    title: 'Sangeet & Festivities',
    subtitle: 'Melodies of Joy & Celebration',
    theme: 'golden',
    element: 'sun-moon',
    invocation: { lang: 'sa', text: '॥ श्री गणेशाय नमः ॥' },
    blessing: {
      lines: [
        'An evening under the stars filled with music, laughter, and dance.',
        'Let us celebrate the beautiful union of two souls and two loving families.',
      ],
    },
    date: 'Wednesday, 1st July 2026',
    dateNote: 'Evening Celebrations',
    schedule: [
      { label: 'Musical Night', time: '8:30 PM onwards' },
      { label: 'Dinner & Banquet', time: '9:00 PM onwards', note: '(Royal Feast)' },
    ],
    dressCode: {
      label: 'Evening Glamour / Festive Sparkle',
      colors: ['#121c40', '#d4af37', '#741829'],
    },
    venue: VENUE_LINES,
    description:
      'Celebrate with music, rhythms, and warmth as both families dance to soulful melodies under a moonlit sky.',
  },
]

// PAGE: FAMILY
export const family = {
  title: 'A Cordial Invitation From',
  subtitle: 'With the blessings of our elders and loved ones',
  brideFamily: {
    title: "Bride's Family",
    parents: 'Samrendra Singh & Sangita Singh',
    members: [
      { role: 'Brother', name: 'Swet Saurabh' },
      { role: 'Sister-in-law', name: 'Payal' },
      { role: 'Niece', name: 'Shivanshi' },
    ],
    residence: 'Purnia, Bihar',
  },
  groomFamily: {
    title: "Groom's Family",
    parents: 'Dr. Jitendra Pratap Singh & Vimla Singh',
    members: [
      { role: 'Sister', name: 'Dr. Ayushi Anushka' },
    ],
    residence: 'Varanasi, Uttar Pradesh',
  },
  awaits: 'The Singh & Shashwat Families Joyfully Await Your Gracious Presence',
  spiritualReminder: {
    title: 'A SPIRITUAL REMINDER',
    shloka: [
      'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।',
      'सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत् ॥',
    ],
    translation:
      'May all be happy, may all be free from illness. May all see what is auspicious, may none suffer.',
  },
  note: 'No gifts, only your loving blessings & presence',
}

export const mapsLink = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(' '))}`
