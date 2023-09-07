import React, { useRef, useEffect } from "react";
import Aboutme from "./components/Aboutme";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Projects from "./components/Projects";
function App() {
  const model = useRef(null);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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

      gsap.to(model.current["position"], {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#trigger-1",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        x: -250,
        y: -250,
        duration: 1,
      });
      gsap.to(model.current["rotation"], {
        ease: "power4.inOut",
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
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <div id="smooth-content">
          <Navbar />
          <main data-scroll-container ref={containerRef}>
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
      </LocomotiveScrollProvider>
    </>
  );
}
export default App;
