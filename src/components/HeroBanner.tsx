import Latestsong from "./Latestsong";
import { motion } from "framer-motion";
import Mainbutton from "./Mainbutton";

const HeroBanner = () => {
  return (
    <div>
      <div>
        <motion.h1 className="text-8xl text-white font-poppins">Hi!</motion.h1>
        <motion.h1 className="text-8xl text-white font-poppins">
          I am{" "}
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
  );
};

export default HeroBanner;
