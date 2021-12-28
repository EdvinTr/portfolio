import memoryCache from "memory-cache";
import type { GetStaticProps, NextPage } from "next";
import { MEMORY_CACHE_KEY } from "../constants";
import { getGithubContributions } from "../utils/getGithubContributions";
import {
  getGithubProfile,
  GithubProfileWithContributions,
} from "../utils/getGithubProfile";
interface HomePageProps {
  githubProfile?: GithubProfileWithContributions;
}

const Home: NextPage<HomePageProps> = ({ githubProfile }) => {
  // TODO:
  // ! FIX THIS
  if (!githubProfile) {
    return <div>No profile</div>;
  }
  return (
    <div className="pt-12">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3 md:pr-8">
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
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-3xl font-semibold underline decoration-red-500">
              Profile
            </h3>
            <i className="devicon-github-original text-md"></i>
          </div>
          {/* profile card */}
          <div className="bg-red-50 rounded-md my-5 p-5">
            <div className="flex items-center">
              {/*  <Image
                src={githubProfile.avatar_url}
                width="120"
                height="120"
                className="rounded-full ring-2 ring-red-500 p-4"
              /> */}
              <img
                src={githubProfile.avatar_url}
                alt=""
                className="w-[120px] h-[120px] rounded-full ring-2 ring-red-500"
              />
              {/* profile info */}
              <div className="pl-6">
                <h4 className="font-semibold">{githubProfile?.login}</h4>
                <div>{githubProfile?.public_repos} Projects</div>
                <div>{githubProfile?.contributions} Contributions</div>
                <div>{githubProfile?.followers} Followers</div>
                <div>{githubProfile?.location}</div>
              </div>
            </div>
          </div>
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
