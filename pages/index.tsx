import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="pt-12">
      <div>
        <h2 className="text-3xl font-semibold underline decoration-red-500">
          About Me
        </h2>
        <p className="py-5">
          Hey! I'm Edvin, a dependable web developer. I have been coding
          professionally for over a year, and amateur for over four years. I am
          always eager to learn new technologies and techniques. My primary
          focus has been on front-end development, but I also have experience
          with back-end technologies. Through the development of various
          projects, I have found new ways to improve efficiency and
          sustainability.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <h3 className="text-3xl font-semibold underline decoration-red-500">
          Profile
        </h3>
        <i className="devicon-github-original text-lg  "></i>
      </div>
    </div>
  );
};

export default Home;
