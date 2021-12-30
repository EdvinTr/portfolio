import axios from "axios";
import { JSDOM } from "jsdom";

export const getGithubContributions = async (
  username: string
): Promise<number | string> => {
  const { data: html } = await axios.get(`https://github.com/${username}`);
  const dom = new JSDOM(html);
  const $ = (selector: any) => dom.window.document.querySelector(selector);

  const contribSelector = "div.js-yearly-contributions > div:nth-child(1) > h2"; // select h2 containing the number of contributions
  const contributions: string = $(contribSelector)
    .textContent.trim()
    .split("\n")[0];

  const result = Number(contributions.split(",").join(""));
  return result === NaN ? "N/A" : result;
};
