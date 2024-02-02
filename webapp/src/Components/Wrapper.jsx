import SideBar from "./2.SideBar/SideBar";
import Container from "./1.container/Container";

export default function Wrapper() {
  return (
    <div className="flex flex-col md:flex-row ">
      <SideBar />
      <Container />
    </div>
  );
}
