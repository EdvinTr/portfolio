import axios from "axios";
import { GithubEvent, GithubProfileData } from "./types";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
});

export class GithubApiReader {
  static async fetchGithubEventsByUserId(
    githubUserId: string
  ): Promise<GithubEvent[] | null> {
    try {
      const url = `/user/${githubUserId}/events`;
      const response = await githubAPI.get<GithubEvent[]>(url);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error();
    } catch {
      return null;
    }
  }
  static async fetchGithubProfileByUserId(
    githubUserId: string
  ): Promise<GithubProfileData | null> {
    try {
      const url = `/user/${githubUserId}`;
      const response = await githubAPI.get<GithubProfileData>(url);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error();
    } catch {
      return null;
    }
  }
}
