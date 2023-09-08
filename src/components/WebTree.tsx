import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Aboutme from "./Aboutme";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
import Navbar from "./Navbar";
const WebTree = () => {
  const model = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("letters");
    model.current = obj;
    if (model.current) {
      gsap.set(model.current["position"], {
        x: 250,
        y: 100,
      });
      gsap.set(model.current["scale"], { x: 1.3, y: 1.3, z: 1.3 });
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
        x: -250,
        y: -270,
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
        y: 101.5,

        duration: 1,
      });
    }
  }
  return (
    <>
      <div>
        <Navbar />
        <main>
          <div className="bg-[#222831] h-full">
            <Spline
              scene="https://prod.spline.design/tyETQWHbb8NLplaa/scene.splinecode"
              onLoad={onLoad}
              className="absolute top-0 left-0 w-full h-full sm:hidden lg:block" //niet zichtbaar bij sm device
            />
            <div
              className="w-full flex justify-around flex-row lg:mt-32 sm:mt-10 relative "
              id="trigger-1"
            >
              <HeroBanner />
              <div> </div>
            </div>
            <div id="trigger-2" className=" mt-[350px] relative mb-[300px]">
              <Aboutme />
            </div>
            <div>
              <Projects />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WebTree;
