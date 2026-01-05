import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import Player from "./Components/Player";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>

      <Player />
    </>
  );
}
