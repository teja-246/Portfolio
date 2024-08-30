import Navbar from "./components/Navbar";
import BG from "./components/BG";

export default function Home() {
  return (
    <div>
      <div className="fixed w-screen h-screen">
        <BG />
      </div>

      <div className="relative">
        <Navbar />
      </div>
    </div>
  );
}
