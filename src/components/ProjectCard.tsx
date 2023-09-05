interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
}
import { motion } from "framer-motion";
export default function ProjectCard({
  image,
  title,
  link,
  description,
}: ProjectCardProps) {
  return (
    <a href={link}>
      <motion.div
        className="relative mb-8  mx-5 rounded-xl bg-cover bg-center h-[55vw] lg:h-[20vw] "
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
      >
        <div className="absolute rounded-xl inset-0 bg-black opacity-40"></div>
        <div className=" absolute inset-0 flex items-center justify-center">
          <div className="text-white ">
            <h1 className="text-center font-bold text-3xl pl-12">{title}</h1>
            <p className="text-l font-poppins mt-5">{description}</p>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
