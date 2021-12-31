export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  demoURL: string;
  codeURL?: string;
  tags: string[];
}

//"On a rainy spring evening I was browsing through Netflix trying to figure out what would be worth watching. With the word 'worth', I as many others heavily factor in the IMDb rating in this evaluation process. I found myself constantly checking the titles against IMDb, and yes, it was getting tiresome. At that point I looked for some tools to make this process faster, but sadly I couldn't find what I was looking for. That's when I got the thought that maybe I could build it myself, and so Scoreflicks was born. Through web-scraping and calling external APIs I was able to populate my own database with information regarding each title found on Netflix. This information is then accessed through a REST API which powers both the web version of Scoreflicks as well as the native version.",

/* (
  <span>
    On a rainy spring evening I was browsing through Netflix trying to
    figure out what would be worth watching. With the word 'worth', I as
    many others heavily factor in the IMDb rating in this evaluation
    process. I found myself constantly checking the titles against IMDb, and
    yes, it was getting tiresome. At that point I looked for some tools to
    make this process faster, but sadly I couldn't find what I was looking
    for. That's when I got the thought that maybe I could build it myself,
    and so Scoreflicks was born.
    <br />
    Through web-scraping and calling external APIs I was able to populate my
    own database with information regarding each title found on Netflix.
    This information is then accessed through a REST API which powers both
    the web version of Scoreflicks as well as the native version.
  </span>
), */
const projects: Project[] = [
  {
    title: "Scoreflicks",
    shortDescription: "IMDb ratings for Netflix movies and TV shows!",
    longDescription: `On a rainy spring evening I was browsing through Netflix trying to figure out what would be worth watching. With the word 'worth', I as many others heavily factor in the IMDb rating in this evaluation process. I found myself constantly checking the titles against IMDb, and yes, it was getting tiresome. At that point I looked for some tools to make this process faster, but sadly I couldn't find what I was looking for. That's when I got the thought that maybe I could build it myself, and so Scoreflicks was born. 
    Through web-scraping and calling external APIs I was able to populate my own database with information regarding each title found on Netflix. This information is then accessed through a REST API which powers both the web version of Scoreflicks as well as the native version.`,

    imagePath: require("../../public/img/scoreflicks.png"),
    demoURL: "https://scoreflicks.com",
    tags: [
      "Vue 3",
      "TypeScript",
      "Tailwind",
      "Node.JS",
      "Express",
      "PostgreSQL",
      "Puppeteer",
    ],
  },
  {
    title: "Willys Plus Notifier",
    shortDescription:
      "A way to receive email notifications about products from user selected categories for Willys stores",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore.",
    imagePath: require("../../public/img/willys-plus-notifier-screenshot.png"),
    demoURL: "https://willys-plus-notifier.netlify.app",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Material UI",
      "Nest.js",
      "Express",
      "PostgreSQL",
      "Passport",
      "TypeORM",
      "Nodemailer",
      "Google APIS",
    ],
  },
];

export default projects;
