import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Aboutme from "./Aboutme";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
const WebTree = () => {
  const model = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("letters");
    model.current = obj;

    if (model.current) {
      gsap.set(model.current["position"], {
        x: 400,
        y: 500,
      });
      gsap.set(model.current["scale"], {
        x: 0,
        y: 0,
        z: 0,
      });
      gsap.to(model.current["scale"], {
        x: 2.5,
        y: 2.5,
        z: 2.5,
        duration: 1.5,
        ease: "power4.out",
      });
      gsap.set(model.current["rotation"], { x: 100, y: 100, z: 100 });
      gsap.to(model.current["position"], {
        ease: "ease.inOut",
        scrollTrigger: {
          trigger: "#trigger-1",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
        x: -750,
        y: -370,
        duration: 1,
      });
      gsap.to(model.current["rotation"], {
        ease: "ease.inOut",
        scrollTrigger: {
          trigger: "#trigger-1",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 101.6,

        duration: 1,
      });
    }
  }
  return (
    <>
      <div>
        <main>
          <div className="bg-[#222831] " style={{ height: "100vh" }}>
            <Spline
              scene="https://prod.spline.design/tyETQWHbb8NLplaa/scene.splinecode"
              onLoad={onLoad}
              className="absolute top-0 left-0 invisible lg:visible lg:w-[180vh] lg:h-[180vw] sm:w-[100vw] sm:h-[100vh] sm:overflow-hidden"
              //niet zichtbaar bij sm device
            />
            <div
              className="w-full flex justify-around flex-row lg:mt-32 sm:mt-10 relative lg:mb-[400px] "
              id="trigger-1"
            >
              <HeroBanner />
              <div> </div>
            </div>
            <div
              id="trigger-2"
              className=" mt-[350px] lg:mt-[400px] relative mb-[300px]"
            >
              <Aboutme />
            </div>
            <div className="relative">
              <Projects />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WebTree;
