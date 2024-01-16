import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { gsap, CSSPlugin, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Aboutme from "./Aboutme";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";

const WebTree = () => {
  const model = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSPlugin);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter(
        (counter) =>
          counter < 100
            ? counter + 1
            : (clearInterval(count), setCounter(100), reveal(), 100) // Add 100 as the return value
      );
    }, 25);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("letters");
    model.current = obj;

    if (model.current) {
      gsap.set(model.current["position"], {
        x: 400,
        y: 200,
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
        ease: "power4.Out",
        scrollTrigger: {
          trigger: "#trigger-1",
          start: "top top",
          end: "+=400",
          scrub: 1,
          markers: false,
        },
        x: -650,
        y: -300,
        duration: 1,
      });
      gsap.to(model.current["rotation"], {
        ease: "power4.Out",
        scrollTrigger: {
          trigger: "#trigger-1",
          start: "top top",
          end: "+=400",
          scrub: 1,
          markers: false,
        },
        y: 101.6,
        duration: 1,
      });
    }
  }

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {},
    });
    t1.to("#Follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hideafter", { opacity: 0, duration: 0.3 })
      .to(".hideafter", { display: "none", duration: 0 })
      .to("#Follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.2,
      })

      .to("#content", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 0,
      })
      .to("#trigger-1", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 0,
      })
      .to("#loader", {
        height: "0%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to("#loader", {
        opacity: 0,
        duration: 0,
      });
  };

  return (
    <div
      id="Cont"
      className="w-screen h-screen text-[#222831] relative top-0 left-0"
    >
      <div
        id="loader"
        className="h-full w-full bg-[#222831] flex justify-center items-center absolute top-0 left-0"
      >
        <div
          id="Follow"
          className="absolute bg-white h-0.5 w-0 z-[2] left-0"
        ></div>
        <div
          id="ProgressBar"
          className="hideafter absolute bg-white h-0.5 w-0 transition-[0.4s] duration-[ease-out] left-0"
          style={{ width: counter + "%" }}
        ></div>
        <p
          id="Counter"
          className="hideafter absolute text-[130px] text-white translate-y-[-15px] font-medium"
        >
          {" "}
          {counter}%
        </p>
      </div>
      <main id="content" className=" opacity-0">
        <div>
          <div className="bg-[#222831] " style={{ height: "100vh" }}>
            <Spline
              scene="https://prod.spline.design/tyETQWHbb8NLplaa/scene.splinecode"
              onLoad={onLoad}
              className="absolute top-0 left-0 invisible lg:visible lg:w-[180vh] lg:h-[180vw] sm:w-[100vw] sm:h-[100vh] sm:overflow-hidden"
            />

            <div
              className="w-full flex justify-around flex-row lg:mt-32 sm:mt-10 relative lg:mb-[400px] scroll "
              id="trigger-1"
            >
              <HeroBanner />
              <div> </div>
            </div>
            <div
              id="trigger-2"
              className="mt-[350px] lg:mt-[400px] relative mb-[300px]"
              data-scroll
            >
              <Aboutme />
            </div>
            <section data-scrollbar>
              <div className="relative" data-scroll>
                <Projects />
              </div>
            </section>
          </div>
        </div>
      </main>
      //{" "}
    </div>
  );
};

export default WebTree;
