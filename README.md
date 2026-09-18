# Bhavani Prasad × Ruchita — Interactive Wedding Experience
> **“TWO JOURNEYS. ONE PROMISE.”**  
> 25 February 2027 · Solapur, Maharashtra

A bespoke, cinematic, and Hindu-devotional wedding website and interactive love story built for **Jindam. Bhavani Prasad** and **Gunnal. Ruchita**.

---

## 🌟 Features

- **Cinematic Visual DNA**: Deep temple-night blue, warm antique gold, ivory sandalwood accents, and faint sacred mandapa geometry.
- **Narrative Chapters**:
  - **Intro**: Sacred diya fade-in with opening quote: *"Some stories begin with a hello. Ours kept growing with every day after it."*
  - **Hero**: Atmospheric opener with couple names, date (`25 • 02 • 2027`), city (`Solapur, Maharashtra`), and breathing golden halo.
  - **Chapter 01 — The Journeys**: Sangareddy (Groom) and Solapur (Bride) converging in Hyderabad (shared tech work city), flowing toward Solapur for the wedding.
  - **Chapter 02 — Somewhere Between**: Intimate everyday memories of Hyderabad commutes, late replies, and the interactive love equation (*Distance + Time + Workdays = US*).
  - **Chapter 03 — Two Devotions**: Sacred split-panel reverence:
    - **Ruchita**: Lord Venkateshwara (*ॐ नमो वेंकटेशाय / Om Namo Venkateshaya*) with tap-to-expand sacred halo.
    - **Bhavani Prasad**: Lord Hanuman (*ॐ हनुमते नमः / Om Hanumate Namah* & *श्री राम जय राम जय जय राम*).
    - **Convergence**: *"TWO PRAYERS. ONE HOUSE. ONE JOURNEY."*
  - **Chapter 04 — Written in Code**: Software engineer hybrid terminal & IDE with interactive `love += 1` increment, relationship system status, and runnable `$ ./open_the_secret` console.
  - **Chapter 05 — BTS Accent**: Short, restrained, attributed quotes (*Love yourself*, *Speak yourself*, *I purple you*).
  - **Chapter 06 — The Promise**: Live countdown to 25 February 2027 (Asia/Kolkata timezone).
  - **Chapter 07 — The Invitation**: Ceremonial unfolding card acknowledging parents **Jindam. Jyothi & Srinivas** and **Gunnal Krishnaveni & Prabhakar**, with Google Calendar, `.ics` download, and WhatsApp share buttons.
  - **Chapter 08 — The Blessing**: Sacred closing prayers.
  - **The Secret Letter**: Fullscreen ambient surprise letter from Bhavani Prasad to Ruchita triggered via button or terminal.

---

## 🔊 Sound Design

- **Background Music**: The emotional **Jersey Title Theme** (`/public/audio/jersey-theme.mp3`) bundled directly with the project assets, playing in a continuous loop upon entering the story.
- **Floating Controls**: Floating music toggle (`♫ Music: On / Off`) at the top-right corner allows pausing/resuming anytime.
- **Temple Bell Chime**: Uses browser procedural Web Audio API to synthesize sacred bronze temple bell overtones on tap.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🧭 URL Modes

You can share the website using custom query parameters:

| URL Parameter | Experience |
|---|---|
| `?mode=story` (Default) | Full narrative film-like scroll experience starting from the intro diya. |
| `?from=bhavani` or `?from=bhavaniprasad` or `?mode=secret` | Shows a special indicator: *"A MESSAGE MEANT FOR ONE PERSON"* tailored as Bhavani Prasad's private gift to Ruchita. |
| `?mode=invite` | Skips the intro and scrolls directly to the formal wedding invitation card. |

---

## 📝 Customization Guide

All data, text, mantras, and quotes are centralized in a single file:
👉 `src/data/weddingContent.ts`

- **Names & Parents**: Edit `WEDDING_DATA.groom` and `WEDDING_DATA.bride`.
- **Date & Location**: Edit `weddingDateFormatted`, `weddingDateNumeric`, `weddingCity`, etc.
- **Mantras**: Edit `DEVOTIONAL_DATA.venkateshwara` or `DEVOTIONAL_DATA.hanuman`.
- **BTS Quotes**: Edit `BTS_QUOTES` array.
- **Secret Letter**: Edit `SECRET_LETTER` object.
- **Photos / Memories**: Place your pictures in `public/images/` and update `PHOTO_PLACEHOLDERS`.

---

## 🌐 Deployment

### Vercel / Netlify
1. Push this repository to GitHub.
2. Connect repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
Run `npm run build` and deploy the `dist` folder to `gh-pages`.

