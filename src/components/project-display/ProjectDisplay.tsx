import { PlayIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Project } from "./project-data";
interface ProjectDisplayProps {
  project: Project;
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
    iosData,
    playStoreData,
  } = project;
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const tagVariantProps = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <Fragment>
      {/* heading and button container */}
      <div className="md:flex md:justify-between">
        <div>
          {/* project heading */}
          <h3 data-cy="project-title" className="text-xl font-semibold">
            {title}
          </h3>
          <p>{shortDescription}</p>
          {/* technology tags */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="show"
          >
            {tags.map((tag, idx) => (
              <motion.div
                variants={tagVariantProps}
                key={idx}
                className="mr-3 text-xs bg-red-100 font-semibold inline-block px-1 uppercase"
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center space-x-2 pt-6 md:pt-0">
          {/* link to demo */}
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
          {/* link to source code */}
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
      {/* link to project demo */}
      <Link href={demoURL}>
        <a
          rel="noopener noreferrer"
          aria-label={`${title} demo`}
          target="_blank"
        >
          <div
            className={`hover:scale-[1.03] transition-all duration-200 mt-8 mb-4`}
          >
            {/* safari looking header */}
            <div className="bg-gray-200 p-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            {/* project screenshot */}
            <Image
              src={imagePath}
              width={1120}
              height={552}
              alt={`${title} screenshot`}
              objectFit="cover"
              placeholder="blur"
              priority
            />
          </div>
        </a>
      </Link>
      {/* long description */}
      <p className="whitespace-pre-line">{longDescription}</p>
      {/* ios and play store links */}
      {iosData || playStoreData ? (
        <div className="flex items-center pt-2">
          {iosData && (
            <Link href={iosData.href}>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={iosData.iconPath}
                  width={120}
                  height={40}
                  objectFit="contain"
                  alt="Get on iOS App Store"
                />
              </a>
            </Link>
          )}
          {playStoreData && (
            <Link href={playStoreData.href}>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={playStoreData.iconPath}
                  width={150}
                  height={65}
                  objectFit="contain"
                  alt="Get on Google Play Store"
                  className="w-10"
                />
              </a>
            </Link>
          )}
        </div>
      ) : null}
    </Fragment>
  );
};
