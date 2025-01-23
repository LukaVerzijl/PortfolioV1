import { motion } from "framer-motion";

interface ButtonProps {
  link: string;
  text: string;
}

const MainButton = (props: ButtonProps) => {
  return (
    <motion.div
      transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <a
        href={props.link}
        className="inline-flex items-center justify-center h-10 px-7 py-0 text-l font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-2xs focus:no-underline"
      >
        {props.text}
      </a>
    </motion.div>
  );
};

export default MainButton;
