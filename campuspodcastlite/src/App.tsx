import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import Player from "./Components/Player";
import PodcastPage from "./Pages/PodcastPage";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pod/:podId" element={<PodcastPage />} />
        </Routes>
      </div>

      <Player />
    </>
  );
}
