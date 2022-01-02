import axios from "axios";
import { GetGithubProfileResponse, GithubEvent } from "./types";

const GITHUB_API_URL = "https://api.github.com";

const githubAPI = axios.create({
  baseURL: GITHUB_API_URL,
});

export class GithubApiReader {
  static async fetchGithubEventsByUsername(username: string) {
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
  static async fetchGithubProfileByUserId(githubId: string) {
    try {
      const url = `/user/${githubId}`;
      const response = await githubAPI.get<GetGithubProfileResponse>(url);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error();
    } catch {
      return null;
    }
  }
}
