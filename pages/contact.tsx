import memoryCache from "memory-cache";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { MEMORY_CACHE_KEY, timeMilliseconds } from "../constants";
import { flexItemsCenter, headingClassNames } from "../styles/utilStyles";
import { fetchDiscordUserById } from "../utils/network-requests/fetchDiscordUser";
import { GithubApiReader } from "../utils/network-requests/github/GithubApiReader";
import { GetGithubProfileResponse } from "../utils/network-requests/github/types";
interface ContactInfo {
  contactProvider: ContactType;
  username: string;
  link: string;
}

enum ContactType {
  DISCORD = "Discord",
  GITHUB = "GitHub",
}
interface ContactPageProps {
  githubInfo?: ContactInfo;
  discordInfo?: ContactInfo;
}
const contactRowClassNames =
  "flex justify-between items-center py-6 border-b-[3px] border-dashed border-red-100";

const ContactPage: NextPage<ContactPageProps> = ({
  discordInfo,
  githubInfo,
}) => {
  return (
    <div className="pt-12">
      <h2 data-cy="page-heading" className={`${headingClassNames}`}>
        Contact Me
      </h2>
      <div className="pt-6">
        {/* github info */}
        {githubInfo && (
          <div className={`${contactRowClassNames}`}>
            <div className={`${flexItemsCenter}`}>
              <i className="devicon-github-original text-5xl"></i>
              <Link href={githubInfo.link}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-4 hover:underline"
                >
                  {githubInfo.contactProvider}
                </a>
              </Link>
            </div>
            <div className="font-semibold hover:scale-125 transition-transform duration-150">
              {githubInfo.username}
            </div>
          </div>
        )}
        {/* discord info */}
        {discordInfo && (
          <div className={`${contactRowClassNames}`}>
            <div className={`${flexItemsCenter}`}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                fontSize="50px"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
              </svg>
              <Link href={discordInfo.link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline ml-4"
                >
                  {discordInfo.contactProvider}
                </a>
              </Link>
            </div>
            <div className="font-semibold hover:scale-125 transition-transform duration-150">
              {discordInfo.username}
            </div>
          </div>
        )}
        <ContactForm className="pt-8" />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const cachedContactData: ContactPageProps | undefined = memoryCache.get(
    MEMORY_CACHE_KEY.CONTACT_INFO
  );
  if (cachedContactData) {
    return {
      props: { ...cachedContactData },
    };
  }

  const contactInfo: ContactPageProps = {};
  const { GITHUB_USER_ID, DISCORD_USER_ID } = process.env;
  const cachedGithubProfileData: GetGithubProfileResponse | undefined =
    memoryCache.get(MEMORY_CACHE_KEY.GITHUB_PROFILE);
  try {
    if (!cachedGithubProfileData) {
      const response = await GithubApiReader.fetchGithubProfileByUserId(
        GITHUB_USER_ID
      );
      const username = response?.data?.login;
      if (username) {
        contactInfo.githubInfo = {
          contactProvider: ContactType.GITHUB,
          username: username,
          link: `https://github.com/${username}`,
        };
      }
    } else {
      contactInfo.githubInfo = {
        contactProvider: ContactType.GITHUB,
        username: cachedGithubProfileData.login,
        link: `https://github.com/${cachedGithubProfileData.login}`,
      };
    }

    const discordUsername = await fetchDiscordUserById(DISCORD_USER_ID);
    if (discordUsername) {
      contactInfo.discordInfo = {
        contactProvider: ContactType.DISCORD,
        username: discordUsername,
        link: `https://discord.com/users/${discordUsername}`,
      };
    }
    memoryCache.put(
      MEMORY_CACHE_KEY.CONTACT_INFO,
      contactInfo,
      timeMilliseconds.FIVE_MINUTES
    );
    return {
      props: {
        ...contactInfo,
      },
    };
  } catch {
    return {
      props: { ...contactInfo },
    };
  }
};

export default ContactPage;
