import SideBar from "./SideBarFolder/SideBar";
import Container from "./containerFolder/Container";
import { useState } from "react";
export default function Wrapper() {
  const [activeMiniSquares, setActiveMiniSquares] = useState(true);
  const [activeLocalMovies, setActiveLocalMovies] = useState(false);
  const [activeTelevision, setActiveTelevision] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);
  return (
    <div className="flex ">
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
