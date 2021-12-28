import memoryCache from "memory-cache";
import type { NextPage } from "next";
import { getGithubContributions } from "../utils/getGithubContributions";
interface HomePageProps {
  githubContributions?: number;
}
const Home: NextPage<HomePageProps> = ({ githubContributions }) => {
  return (
    <div className="pt-12">
      <div className="md:grid md:grid-cols-3">
        <div className="col-span-2 pr-16">
          <h2 className="text-3xl font-semibold underline decoration-red-500">
            About Me
          </h2>
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
        <div className="flex items-center md:items-start">
          <div className="flex items-center space-x-3">
            <h3 className="text-3xl font-semibold underline decoration-red-500">
              Profile
            </h3>
            <i className="devicon-github-original text-md"></i>
            <div>{githubContributions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const values = memoryCache.get("githubContributions");
  if (values) {
    return { props: { githubContributions: values } };
  }
  try {
    const data = await getGithubContributions("EdvinTr");
    if (!data) {
      throw new Error();
    }
    const FIVE_MINUTES = 5 * 60 * 1000;
    memoryCache.put("githubContributions", data, FIVE_MINUTES);
    return {
      props: { githubContributions: data }, // will be passed to the page component as props
    };
  } catch (err: any) {
    return {
      props: { githubContributions: "??" },
    };
  }
}

export default Home;
