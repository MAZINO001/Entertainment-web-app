import SideBar from "./2.SideBar/SideBar";
import Container from "./1.container/Container";
import { useState } from "react";

export default function Wrapper() {
  const [isSearchContainerOpen, setIsSearchContainerOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchContainerOpen(true);
  };

  const handleSearchContainerClose = () => {
    setIsSearchContainerOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <SideBar handleSearchContainerClose={handleSearchContainerClose} />
      <Container
        handleSearchClick={handleSearchClick}
        handleSearchContainerClose={handleSearchContainerClose}
        isSearchContainerOpen={isSearchContainerOpen}
      />
    </div>
  );
}
