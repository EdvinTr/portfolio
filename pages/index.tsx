import {
  BookmarkIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { CodeIcon } from "@heroicons/react/solid";
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

const iconClassNames = "w-5 h-5 mr-1 ml-[-3px]";

const Home: NextPage<HomePageProps> = ({ githubProfile }) => {
  // TODO:
  // ! FIX THIS
  if (!githubProfile) {
    return <div>No profile</div>;
  }
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
          {/* profile card */}
          <a
            href={githubProfile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-red-50 rounded-md my-5 p-5 hover:scale-105 transition-transform duration-150 ease-in-out">
              <div className="flex items-center">
                <img
                  src={githubProfile.avatar_url}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full ring-2 ring-red-500"
                />
                {/* profile info */}
                <div className="pl-6">
                  <h4 className="font-semibold">{githubProfile?.login}</h4>
                  <div className="space-y-[0.15rem]">
                    <div className="flex items-center">
                      <BookmarkIcon className={iconClassNames} />
                      {githubProfile?.public_repos} Projects
                    </div>
                    <div className="flex items-center">
                      <CodeIcon className={iconClassNames} />
                      <div>{githubProfile?.contributions} Contributions</div>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className={iconClassNames} />
                      <div>{githubProfile?.followers} Followers</div>
                    </div>
                    <div className="flex items-center">
                      <LocationMarkerIcon className={iconClassNames} />
                      <div>{githubProfile?.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
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
