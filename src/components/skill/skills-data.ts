import { classnames } from "tailwindcss-classnames";

export interface SkillData {
  name: string;
  icon: string;
  href: string;
  labelBackgroundColor: string;
}
export const skillsData: SkillData[] = [
  {
    name: "HTML",
    labelBackgroundColor: "bg-amber-200",
    icon: "devicon-html5-plain",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-css3-plain",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    labelBackgroundColor: classnames("bg-yellow-200"),
    icon: "devicon-javascript-plain",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-typescript-plain",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-react-plain",
    href: "https://reactjs.org/",
  },
  {
    name: "Vue",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-vuejs-plain",
    href: "https://vuejs.org/",
  },
  {
    name: "Next",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-nextjs-original",
    href: "https://nextjs.org/",
  },
  {
    name: "Tailwind",
    labelBackgroundColor: classnames("bg-blue-300"),
    icon: "devicon-tailwindcss-plain",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Nest",
    labelBackgroundColor: classnames("bg-red-200"),
    icon: "devicon-nestjs-plain",
    href: "https://nestjs.com/",
  },
  {
    name: "Node",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-nodejs-plain",
    href: "https://nodejs.org/en/",
  },
  {
    name: "Express",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-express-original",
    href: "https://expressjs.com/",
  },
  {
    name: "Spring",
    labelBackgroundColor: classnames("bg-green-200"),
    icon: "devicon-spring-plain",
    href: "https://spring.io/",
  },
  {
    name: "git",
    labelBackgroundColor: classnames("bg-gray-200"),
    icon: "devicon-git-plain",
    href: "https://git-scm.com/",
  },
  {
    name: "MySQL",
    labelBackgroundColor: "bg-amber-200",
    icon: "devicon-mysql-plain",
    href: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    labelBackgroundColor: classnames("bg-green-300"),
    icon: "devicon-mongodb-plain",
    href: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    labelBackgroundColor: classnames("bg-blue-300"),
    icon: "devicon-postgresql-plain",
    href: "https://www.postgresql.org/",
  },
  {
    name: "GraphQL",
    labelBackgroundColor: classnames("bg-purple-200"),
    icon: "devicon-graphql-plain",
    href: "https://graphql.org/",
  },
  {
    name: "Jest",
    labelBackgroundColor: "bg-amber-300",
    icon: "devicon-jest-plain",
    href: "https://jestjs.io/",
  },
  {
    name: "Redux",
    labelBackgroundColor: classnames("bg-purple-300"),
    icon: "devicon-redux-plain",
    href: "https://redux.js.org/",
  },
  {
    name: "Jupyter",
    labelBackgroundColor: "bg-amber-400",
    icon: "devicon-jupyter-plain",
    href: "https://jupyter.org/",
  },
  {
    name: "Python",
    labelBackgroundColor: classnames("bg-blue-200"),
    icon: "devicon-python-plain",
    href: "https://www.python.org/",
  },
  {
    name: "Java",
    labelBackgroundColor: classnames("bg-red-300"),
    icon: "devicon-java-plain",
    href: "https://www.java.com/",
  },
  {
    name: "Figma",
    labelBackgroundColor: classnames("bg-purple-300"),
    icon: "devicon-figma-plain",
    href: "https://www.figma.com/",
  },
];
