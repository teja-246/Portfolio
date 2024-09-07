import Navbar from "./components/Navbar";
import BG from "./components/BG";
import About from "./components/About";
import SkillCard from "./components/SkillCard";
import Skills from "./components/Skills";
import Others from "./components/Others";


export default function Home() {
  return (
    <div className="">
      {/* <div className="fixed w-screen h-screen">
        <BG />
      </div> */}

      <div className="">
        <Navbar />
        <About />
        <Others />
        <Skills />
      </div>
    </div>
  );
}
