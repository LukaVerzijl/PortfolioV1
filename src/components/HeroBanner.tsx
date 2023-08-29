import Lottie from "lottie-react";
import Latestsong from "./Latestsong";
import { motion } from "framer-motion";
import heroanimation from "../assets/heroanimation.json";
import Mainbutton from "./Mainbutton";
const HeroBanner = () => {
  return (
    <div className="w-full flex justify-evenly flex-row lg:mt-32 sm:mt-10 items-center">
      <div>
        <div>
          <motion.h1 className="text-8xl text-white font-poppins">
            Welkom
          </motion.h1>
          <motion.h1 className="text-8xl text-white font-poppins">
            Ik ben{" "}
            <span className=" text-transparent text-8xl bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Luka
            </span>
          </motion.h1>
          <Latestsong />
          <motion.div className="mt-6">
            <Mainbutton text="Contact me" />
          </motion.div>
        </div>
      </div>
      <div className="flex">
        <Lottie animationData={heroanimation} />
      </div>
    </div>
  );
};

export default HeroBanner;
