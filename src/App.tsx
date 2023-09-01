import { useRef } from "react";
import Aboutme from "./components/Aboutme";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function App() {
  const model = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  let rotateModel: any;
  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("letters");
    model.current = obj;
    if (model.current) {
      gsap.set(model.current["position"], {
        x: 250,
        y: 75,
      });
      gsap.set(model.current["scale"], { x: 1.3, y: 1.3, z: 1.3 });
      gsap.set(model.current["rotation"], { x: 100, y: 100, z: 100 });
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#222831] h-screen">
        <Spline
          scene="https://prod.spline.design/tyETQWHbb8NLplaa/scene.splinecode"
          onLoad={onLoad}
          className="fixed top-0 left-0 w-full h-full" //niet zichtbaar bij sm device
        />
        <div className="w-full flex justify-around flex-row lg:mt-32 sm:mt-10 relative ">
          <HeroBanner />
          <div> </div>
        </div>
        <div className=" mt-44 relative">
          <Aboutme />
        </div>
      </div>
    </>
  );
}

export default App;
