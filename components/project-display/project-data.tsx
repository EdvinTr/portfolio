export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  demoURL: string;
  codeURL?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Scoreflicks",
    shortDescription: "IMDb ratings for Netflix movies and TV shows!",
    longDescription: `On a rainy spring evening, I was browsing through Netflix, trying to figure out what would be worth watching. With the word 'worth', I, as many others heavily factor in the IMDb rating in this evaluation process. I found myself constantly checking the titles against IMDb, and yes, it was getting tiresome. At that point I looked for some tools to make this process faster, but sadly I couldn't find what I was looking for. That's when I got the thought that maybe I could build it myself, and so Scoreflicks was born. 
    Through web-scraping and calling external APIs, I was able to populate my own database with information regarding each title found on Netflix. This information is then accessed through a REST API which powers both the web version of Scoreflicks as well as the native version.`,
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
    longDescription: `Willys has hundreds of stores across Sweden. To become a premium member, you would opt in to Willys Plus, which is free of charge. Willys Plus comes with some perks;most notably, Plus members receive discounts on certain products. These products change every now and then, usually every Monday.
    The problem here is that I personally am not interested in every single product which has a discount, and I am mostly interested in a select few categories. This is where Willys Plus Notifier comes in. It allows a user to search for a Willys store queried by city, then select categories and receive daily email notifications with information regarding products relating to the selected categories.`,
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
      "bcrypt",
      "Nodemailer",
      "Google APIS",
    ],
  },
];

export default projects;
