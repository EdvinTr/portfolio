import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import projectsData from "../components/project-display/project-data";
import { ProjectDisplay } from "../components/project-display/ProjectDisplay";
import { BASE_WEBSITE_NAME } from "../constants";
import { headingClassNames } from "../styles/utilStyles";
const ProjectsPage: NextPage = () => {
  return (
    <motion.div
      className="pt-12"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Projects | {BASE_WEBSITE_NAME}</title>
      </Head>
      <h2 data-cy="page-heading" className={`${headingClassNames}`}>
        Projects
      </h2>
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
    </motion.div>
  );
};

export default ProjectsPage;
