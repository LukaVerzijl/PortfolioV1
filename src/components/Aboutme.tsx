import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { motion } from "framer-motion";
const Aboutme = () => {
  const [AboutMe] = useSinglePrismicDocument("aboutme2");

  return (
    <motion.div
      className="w-full flex lg:mt-64 sm:mt-10 items-center justify-end"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      id="aboutme"
    >
      <div></div>

      <div className="flex flex-col text-white lg:mr-[150px] ">
        <h1 className="text-5xl text-white font-poppins">About me </h1> {"\n"}
        <div className="font-poppins text-m">
          <PrismicRichText field={AboutMe?.data.text} />
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
