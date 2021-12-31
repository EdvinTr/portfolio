import type { NextPage } from "next";
import { headingClassNames } from "../styles/utilStyles";

const ProjectsPage: NextPage = () => {
  return (
    <div className="pt-12">
      <h2 className={`${headingClassNames}`}>Projects</h2>
      <div className="py-6">
        <h3 className="text-xl font-semibold">Scoreflicks</h3>
      </div>
    </div>
  );
};

export default ProjectsPage;
