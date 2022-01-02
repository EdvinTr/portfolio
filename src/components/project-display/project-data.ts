export interface NativeInformation {
  iconPath: string;
  href: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  demoURL: string;
  codeURL?: string;
  tags: string[];
  iosData?: NativeInformation;
  playStoreData?: NativeInformation;
}

// Using require statement to make next/image placeholder prop work
const projects: Project[] = [
  {
    title: "Scoreflicks",
    shortDescription: "IMDb ratings for Netflix movies and TV shows!",
    longDescription: `On a rainy spring evening, I was browsing through Netflix, trying to figure out what would be worth watching. With the word 'worth', I, as many others heavily factor in the IMDb rating in this evaluation process. I found myself constantly checking the titles against IMDb, and yes, it was getting tiresome. At that point I looked for some tools to make this process faster, but sadly I couldn't find what I was looking for. That's when I got the thought that maybe I could build it myself, and so Scoreflicks was born. 
    Through web-scraping and calling external APIs, I was able to populate my own database with information regarding each title found on Netflix. This information is then accessed through a REST API which powers both the web version of Scoreflicks as well as the native version.`,
    imagePath: require("../../../public/img/scoreflicks.png"),
    demoURL: "https://scoreflicks.com",
    iosData: {
      href: "https://apps.apple.com/se/app/scoreflicks/id1589486945?l=en",
      iconPath:
        "/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    },
    playStoreData: {
      iconPath: "/icons/google-play-badge.png",
      href: "https://play.google.com/store/apps/details?id=scoreflicks_two.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
    tags: [
      "Vue 3",
      "TypeScript",
      "Tailwind",
      "Node.JS",
      "Express",
      "PostgreSQL",
      "sequelize",
      "Puppeteer",
    ],
  },
  {
    title: "Willys Plus Notifier",
    shortDescription:
      "A way to receive email notifications about products from user selected categories for Willys stores!",
    longDescription: `Willys has hundreds of stores across Sweden. To become a premium member, you would opt in to Willys Plus, which is free of charge. Willys Plus comes with some perks; most notably, Plus members receive discounts on certain products. These products change every now and then, usually every Monday.
    The problem here is that I personally am not interested in every single product which has a discount, and I am mostly interested in a select few categories. This is where Willys Plus Notifier comes in. It allows a user to search for a Willys store queried by city, then select categories and receive daily email notifications with information regarding products relating to the selected categories.`,
    imagePath: require("../../../public/img/willys-plus-notifier-screenshot.png"),
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
  {
    title: "Dashback",
    shortDescription:
      "A reimagined version of the Swedish internet forum Flashback!",
    longDescription: `Flashback has seen better days and I thought it was time for a little facelift, enter Dashback, a reimagined version of Flashback. It's a simple clone where I tried to keep the original dataflow and functionality the same, but with an updated look and feel. It was a fun project to work on as I had to be creative with SQL queries in a way to mimic the original Flashback.`,
    imagePath: require("../../../public/img/dashback-screenshot.png"),

    demoURL: "https://elegant-allen-c3edd1.netlify.app",
    tags: [
      "React",
      "Apollo",
      "GraphQL",
      "TypeScript",
      "Tailwind",
      "Ant Design",
      "Nest.js",
      "PostgreSQL",
      "Passport",
      "TypeORM",
      "argon2",
      "TypeGraphQL",
    ],
  },
  {
    title: "Quick Quiz",
    shortDescription: "A simple but fun quiz game!",
    longDescription: `On the surface, a quiz game is very simple, but there are actually quite a few things going on. Keeping track of the state of the game, the users selected answers, coloring correct and incorrect answers, and the ability to restart the game, to name a few. Overall, it was a perfectly sized project for learning the basics of React.
    Using TypeScript (TS) in a small project can be overkill as it usually requires some boilerplate code, but the amazing developer experience of using TS is definitely outweighs the negatives.`,
    imagePath: require("../../../public/img/quick-quiz-screenshot.png"),
    demoURL: "https://quickest-quiz.netlify.app",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];

export default projects;
