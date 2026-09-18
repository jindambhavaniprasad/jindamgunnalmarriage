import { WEDDING_DATA } from '../data/weddingContent';

export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent(`${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name} — Wedding Celebration`);
  const details = encodeURIComponent(`With the blessings of our families, Jindam. Jyothi & Srinivas and Gunnal Krishnaveni & Prabhakar, we request the honor of your presence as Bhavani Prasad & Ruchita unite in marriage.\n\nDate: 25 February 2027\nLocation: Solapur, Maharashtra\n(Venue details to follow)`);
  const location = encodeURIComponent(`${WEDDING_DATA.weddingCity}, ${WEDDING_DATA.weddingState}, India`);
  
  // All-day event or standard start on 2027-02-25
  const dates = "20270225T043000Z/20270225T163000Z"; // ~10:00 AM to 10:00 PM IST
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bhavani Prasad & Ruchita Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:bhavani-ruchita-wedding-20270225@wedding.love",
    "DTSTAMP:20260918T120000Z",
    "DTSTART:20270225T043000Z",
    "DTEND:20270225T163000Z",
    `SUMMARY:${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name} Wedding`,
    `DESCRIPTION:With the blessings of Jindam. Jyothi & Srinivas and Gunnal Krishnaveni & Prabhakar. Venue details to be shared soon.`,
    `LOCATION:${WEDDING_DATA.weddingCity}, ${WEDDING_DATA.weddingState}, India`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "bhavani-ruchita-wedding-25Feb2027.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function getWhatsAppShareUrl(customUrl?: string): string {
  const currentUrl = customUrl || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '');
  const text = encodeURIComponent(
    `Bhavani Prasad & Ruchita are getting married on 25 February 2027 in Solapur, Maharashtra. ❤️✨\n\nTwo journeys. One promise.\n\nOpen our story and invitation: ${currentUrl}`
  );
  return `https://api.whatsapp.com/send?text=${text}`;
}
