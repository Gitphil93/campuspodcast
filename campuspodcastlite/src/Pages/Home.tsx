import Header from "../Components/Header"
import "../Styles/Home.css"
import Heading from "../Components/Heading"
import PodCard from "../Components/PodCard"
import { podcasts } from "../data/podcasts"

export default function Home() {
  return (
    <>
        <Header />
    <main className="wrapper">

    <Heading
        logo="/stars.svg"
        text="Featured Podcasts"
      />
          <div className="pod-items">
      {podcasts.map(pod => (
        <PodCard key={pod.id} podObj={pod} />
      ))}
    </div>
    </main>
    </>
  )
}
