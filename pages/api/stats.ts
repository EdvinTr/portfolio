// https://api.github.com/users/EdvinTr -> general user profile info
// https://api.github.com/users/EdvinTr/events -> returns recent commits etc
// https://api.github.com/users/EdvinTr/repos -> returns all repos
import axios from "axios";
import { JSDOM } from "jsdom";
import cache from "memory-cache";
import type { NextApiRequest, NextApiResponse } from "next";

const getContributions = async (username: string): Promise<number> => {
  try {
    const { data: html } = await axios.get(`https://github.com/${username}`);
    const dom = new JSDOM(html);
    const $ = (selector: any) => dom.window.document.querySelector(selector);

    const contribSelector =
      "div.js-yearly-contributions > div:nth-child(1) > h2";
    const contributions = $(contribSelector).textContent.trim().split("\n")[0];

    return Number(contributions);
  } catch {
    return 750; // TODO: should return a string with "???" or something
  }
};
const FIVE_MINUTES = 5 * 60 * 1000;
const GITHUB_URL = "https://api.github.com/users/EdvinTr";

type Data = {
  githubData: CustomGithubProfile;
  isCached: boolean;
};

interface CustomGithubProfile {
  contributions: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const values: CustomGithubProfile = cache.get("values");
    if (values) {
      return res.json({ githubData: values, isCached: true });
    }
    //const githubProfileEvents = fetch(GITHUB_URL + "/events").then((r) => r.json());
    const totalGithubContributions = await getContributions("EdvinTr");

    const githubProfile = {
      contributions: totalGithubContributions,
    };

    const jsonData = { githubData: githubProfile, isCached: false };
    cache.put("values", jsonData, FIVE_MINUTES);
    res.json({ githubData: githubProfile, isCached: false });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
