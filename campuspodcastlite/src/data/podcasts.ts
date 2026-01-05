export type Podcast = {
    id: string
    name: string
    img: string
    author: string
    category: string
    episodesCount: number
    summary: string,
    audioUrl: string
  }
  
  export const podcasts: Podcast[] = [
    {
      id: "campus-chronicles",
      name: "Campus Chronicles",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop",
      author: "Student Media Team",
      category: "Campus News",
      episodesCount: 3,
      summary: "Your weekly dose of campus news, events, and student stories from around the university",
      audioUrl: "https://dcs-spotify.megaphone.fm/WSMM9919448102.mp3?key=1d402d67fc530cf4b021e7e9b7771715&request_event_id=724adc13-817b-4ca9-977d-fdbe571611b2&session_id=724adc13-817b-4ca9-977d-fdbe571611b2&timetoken=1767631293_1D9CFDABC8FCA691D1AA66670E270EC7"
    },
    {
      id: "study-break",
      name: "Study Break Sessions",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
      author: "Academic Support Center",
      category: "Academic",
      episodesCount: 2,
      summary: "Study tips, exam strategies, and academic success advice from top students and professors",
      audioUrl: "http://localhost:5173/public/1.mp3"
    },
    {
        id: "dorm-room-diaries",
        name: "Dorm Room Diaries",
        img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=400&fit=crop",
        author: "Residential Life",
        category: "Student Life",
        episodesCount: 4,
        summary: "Real talk about campus living, roommate dynamics, and making the most of dorm life",
        audioUrl: "http://localhost:5173/public/1.mp3"
      },
      {
        id: "professors-perspective",
        name: "Professor's perspective",
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
        author: "Faculty Spotlight",
        category: "Faculty",
        episodesCount: 5,
        summary: "Behind-the-scenes conversations with professors about their research, teaching, and academic journey",
        audioUrl: "http://localhost:5173/public/1.mp3"
      },
  ]
