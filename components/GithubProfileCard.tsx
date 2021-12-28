import {
  BookmarkIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { CodeIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { hoverScaleClassNames } from "../styles/utilStyles";
import { GithubProfileWithContributions } from "../utils/getGithubProfile";
interface GithubProfileCardProps {
  githubProfile: GithubProfileWithContributions;
}
const iconClassNames = "w-5 h-5 mr-1 ml-[-3px]";

export const GithubProfileCard: React.FC<GithubProfileCardProps> = ({
  githubProfile,
}) => {
  return (
    <Fragment>
      <a
        href={githubProfile.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`bg-red-50 rounded-md my-5 p-5 ${hoverScaleClassNames}`}
        >
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
    </Fragment>
  );
};
