import Navbar from "./components/Navbar";
import BG from "./components/BG";
import About from "./components/About";


export default function Home() {
  return (
    <div className="">
      {/* <div className="fixed w-screen h-screen">
        <BG />
      </div> */}

      <div className="">
        <Navbar />
        <About />
      </div>
    </div>
  );
}
