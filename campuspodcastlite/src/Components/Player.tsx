import { usePlayer } from "../providers/PlayerProvider";
import "../Styles/Player.css"

export default function Player() {
  const { current, isPlaying, toggle, duration, currentTime, seek, volume, setVolume } = usePlayer();
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  if (!current) return null;

  const formatTime = (seconds: number)  => {
    if (!isFinite(seconds) || seconds < 0) return "0:00";

    const total = Math.floor(seconds);
  
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
  
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`;
    }
  
    return `${m}:${s.toString().padStart(2, "0")}`;
  }


  return (
    <div className="player-wrapper">

      <div className="progress-bar-container">
      <input
      className="progress-bar"
        type="range"
        min={0}
        max={duration || 0}
        step={0.01}
        value={Math.min(currentTime, duration || 0)}
        onChange={(e) => seek(Number(e.target.value))}
        style={{ ["--pct" as any]: `${pct}%` }} 
      />
    </div>

        <div className="player-info-container">
          <img src={current.img}></img>
            <div className="player-info">
              <p id="current-title">{current.title}</p>
               <p id="current-name">{current.name}</p>
            </div>
        </div>

        <div className="controls">
            <button id="prev"><img src="prev.svg"/></button> 
              <button id="play" onClick={toggle}><img src={ isPlaying ? "pause.svg" : "play-black.svg"}/></button>
            <button id="next"><img src="next.svg"/></button> 
            <div className="duration">
        <p id="duration">
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
          </div>
        </div>


          <div className="volume">
          <img src="vol.svg"/>
          <input
          className="vol-input"
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(volume * 100)}
          onChange={(e) => setVolume(Number(e.target.value) / 100)}
        />
          </div>
    </div>
  );
}
