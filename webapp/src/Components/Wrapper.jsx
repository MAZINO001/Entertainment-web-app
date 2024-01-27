import SideBar from "./SideBarFolder/SideBar";
import Container from "./containerFolder/Container";

export default function Wrapper() {
  return (
    <div className="flex ">
      <SideBar />
      <Container />
    </div>
  );
}
