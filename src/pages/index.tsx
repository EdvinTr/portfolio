import { motion } from "framer-motion";
import memoryCache from "memory-cache";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { GithubEventCard } from "../components/github-events/GithubEventCard";
import { GithubProfileCard } from "../components/GithubProfileCard";
import { SkillCardList } from "../components/skill/SkillCardList";
import {
  GITHUB_USERNAME,
  MEMORY_CACHE_KEY,
  timeMilliseconds,
} from "../constants";
import { headingClassNames, hoverScaleClassNames } from "../styles/utilStyles";
import { GithubEvent } from "../typings/GithubEventResponse.interface";
import { calculateYearsOfCodingExperience } from "../utils/calculateYearsOfCodingExperience";
import { getFromCacheOrFetch } from "../utils/getFromCacheOrFetch";
import { GithubApiReader } from "../utils/network-requests/github/GithubApiReader";
import { scrapeGithubContributions } from "../utils/network-requests/github/scrapeGithubContributions";
import {
  GithubProfileData,
  GithubProfileWithContributions,
} from "../utils/network-requests/github/types";

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
interface HomePageProps {
  githubProfile?: GithubProfileWithContributions;
}

interface GithubEventsState {
  data: GithubEvent[] | null;
  isLoading: boolean;
  error: null | string;
}
const Home: NextPage<HomePageProps> = ({ githubProfile }) => {
  const [githubEventsData, setGithubEventsData] = useState<GithubEventsState>({
    isLoading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    const fetchGithubEvents = async (): Promise<void> => {
      try {
        setGithubEventsData((g) => ({
          ...g,
          error: null,
          isLoading: true,
        }));
        const githubEvents = await GithubApiReader.fetchGithubEventsByUsername(
          GITHUB_USERNAME
        );

        if (!githubEvents) {
          throw new Error();
        }
        setGithubEventsData((g) => ({
          ...g,
          data: githubEvents,
          isLoading: false,
        }));
      } catch (err: any) {
        setGithubEventsData((g) => ({
          ...g,
          error: "Failed to load Github events",
          isLoading: false,
        }));
      }
    };
    fetchGithubEvents();
  }, []);

  const getYearsOfCodingExperience = (): string => {
    const startDate = new Date(2019, 10, 1);
    const yearsOfCoding = calculateYearsOfCodingExperience(startDate);
    return numberWords[yearsOfCoding];
  };

  return (
    <motion.div
      className="pt-12"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3 md:pr-8">
          <h2 className={`${headingClassNames}`}>About Me</h2>
          <p className="py-5">
            {`Hey! I'm Edvin, a dependable web developer. I have been coding
              for over ${getYearsOfCodingExperience()} years, and it quickly turned
              into one of my favorite things to do. My main focus has been on
              front-end development, but through various projects I have acquired
              experience with back-end technologies as well. I am always eager to
              learn new technologies and techniques that will add to my skill set.`}
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
                  src="/img/question-mark.png"
                  alt="question mark"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </a>
          )}
        </div>
      </div>
      <h3 className={`${headingClassNames} pb-6`}>Skills</h3>
      <SkillCardList />
      {/* dashboard section */}
      <div className="py-8 lg:py-32">
        <h3 className={`${headingClassNames} `}>Personal Dashboard</h3>
        <div className="border-l-[3px] border-red-500 mt-4 pl-2">
          <h4 className={`text-lg sm:text-xl font-semibold`}>GitHub</h4>
          <p className="text-sm sm:text-base">Most Recent Actions</p>
        </div>
        {githubEventsData.isLoading && (
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={300}
            color="rgba(239, 68, 68,1)"
            secondaryColor="rgba(172, 57, 57, 0)"
            className="mt-4"
          />
        )}
        {githubEventsData.error && (
          <span className="text-red-500 block pt-4">
            {githubEventsData.error}
          </span>
        )}
        {githubEventsData.data &&
          githubEventsData.data.map((githubEvent, idx) => {
            return <GithubEventCard githubEvent={githubEvent} key={idx} />;
          })}
      </div>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  // ? this is redundant?
  const cachedGithubProfile: GithubProfileData | null = memoryCache.get(
    MEMORY_CACHE_KEY.GITHUB_PROFILE
  );
  const cachedGithubContributions = memoryCache.get(
    MEMORY_CACHE_KEY.GITHUB_CONTRIBUTIONS
  );
  if (cachedGithubProfile && cachedGithubContributions) {
    return {
      props: {
        githubProfile: {
          ...cachedGithubProfile,
          contributions: cachedGithubContributions,
        },
      },
    };
  }
  //!remove to here
  try {
    const githubProfile = await getFromCacheOrFetch<GithubProfileData>(
      MEMORY_CACHE_KEY.GITHUB_PROFILE,
      GithubApiReader.fetchGithubProfileByUserId.bind(
        null,
        process.env.GITHUB_USER_ID
      ),
      { shouldCache: true, ttl: timeMilliseconds.FIVE_MINUTES }
    );
    if (!githubProfile.data) {
      throw new Error();
    }

    const contributions = await getFromCacheOrFetch<string | number>(
      MEMORY_CACHE_KEY.GITHUB_CONTRIBUTIONS,
      scrapeGithubContributions.bind(null, GITHUB_USERNAME),
      { shouldCache: true, ttl: timeMilliseconds.FIVE_MINUTES }
    );
    const githubData: GithubProfileWithContributions = {
      ...githubProfile.data,
      contributions: contributions.data || "N/A",
    };
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
