import type { NextPage } from "next";
import projectsData from "../components/project-display/project-data";
import { ProjectDisplay } from "../components/project-display/ProjectDisplay";
import { headingClassNames } from "../styles/utilStyles";

const ProjectsPage: NextPage = () => {
  return (
    <div className="pt-12">
      <h2 className={`${headingClassNames}`}>Projects</h2>
      <div className="py-6">
        {projectsData.map((project, idx) => (
          <ProjectDisplay key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
