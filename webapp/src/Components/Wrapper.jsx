import SideBar from "./2.SideBar/SideBar";
import Container from "./1.container/Container";
import { useState } from "react";
export default function Wrapper() {
  const [activeMiniSquares, setActiveMiniSquares] = useState(true);
  const [activeLocalMovies, setActiveLocalMovies] = useState(false);
  const [activeTelevision, setActiveTelevision] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);
  return (
    <div className="flex flex-col md:flex-row ">
      <SideBar
        activeMiniSquares={activeMiniSquares}
        activeLocalMovies={activeLocalMovies}
        activeTelevision={activeTelevision}
        activeBookmark={activeBookmark}
        setActiveMiniSquares={setActiveMiniSquares}
        setActiveLocalMovies={setActiveLocalMovies}
        setActiveTelevision={setActiveTelevision}
        setActiveBookmark={setActiveBookmark}
      />
      <Container
        activeMiniSquares={activeMiniSquares}
        activeLocalMovies={activeLocalMovies}
        activeTelevision={activeTelevision}
        activeBookmark={activeBookmark}
      />
    </div>
  );
}
