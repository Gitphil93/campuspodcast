import type { Podcast } from "../data/podcasts"
import "../Styles/PodCard.css"
import { usePlayer } from "../providers/PlayerProvider"

type Props = {
  podObj: Podcast
}

export default function PodCard({ podObj }: Props) {
  const { play } = usePlayer();

  return (
    <div className="podcard-wrapper">
        <div className="podcard-media">
            <img className="podcard-img" src={podObj.img} alt={podObj.name} />
              <span className="play-button-container">
                 <button className="play-button"onClick={() =>
          play({
            id: podObj.id,
            name: podObj.name,
            title: podObj.author,
            audioUrl: podObj.audioUrl,
            img: podObj.img
          })
        } >
                 <img src="play.svg"></img>
              </button>
          </span>
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