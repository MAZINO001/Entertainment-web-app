import SideBar from "./SideBarFolder/SideBar";
import Home from "./containerFolder/Home";

export default function Wrapper() {
  return (
    <div className="flex ">
      <SideBar />
      <Home />
    </div>
  );
}
