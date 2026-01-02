import type { Podcast } from "../data/podcasts"
import "../Styles/PodCard.css"

type Props = {
  podObj: Podcast
}

export default function PodCard({ podObj }: Props) {
  return (
    <div className="podcard-wrapper">
        <div className="podcard-img">
            <img src={podObj.img} alt={podObj.name} />
      </div>
      <div className="podcard-desc">
            <h4>{podObj.name}</h4>
            <p id="podcard-author">{podObj.author}</p>
            <p id="podcard-summary">{podObj.summary}</p>
        <div className="podcard-bottom">
            <span className="podcard-category">{podObj.category}</span> 
            <p> {podObj.episodesCount} episodes</p>
        </div>
      </div>
    </div>
  )
}