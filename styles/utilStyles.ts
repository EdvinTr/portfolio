import { classnames } from "tailwindcss-classnames";

// "hover:scale-105 transition-transform duration-150"

export const hoverScaleClassNames = classnames(
  "hover:scale-105",
  "transition-transform",
  "duration-150",
  "ease-in-out"
);

export const flexItemsCenter = classnames("flex", "items-center");
