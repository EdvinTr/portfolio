import axios from "axios";

export interface GetGithubProfileResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
export interface GithubProfileWithContributions
  extends GetGithubProfileResponse {
  contributions: number | string;
}
export const getGithubProfile = async (username: string) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get<GetGithubProfileResponse>(url);
  return response;
};