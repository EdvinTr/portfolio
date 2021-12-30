import axios from "axios";
import { GithubEvent } from "../../typings/GithubEventResponse.interface";

export const getGithubEvents = async (username: string) => {
  const url = `https://api.github.com/users/${username}/events`;
  const response = await axios.get<GithubEvent[]>(url);
  return response;
};
