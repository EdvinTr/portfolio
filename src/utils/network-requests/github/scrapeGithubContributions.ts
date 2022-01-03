import axios from "axios";
import { JSDOM } from "jsdom";

/**
 * Only works when called from the server.
 *  */
export async function scrapeGithubContributions(
  username: string
): Promise<number | "N/A"> {
  const { data: html } = await axios.get(`https://github.com/${username}`);
  const dom = new JSDOM(html);
  const $ = (selector: any) => dom.window.document.querySelector(selector);

  const contribSelector = "div.js-yearly-contributions > div:nth-child(1) > h2"; // select h2 containing the number of contributions
  if (!contribSelector) {
    return "N/A";
  }
  const contributions: string = $(contribSelector)
    .textContent.trim()
    .split("\n")[0];

  const result = Number(contributions.split(",").join(""));
  return result === NaN ? "N/A" : result;
}
