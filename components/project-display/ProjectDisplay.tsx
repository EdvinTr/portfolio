import { PlayIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Project } from "./project-data";

interface ProjectDisplayProps {
  project: Project;
}

// image blur
{
  /* <Image
 className="image"
 src={image.src}
 alt={image.alt}
 layout="fill"
 objectFit="cover"
 objectPosition="top center"
 placeholder="blur"
 blurDataURL="/images/blur.jpg"
/> */
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {
  const {
    title,
    shortDescription,
    longDescription,
    imagePath,
    demoURL,
    codeURL,
    tags,
  } = project;
  return (
    <Fragment>
      {/* heading and button container */}
      <div className="md:flex md:justify-between">
        {/* project heading */}
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{shortDescription}</p>
          {/* technology tags */}
          <div className="">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="mr-3 text-xs bg-red-100 font-semibold inline-block px-1 uppercase"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* demo and code links */}
        <div className="flex items-center space-x-2 pt-6 md:pt-0">
          <Link href={demoURL}>
            <a
              rel="noopener noreferrer"
              aria-label={`${title} demo`}
              target="_blank"
              className="flex items-center space-x-2 border border-gray-200 hover:bg-gray-100 hover:underline transition-colors duration-150 py-2 px-5 justify-center rounded-md"
            >
              <PlayIcon className="w-4 h-4" />
              <span>Demo</span>
            </a>
          </Link>
          {codeURL && (
            <Link href={codeURL}>
              <a
                rel="noopener noreferrer"
                aria-label={`${title} source code`}
                target="_blank"
                className="flex items-center space-x-2 border border-gray-200 hover:bg-gray-100 hover:underline transition-colors duration-150 py-2 px-5 justify-center rounded-md"
              >
                <i className="devicon-github-original text-md"></i>
                <span>Code</span>
              </a>
            </Link>
          )}
        </div>
      </div>
      {/* safari looking header */}
      <Link href={demoURL}>
        <a
          rel="noopener noreferrer"
          aria-label={`${title} demo`}
          target="_blank"
        >
          <div
            className={`hover:scale-[1.03] transition-all duration-200 mt-8 mb-4`}
          >
            <div className="bg-gray-200 p-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            {/*  <Skeleton className="h-96" /> */}
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              <Image
                src={imagePath}
                width={1120}
                height={552}
                alt={`${title} screenshot`}
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </a>
      </Link>
      <p className="whitespace-pre-line">{longDescription}</p>
    </Fragment>
  );
};
