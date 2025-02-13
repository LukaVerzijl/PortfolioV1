import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { client } from "../prismic";
import { useQuery } from "@tanstack/react-query";
const Projects = () => {
  const { data } = useQuery({
    queryKey: ["ProjectList"],
    queryFn: () => client.getAllByType("projects"),
  });
  return (
    <div className="h-[300px] text-white relative">
      <div>
        <motion.h1
          className="text-5xl font-poppins text-center"
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Projects
        </motion.h1>

        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          {data &&
            data?.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.data.title[0].text}
                  image={project.data.image.url}
                  link={project.data.link.url}
                  description={project.data.description[0].text}
                  uid={project.uid}
                />
              );
            })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
