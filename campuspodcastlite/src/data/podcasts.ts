export type Podcast = {
    id: string
    name: string
    img: string
    author: string
    category: string
    episodesCount: number
    summary: string
  }
  
  export const podcasts: Podcast[] = [
    {
      id: "campus-chronicles",
      name: "Campus Chronicles",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop",
      author: "Student Media Team",
      category: "Campus News",
      episodesCount: 3,
      summary: "Your weekly dose of campus news, events, and student stories from around the university"
    },
    {
      id: "study-break",
      name: "Study Break Sessions",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
      author: "Academic Support Center",
      category: "Academic",
      episodesCount: 2,
      summary: "Study tips, exam strategies, and academic success advice from top students and professors"
    },
    {
        id: "dorm-room-diaries",
        name: "Dorm Room Diaries",
        img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=400&fit=crop",
        author: "Residential Life",
        category: "Student Life",
        episodesCount: 4,
        summary: "Real talk about campus living, roommate dynamics, and making the most of dorm life"
      },
      {
        id: "professors-perspective",
        name: "Professor's perspective",
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
        author: "Faculty Spotlight",
        category: "Faculty",
        episodesCount: 5,
        summary: "Behind-the-scenes conversations with professors about their research, teaching, and academic journey"
      },
  ]
