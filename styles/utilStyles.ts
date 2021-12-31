import { classnames } from "tailwindcss-classnames";

// "hover:scale-105 transition-transform duration-150 ease-in-out"

export const hoverScaleClassNames = classnames(
  "hover:scale-105",
  "transition-transform",
  "duration-150",
  "ease-in-out"
);

export const flexItemsCenter = classnames("flex", "items-center");
export const headingClassNames =
  "text-2xl md:text-3xl font-semibold underline decoration-red-500";
