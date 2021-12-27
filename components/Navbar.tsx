import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { classnames } from "tailwindcss-classnames";

interface NavbarProps {}

const activeRouteClassNames = "border-red-500 border-opacity-75 ";

const navLinkClassNames = classnames(
  "font-semibold",
  "hover:underline",
  "p-2",
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

  return (
    <Fragment>
      <nav className="flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <h1 className="font-extrabold text-gray-800 text-3xl">EdvinTr</h1>
          </a>
        </Link>
        <div className="space-x-8">
          {routes.map(({ name, path }, idx) => {
            return (
              <Link href={path} key={idx}>
                <a
                  className={`${navLinkClassNames} ${
                    isActivePath(path) ? activeRouteClassNames : "border-white"
                  }`}
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
