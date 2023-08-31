import { useRef } from "react";
import Aboutme from "./components/Aboutme";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
function App() {
  const model = useRef(null);

  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("letters");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    model.current = obj;
    if (model.current) {
      gsap.set(model.current["position"], {
        x: 300,
        y: 100,
      });
      gsap.set(model.current["scale"], { x: 1, y: 1, z: 1 });
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
        <div className=" mt-44">
          <Aboutme />
        </div>
      </div>
    </>
  );
}

export default App;
