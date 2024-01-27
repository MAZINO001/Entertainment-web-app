import SideBar from "./SideBarFolder/SideBar";
import Container from "./containerFolder/Container";

export default function Wrapper() {
  return (
    <div className="flex w-[100%] h-[100%]">
      <SideBar />
      <Container />
    </div>
  );
}
