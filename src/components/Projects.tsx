import { useAllPrismicDocumentsByType } from "@prismicio/react";

import ProjectCard from "./ProjectCard";
const Projects = () => {
  const [ProjectList] = useAllPrismicDocumentsByType("projects");
  return (
    <div className="h-[300px] text-white relative">
      <div>
        <h1 className="text-5xl font-poppins text-center">Projects</h1>

        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          {ProjectList &&
            ProjectList?.map((project, index) => {
              console.log(project);
              return (
                <ProjectCard
                  key={index}
                  title={project.data.title[0].text}
                  image={project.data.image.url}
                  link={project.data.link.url}
                  description={project.data.description[0].text}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
