import type { NextPage } from "next";
import projectsData from "../components/project-display/project-data";
import { ProjectDisplay } from "../components/project-display/ProjectDisplay";
import { headingClassNames } from "../styles/utilStyles";

const ProjectsPage: NextPage = () => {
  return (
    <div className="pt-12">
      <h2 className={`${headingClassNames}`}>Projects</h2>
      <div>
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="py-5 border-b-[3px] border-red-100 border-dashed"
          >
            <ProjectDisplay project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
