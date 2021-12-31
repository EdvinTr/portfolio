import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { GithubEvent } from "../../typings/GithubEventResponse.interface";
interface GithubEventCardProps {
  githubEvent: GithubEvent;
}

export const GithubEventCard: React.FC<GithubEventCardProps> = ({
  githubEvent,
}) => {
  const formatGithubEventType = (type: string): JSX.Element => {
    switch (type) {
      case "PushEvent":
        return <span className="text-purple-700">Push</span>;

      case "CreateEvent":
        return <span className="text-green-700">Create</span>;

      case "IssuesEvent":
        return <span className="text-orange-700">Issue</span>;
      default:
        return <span>{type}</span>;
    }
  };
  return (
    <div className="bg-gray-50 my-4 p-4 rounded-xl max-w-xl shadow-md">
      <div className="flex items-start">
        {/* profile image */}
        <div className="relative w-10 h-10">
          <Image
            src={githubEvent.actor.avatar_url}
            alt={`${githubEvent.actor.login} profile`}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="pl-3">
          {/* account name */}
          <div className="font-semibold text-sm sm:text-base">
            {githubEvent.actor.login}{" "}
          </div>
          {/* event creation date */}
          <div className="text-xs opacity-75">
            {githubEvent.created_at.replace(/[TZ]/g, " ")}
          </div>
        </div>
      </div>
      {/* event details */}
      <div className="text-xs md:text-sm pl-[52px] py-2 flex items-center">
        {formatGithubEventType(githubEvent.type)}
        <ArrowRightIcon className="w-4 h-4 mx-2" />
        <a
          href={`https://github.com/${githubEvent.repo.name}`}
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-600 hover:text-blue-700"
        >
          {githubEvent.repo.name}
        </a>
      </div>
    </div>
  );
};
