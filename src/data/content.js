// All wording for the invitation lives here.
// Venues, Jaimala/Vivah times and RSVP contacts are SAMPLE values: replace them once confirmed.

// Background song
export const music = { src: 'audio/sajna.mp3', title: 'Sajna', volume: 0.6 }

export const couple = {
  groom: 'Sankalp',
  bride: 'Shalini',
  groomFull: 'Dr. Sankalp Shashwat',
  brideFull: 'Dr. Shiva Shalini',
  tagline: 'Two souls, one journey — with the blessings of our families',
  hashtag: '#SankalpWedsShalini',
}

export const mantra = {
  ganesh: '|| Shree Ganeshay Namah ||',
  shloka: [
    'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।',
    'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
  ],
}

// PAGE 1: Ganesh + blessings
export const blessings = {
  title: 'with the blessings of',
  couples: [
    ['Late Shrimati Manorma Singh', 'Late Shri Bachchan Singh'],
    ['Late Shrimati Saroj Singh', 'Late Shri Paramanand Singh'],
  ],
}

// PAGE 2: the invitation
export const invitation = {
  lead: 'You are cordially invited to the wedding ceremony of',
  groom: {
    name: 'Dr. Sankalp Shashwat',
    relation: 'S/O',
    parents: ['Smt. Vimla Singh &', 'Dr. Jitendra Pratap Singh'],
    family: [
      { relation: 'Sister', name: 'Dr. Ayushi Anushka' },
    ],
  },
  weds: 'Weds',
  bride: {
    name: 'Dr. Shiva Shalini',
    relation: 'D/O',
    parents: ['Smt. Sangeeta Singh &', 'Shri Samrendra Kumar Singh'],
    family: [
      { relation: 'Brother', name: 'Swet Saurabh' },
      { relation: 'Sister-in-law', name: 'Payal Kumari' },
      { relation: 'Niece', name: 'Shivangi' },
    ],
  },
}

// Main resort venue in Udaipur
const RESORT_NAME = 'Ramada Resort & Spa, Udaipur'

// PAGES 3–7: functions. `functions` on one page share its date unless they have their own.
export const events = [
  {
    id: 'mehndi',
    blessing: [
      'As the colours of mehndi bring joy and tradition,',
      'may music and laughter fill the evening that follows.',
    ],
    description:
      'A day of henna, “music” and dance, where hands are painted with love and the night is lit up with songs and celebration.',
    title: 'Mehndi & Sangeet',
    theme: 'mughal',
    element: 'waves',
    date: '8 December 2026',
    functions: [
      {
        name: 'Mehndi',
        time: '11:00 AM',
        venue: ['Spa Deck', RESORT_NAME],
        note: 'Lunch — Meridien',
      },
      {
        name: 'Sangeet',
        time: '7:00 PM',
        venue: ['Pangat Banquet', RESORT_NAME],
      },
    ],
  },
  {
    id: 'haldi',
    blessing: [
      'With the golden glow of haldi and the blessings of loved ones,',
      'we begin the sacred rituals with joy and affection.',
    ],
    description:
      'The auspicious “Haldi” is applied to bless the couple with health, happiness and a radiant start to their new journey.',
    title: 'Haldi',
    theme: 'village',
    element: 'infinity',
    date: '9 December 2026',
    functions: [
      {
        name: 'Haldi',
        time: '10:00 AM',
        venue: ['Rock Garden', RESORT_NAME],
      },
    ],
  },
  {
    id: 'barat',
    blessing: [
      'With dhol, dance and joyous hearts,',
      'we welcome the groom and celebrate the union of two families.',
    ],
    description:
      'The grand “Barat” procession welcomes the groom, followed by the “Jaimala”, where the couple exchange garlands as a promise of love and respect.',
    title: 'Barat & Jaimala',
    theme: 'rajputana',
    element: 'knot',
    date: '9 December 2026',
    functions: [
      {
        name: 'Barat Procession',
        time: '7:00 PM',
        venue: ['Amber Pool Side', RESORT_NAME],
        note: 'Assembly: Main Parking',
      },
      {
        name: 'Jaimala',
        time: '8:30 PM',
        venue: ['Amber Pool Side', RESORT_NAME],
      },
    ],
  },
  {
    id: 'ceremony',
    blessing: [
      'With blessings in the air and gratitude in our hearts,',
      'we look forward to sharing this sacred moment with you.',
    ],
    description:
      'The sacred “Phera” ceremony, where two hearts and two families are united around the holy fire with seven eternal vows.',
    title: 'Phera',
    theme: 'temple',
    element: 'agni',
    date: '9 December 2026',
    functions: [
      {
        name: 'Phera (Vivah Samaroh)',
        time: '10:00 PM',
        venue: ['Sarlat Garden', RESORT_NAME],
      },
    ],
  },
  {
    id: 'bidai',
    blessing: [
      'With moist eyes and hearts full of blessings,',
      'we bid the bride a loving farewell.',
    ],
    description:
      'A heartfelt “Bidai”, as the bride leaves her parental home carrying the love, blessings and best wishes of her family.',
    title: 'Bidai Samaroh',
    theme: 'eternity',
    element: 'lotus',
    date: '10 December 2026',
    functions: [
      {
        name: 'Bidai Samaroh',
        time: '11:00 AM',
        venue: ['Ramada Resort & Spa', 'Udaipur, Rajasthan'],
      },
    ],
  },
]

// PAGE 8: closing
export const closing = {
  awaits: 'We eagerly await your presence and blessings',
  thanks: 'Your presence will make our celebration complete.',
  family: {
    title: 'With Warm Regards & Best Compliments',
    groomSide: {
      title: "Groom's Family",
      members: [
        { relation: 'Sister', name: 'Dr. Ayushi Anushka' },
      ],
    },
    brideSide: {
      title: "Bride's Family",
      members: [
        { relation: 'Brother', name: 'Swet Saurabh' },
        { relation: 'Sister-in-law', name: 'Payal Kumari' },
        { relation: 'Niece', name: 'Shivangi' },
      ],
    },
  },
  rsvpTitle: 'RSVP / Contact',
  contacts: [
    { name: "Groom's Family", phone: '+91 98765 43210' },
    { name: "Bride's Family", phone: '+91 91234 56789' },
  ],
  venue: {
    title: 'Wedding Venue',
    name: 'Ramada Resort & Spa',
    location: 'Udaipur, Rajasthan',
  },
  hashtag: '#SankalpWedsShalini',
}

export const isPlaceholder = () => false

export const mapsLink = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(' '))}`
