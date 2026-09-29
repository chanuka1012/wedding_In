export interface WeddingEvent { title: string; time: string; location: string; description?: string }
export interface StoryItem { year: string; title: string; description: string }
export interface WeddingData {
  couple: { bride: string; groom: string; displayName: string }
  wedding: { date: string; time: string; timezone: string; formattedDate: string }
  invitation: { title: string; message: string }
  venue: { name: string; address: string; mapUrl: string }
  events: WeddingEvent[]
  story: StoryItem[]
  gallery: { src: string; alt: string; tone: string }[]
  contacts: { brideName: string; bridePhone: string; groomName: string; groomPhone: string }
}
