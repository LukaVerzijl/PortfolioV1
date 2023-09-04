import {
  PrismicRichText,
  PrismicText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { motion } from "framer-motion";
import { useState } from "react";
import "reactjs-popup/dist/index.css";
const Projects = () => {
  const [ProjectList] = useAllPrismicDocumentsByType("projects");
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const onClick = () => {};
  return (
    <div className="h-[300px] text-white relative">
      <div>
        <h1 className="text-5xl font-poppins text-center">Projects</h1>

        <div className=" mt-32 mb-44 text-center justify-evenly flex-row flex  ">
          {ProjectList?.map((project) => (
            <div key={project?.data.uid}>
              <div
                className=" h-44 w-60 flex items-center justify-center"
                style={{ backgroundImage: `url(${project?.data.image})` }}
              >
                <PrismicText field={project?.data.title} />
              </div>
              <motion.div onClick={onClick}></motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
