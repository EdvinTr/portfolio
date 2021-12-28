import memoryCache from "memory-cache";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { classnames } from "tailwindcss-classnames";
import { GithubProfileCard } from "../components/GithubProfileCard";
import { MEMORY_CACHE_KEY } from "../constants";
import { hoverScaleClassNames } from "../styles/utilStyles";
import { getGithubContributions } from "../utils/getGithubContributions";
import {
  getGithubProfile,
  GithubProfileWithContributions,
} from "../utils/getGithubProfile";
interface HomePageProps {
  githubProfile?: GithubProfileWithContributions;
}

const skills = [
  {
    name: "HTML",
    labelBackgroundColor: "bg-amber-200",
    icon: "devicon-html5-plain",
  },
  {
    name: "CSS",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-css3-plain",
  },
  {
    name: "JavaScript",
    labelBackgroundColor: classnames("bg-yellow-200"),
    icon: "devicon-javascript-plain",
  },
  {
    name: "TypeScript",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-typescript-plain",
  },
  {
    name: "React",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-react-plain",
  },
  {
    name: "Vue",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-vuejs-plain",
  },
  {
    name: "Next",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-nextjs-original",
  },
  {
    name: "Tailwind",
    labelBackgroundColor: classnames("bg-blue-300"),
    icon: "devicon-tailwindcss-plain",
  },
  {
    name: "Nest",
    labelBackgroundColor: classnames("bg-red-200"),
    icon: "devicon-nestjs-plain",
  },
  {
    name: "Node",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-nodejs-plain",
  },
  {
    name: "Express",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-express-original",
  },
  {
    name: "Spring",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-spring-plain",
  },
  {
    name: "git",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-git-plain",
  },
  {
    name: "MySQL",
    labelBackgroundColor: "bg-amber-200",
    icon: "devicon-mysql-plain",
  },
  {
    name: "MongoDB",
    labelBackgroundColor: classnames("bg-green-300"),
    icon: "devicon-mongodb-plain",
  },
  {
    name: "PostgreSQL",
    labelBackgroundColor: classnames("bg-blue-300"),
    icon: "devicon-postgresql-plain",
  },
  {
    name: "GraphQL",
    labelBackgroundColor: classnames("bg-purple-200"),
    icon: "devicon-graphql-plain",
  },
  {
    name: "Jest",
    labelBackgroundColor: "bg-amber-300",
    icon: "devicon-jest-plain",
  },
  {
    name: "Redux",
    labelBackgroundColor: classnames("bg-purple-300"),
    icon: "devicon-redux-plain",
  },
  {
    name: "Jupyter",
    labelBackgroundColor: "bg-amber-400",
    icon: "devicon-jupyter-plain",
  },
  {
    name: "Python",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-python-plain",
  },
  {
    name: "Java",
    labelBackgroundColor: classnames("bg-red-300"),
    icon: "devicon-java-plain",
  },
  {
    name: "Figma",
    labelBackgroundColor: classnames("bg-purple-300"),
    icon: "devicon-figma-plain",
  },
];

const Home: NextPage<HomePageProps> = ({ githubProfile }) => {
  return (
    <div className="pt-12 ">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3 md:pr-8">
          <h2 className="text-3xl font-semibold underline decoration-red-500">
            About Me
          </h2>
          {/* // TODO: should calculate (current date - november 2019) */}
          <p className="py-5">
            Hey! I'm Edvin, a dependable web developer. I have been coding
            professionally for over a year, and amateur for over four years. I
            am always eager to learn new technologies and techniques. My primary
            focus has been on front-end development, but I also have experience
            with back-end technologies. Through the development of various
            projects, I have found new ways to improve efficiency and
            sustainability.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-3xl font-semibold underline decoration-red-500">
              Profile
            </h3>
            <i className="devicon-github-original text-md"></i>
          </div>
          {/* github profile card */}
          {githubProfile ? (
            <GithubProfileCard githubProfile={githubProfile} />
          ) : (
            <a
              href="https://github.com/EdvinTr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`bg-red-50 rounded-md my-5 p-5 ${hoverScaleClassNames}`}
              >
                <Image
                  src={require("../public/question-mark.png")}
                  width={120}
                  height={120}
                  className="rounded-full "
                />
              </div>
            </a>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-semibold underline pb-6 decoration-red-500">
          Skills
        </h3>
        <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8">
          {/* skill */}
          {skills.map((skill, idx) => {
            return (
              <div
                className={`max-w-[5.5rem] ${hoverScaleClassNames} hover:scale-110`}
                key={idx}
              >
                <div
                  className={`${skill.labelBackgroundColor} text-xs w-24 font-semibold mb-4 text-center`}
                >
                  {skill.name.toUpperCase()}
                </div>
                <i className={`text-8xl ${skill.icon}`}></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const value = memoryCache.get(MEMORY_CACHE_KEY.GITHUB_PROFILE);
  if (value) {
    return { props: { githubProfile: value } };
  }
  try {
    const username = "EdvinTr";
    const data = await Promise.all([
      getGithubContributions(username),
      getGithubProfile(username),
    ]);
    if (!data) {
      throw new Error();
    }
    const [contributions, profile] = data;
    const githubData: GithubProfileWithContributions = {
      ...profile?.data,
      contributions,
    };
    const FIVE_MINUTES = 1000 * 60 * 5;
    memoryCache.put(MEMORY_CACHE_KEY.GITHUB_PROFILE, githubData, FIVE_MINUTES);
    return {
      props: { githubProfile: githubData },
    };
  } catch (err: any) {
    return {
      props: {},
    };
  }
};

export default Home;
