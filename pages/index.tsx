import memoryCache from "memory-cache";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { GithubProfileCard } from "../components/GithubProfileCard";
import { SkillCardList } from "../components/skill/SkillCardList";
import { GITHUB_USERNAME, MEMORY_CACHE_KEY } from "../constants";
import { hoverScaleClassNames } from "../styles/utilStyles";
import { GithubEvent } from "../typings/GithubEventResponse.interface";
import { getGithubContributions } from "../utils/getGithubContributions";
import { getGithubEvents } from "../utils/getGithubEvents";
import {
  getGithubProfile,
  GithubProfileWithContributions,
} from "../utils/getGithubProfile";

interface HomePageProps {
  githubProfile?: GithubProfileWithContributions;
}

const headingClassNames = "text-3xl font-semibold underline decoration-red-500";

const Home: NextPage<HomePageProps> = ({ githubProfile }) => {
  const [githubEventsData, setGithubEventsData] = useState<
    GithubEvent[] | null
  >(null);
  const [isLoadingGithubEvents, setIsLoadingGithubEvents] = useState(false);
  useEffect(() => {
    const fetchGithubEvents = async () => {
      try {
        setIsLoadingGithubEvents(true);
        const githubEvents = await getGithubEvents(GITHUB_USERNAME);
        if (!githubEvents || !githubEvents.data) {
          throw new Error();
        }
        setIsLoadingGithubEvents(false);
        setGithubEventsData(githubEvents.data);
      } catch (err: any) {
        // TODO: set error message or something?
        setIsLoadingGithubEvents(false);
      }
    };
    fetchGithubEvents();
  }, []);
  return (
    <div className="pt-12 ">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3 md:pr-8">
          <h2 className={`${headingClassNames}`}>About Me</h2>
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
            <h3 className={`${headingClassNames}`}>Profile</h3>
            <i className="devicon-github-original text-md"></i>
          </div>
          {/* github profile card */}
          {githubProfile ? (
            <GithubProfileCard githubProfile={githubProfile} />
          ) : (
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
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
                  className="rounded-full"
                />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="">
        <h3 className={`${headingClassNames} pb-6`}>Skills</h3>
        <SkillCardList />
      </div>
      <div className="py-8">
        <h3 className={`${headingClassNames}`}>Personal Dashboard</h3>
        <div className="border-l-[3px] border-red-500 mt-4 pl-2">
          <h5 className={`text-xl font-semibold`}>GitHub</h5>
          <p>Most Recent Actions</p>
        </div>
        {isLoadingGithubEvents && (
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={300}
            color="rgba(239, 68, 68,1)"
            secondaryColor="rgba(172, 57, 57, 0)"
            className="mt-4"
          />
        )}
        {/*  {githubEventsData && (
          <div>
            {githubEventsData.map((githubEvent, idx) => {
              return (
                <div key={idx}>
                  <div>{githubEvent.actor.login} </div>
                  <div>
                    made a new {githubEvent.type} to {githubEvent.repo.url}
                  </div>
                </div>
              );
            })}
          </div>
        )} */}
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
    const data = await Promise.all([
      getGithubContributions(GITHUB_USERNAME),
      getGithubProfile(GITHUB_USERNAME),
    ]);
    const [contributions, profile] = data;
    if (!contributions || !profile) {
      throw new Error();
    }
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
