import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { classnames } from "tailwindcss-classnames";

interface NavbarProps {}

const activeRouteClassNames = "border-red-500 border-opacity-75 ";

const navLinkClassNames = classnames(
  "font-semibold",
  "hover:underline",
  "py-2",
  "md:py-3",
  "px-2",
  "md:px-4",
  "border-2",
  "transition-colors",
  "duration-150",
  "rounded-lg"
);

const routes = [
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const isActivePath = (path: string) => {
    return router.pathname === path;
  };
  // TODO
  // 2. Why are we placing links inside an array?
  // 3. Can we also cache the recent events from github?
  // 4. Smooth in animation on GithubEvents load
  return (
    <Fragment>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <a>
            <h1 className="font-extrabold text-gray-800 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              Edvin Trönnberg
            </h1>
          </a>
        </Link>
        <div className="space-x-2 text-sm md:text-base lg:space-x-4">
          {routes.map(({ name, path }, idx) => {
            return (
              <Link href={path} key={idx}>
                <a
                  className={`${navLinkClassNames} ${
                    isActivePath(path) ? activeRouteClassNames : "border-white"
                  } ${path === "/contact" && "bg-gray-100"}`}
                >
                  {name}
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </Fragment>
  );
};
