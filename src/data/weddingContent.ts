export interface Person {
  name: string;
  parents: string;
  hometown: string;
  devotion: string;
  role: 'groom' | 'bride';
}

export interface WeddingData {
  groom: Person;
  bride: Person;
  sharedCity: string;
  weddingCity: string;
  weddingState: string;
  weddingDateFormatted: string;
  weddingDateNumeric: string;
  weddingDateIso: string; // ISO string for Asia/Kolkata
  tagline: string;
  subTagline: string;
}

export const WEDDING_DATA: WeddingData = {
  groom: {
    name: "Jindam. Bhavani Prasad",
    parents: "Jindam. Jyothi & Srinivas",
    hometown: "Sangareddy, Telangana",
    devotion: "Lord Hanuman",
    role: "groom"
  },
  bride: {
    name: "Gunnal. Ruchita",
    parents: "Gunnal Krishnaveni & Prabhakar",
    hometown: "Solapur, Maharashtra",
    devotion: "Lord Venkateshwara",
    role: "bride"
  },
  sharedCity: "Hyderabad, Telangana",
  weddingCity: "Solapur",
  weddingState: "Maharashtra",
  weddingDateFormatted: "25 February 2027",
  weddingDateNumeric: "25 • 02 • 2027",
  weddingDateIso: "2027-02-25T10:00:00+05:30",
  tagline: "TWO JOURNEYS. ONE PROMISE.",
  subTagline: "A story written one day at a time."
};

export interface MantraItem {
  id: string;
  script: string;
  transliteration: string;
  meaning: string;
  deity: string;
  symbol: string;
}

export const DEVOTIONAL_DATA = {
  venkateshwara: {
    title: "A PRAYER FOR HER",
    deityName: "श्री वेंकटेश्वर स्वामी",
    subtitle: "Lord Venkateshwara · Tirumala",
    accentColor: "from-amber-400/20 via-sky-900/40 to-slate-950",
    glowColor: "#dfba73",
    icon: "lotus",
    mantras: [
      {
        id: "venkateshwara-main",
        script: "ॐ नमो वेंकटेशाय",
        transliteration: "Om Namo Venkateshaya",
        meaning: "Salutations to Lord Venkateshwara, the dispeller of sins and embodiment of grace.",
        deity: "Lord Venkateshwara",
        symbol: "Tirumala Deepam"
      },
      {
        id: "venkateshwara-secondary",
        script: "श्री वेंकटेश्वराय नमः",
        transliteration: "Shri Venkateshwaraya Namah",
        meaning: "Reverence to the supreme auspiciousness and eternal guardian.",
        deity: "Lord Venkateshwara",
        symbol: "Padma"
      }
    ]
  },
  hanuman: {
    title: "A PRAYER FOR HIM",
    deityName: "श्री हनुमान",
    subtitle: "Lord Hanuman · Devotion & Strength",
    accentColor: "from-amber-600/20 via-orange-950/40 to-slate-950",
    glowColor: "#e07a38",
    icon: "flame",
    mantras: [
      {
        id: "hanuman-main",
        script: "ॐ हनुमते नमः",
        transliteration: "Om Hanumate Namah",
        meaning: "Reverence to Lord Hanuman, embodiment of boundless devotion, humility, and steadfast strength.",
        deity: "Lord Hanuman",
        symbol: "Gada & Dhwaja"
      },
      {
        id: "hanuman-ram",
        script: "श्री राम जय राम जय जय राम",
        transliteration: "Shri Ram Jai Ram Jai Jai Ram",
        meaning: "Victory and supreme peace to Lord Rama, forever residing in Hanuman's heart.",
        deity: "Shri Ram & Hanuman",
        symbol: "Ram Naam"
      }
    ]
  },
  mergedSummary: {
    headline: "TWO PRAYERS. ONE HOUSE. ONE JOURNEY.",
    subtext: "Two distinct paths of devotion, meeting under one sacred roof with love and humility."
  }
};

export const BTS_QUOTES = [
  {
    quote: "Love yourself.",
    author: "BTS",
    context: "A reminder that choosing each other started with knowing who we are.",
    accent: "purple"
  },
  {
    quote: "Speak yourself.",
    author: "BTS",
    context: "Through every quiet evening call, we found our voice together.",
    accent: "indigo"
  },
  {
    quote: "I purple you.",
    author: "V",
    context: "Purple is the last color of the rainbow colors. It means I will trust and love you for a long time.",
    accent: "violet"
  }
];

export const DAILY_LIFE_NARRATIVE = {
  subtitle: "CHAPTER 02 — SOMEWHERE BETWEEN",
  title: "LOVE DIDN’T ARRIVE ALL AT ONCE.",
  emphasis: "IT KEPT GROWING.",
  paragraphs: [
    "Somewhere between deadlines, daily commutes, late replies, tired evenings and “Did you reach?”...",
    "something quiet and unbreakable became permanent.",
    "Bhavani Prasad commuting from Sangareddy to Hyderabad. Ruchita in her Hyderabad hostel after long working hours. Two busy software engineers trying to balance sprints, road traffic, family calls, and dreams.",
    "It wasn’t a dramatic movie scene. It was the comfort of having someone to tell everything to at the end of a long day."
  ],
  equation: [
    { label: "Distance", value: "Sangareddy × Solapur" },
    { label: "Workplace", value: "Hyderabad Tech Parks" },
    { label: "Late Night Calls", value: "Countless hours" },
    { label: "Shared Prayers", value: "Tirumala & Hanuman" },
    { label: "Choosing Each Other", value: "Every single day" }
  ]
};

export const CODE_SECTION_DATA = {
  subtitle: "CHAPTER 04 — WRITTEN IN CODE",
  title: "Two Repositories. One Unified Branch.",
  codeSnippet: `// 25.02.2027: Release v1.0.0
const bhavaniPrasad = {
  from: "Sangareddy, Telangana",
  worksIn: "Hyderabad",
  devotion: "Lord Hanuman",
  status: "Ready for life"
};

const ruchita = {
  from: "Solapur, Maharashtra",
  worksIn: "Hyderabad",
  devotion: "Lord Venkateshwara",
  status: "Ready for life"
};

const story = [
  "meet",
  "know",
  "grow",
  "love",
  "choose",
  "forever"
];

// Continuous Integration
while (life.challenges > 0) {
  patience++;
  love += 1; // still growing...
}

const future = "together";
const wedding = "25 February 2027";`,
  statusMetrics: [
    { label: "Connection", value: "STABLE", status: "ok" },
    { label: "Latency", value: "IRRELEVANT", status: "ok" },
    { label: "Retries", value: "UNNECESSARY", status: "ok" },
    { label: "Memory", value: "GROWING", status: "ok" },
    { label: "Destination", value: "SOLAPUR", status: "highlight" },
    { label: "Release Date", value: "25.02.2027", status: "highlight" },
    { label: "Deployment", value: "FOREVER", status: "ok" }
  ]
};

export const SECRET_LETTER = {
  salutation: "Ruchita,",
  lines: [
    "This website was made for everyone to see our wedding.",
    "But this little part was made for you.",
    "Five months from now, everyone will see the date.",
    "Everyone will see the invitation.",
    "Everyone will celebrate with us.",
    "But before all of that,",
    "I wanted you to see one simple thing:",
    "I am grateful that our ordinary days became our story.",
    "And somehow,",
    "from Sangareddy to Solapur, through Hyderabad, through workdays, commutes, messages, busy evenings, prayers, laughter, and all the little moments in between...",
    "we kept choosing each other.",
    "25 February 2027 is the date.",
    "You are the reason it matters."
  ],
  signature: "— Bhavani Prasad ❤️",
  postScript: "P.S. You still owe me a proper celebration."
};

export const PHOTO_PLACEHOLDERS = [
  {
    id: "memory-1",
    title: "Hyderabad Evenings",
    caption: "Where busy workdays slowly turned into our shared story.",
    fallbackIcon: "coffee"
  },
  {
    id: "memory-2",
    title: "The Conversations",
    caption: "Talking about everything from code builds to home dreams.",
    fallbackIcon: "phone"
  },
  {
    id: "memory-3",
    title: "The Road to Solapur",
    caption: "The journey toward 25 February 2027.",
    fallbackIcon: "map-pin"
  }
];
