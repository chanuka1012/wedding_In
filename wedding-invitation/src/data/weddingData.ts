import type { WeddingData } from '../types/wedding'

export const weddingData: WeddingData = {
  couple: { bride: 'Kasuni', groom: 'Chanuka', displayName: 'Kasuni & Chanuka' },
  wedding: { date: '2026-12-20', time: '10:00', timezone: 'Asia/Colombo', formattedDate: 'Sunday, 20 December 2026' },
  invitation: { title: 'Together with our families', message: 'With joyful hearts, we invite you to share in the celebration of our marriage and the beginning of our forever.' },
  venue: { name: 'Grand Ballroom', address: 'Colombo, Sri Lanka', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Ballroom+Colombo+Sri+Lanka' },
  events: [
    { title: 'Wedding Ceremony', time: '10:00 AM', location: 'Grand Ballroom', description: 'A celebration of love, vows, and new beginnings.' },
    { title: 'Wedding Portraits', time: '11:30 AM', location: 'Garden Terrace', description: 'A few cherished moments with our loved ones.' },
    { title: 'Reception', time: '12:30 PM', location: 'Grand Ballroom', description: 'Lunch, laughter, and dancing together.' },
  ],
  story: [
    { year: '2019', title: 'The beginning', description: 'A simple hello became the start of our favourite story.' },
    { year: '2023', title: 'A promise', description: 'Surrounded by love, we chose a lifetime of adventures together.' },
    { year: '2026', title: 'Forever starts here', description: 'We cannot wait to celebrate this beautiful chapter with you.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', alt: 'Bride and groom walking outdoors', tone: 'large' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85', alt: 'Wedding rings and flowers', tone: 'warm' },
    { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=700&q=85', alt: 'Couple at sunset', tone: 'tall' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85', alt: 'Wedding table setting', tone: 'wide' },
  ],
  contacts: { brideName: 'Kasuni', bridePhone: '+94770000000', groomName: 'Chanuka', groomPhone: '+94771111111' },
}
