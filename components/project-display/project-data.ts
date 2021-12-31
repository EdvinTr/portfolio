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
    shortDescription: "Short description about Scoreflicks here",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore.",
    imagePath: require("../../public/img/scoreflicks.png"),
    demoURL: "https://scoreflicks.com",
    tags: ["Vue 3", "TypeScript", "Tailwind", "Node", "Express", "PostgreSQL"],
  },
  {
    title: "Scoreflicks",
    shortDescription: "Short description about Scoreflicks here",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro eos alias tenetur ea quaerat, cumque rem perferendis maiores aliquam dolorem adipisci. Quam, consectetur alias! Perferendis dolor atque ab labore.",
    imagePath: require("../../public/img/scoreflicks.png"),
    demoURL: "https://scoreflicks.com",
    tags: ["Vue 3", "TypeScript", "Tailwind", "Node", "Express", "PostgreSQL"],
  },
];

export default projects;
