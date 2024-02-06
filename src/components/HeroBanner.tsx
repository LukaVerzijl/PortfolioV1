import Latestsong from "./Latestsong";
import { motion } from "framer-motion";
import MainButton from "./MainButton";

const HeroBanner = () => {
  return (
    <div className=" z-50">
      <div>
        <motion.h1
          className="text-8xl text-white font-poppins"
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Hi!
        </motion.h1>
        <motion.h1
          className="text-8xl text-white font-poppins"
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          I am{" "}
          <motion.span
            className=" text-transparent text-8xl bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600"
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Luka
          </motion.span>
        </motion.h1>
        <Latestsong />
        <motion.div className="mt-6">
          <MainButton text="Contact me" link="mailto://hi@lukaverzijl.nl" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
