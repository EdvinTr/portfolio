import axios from "axios";
import { GithubEvent, GithubProfileData } from "./types";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
});

export class GithubApiReader {
  static async fetchGithubEventsByUsername(
    username: string
  ): Promise<GithubEvent[] | null> {
    try {
      const url = `/users/${username}/events`;
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
    githubId: string
  ): Promise<GithubProfileData | null> {
    try {
      const url = `/user/${githubId}`;
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
