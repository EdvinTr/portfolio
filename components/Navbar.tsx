import Link from "next/link";
import { Fragment } from "react";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Fragment>
      <nav className="flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <h1 className="font-extrabold text-gray-800 text-3xl">EdvinTr</h1>
          </a>
        </Link>
        <div className="space-x-8">
          <Link href="/projects">
            <a className="font-semibold hover:underline">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="font-semibold hover:underline">Contact</a>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};
