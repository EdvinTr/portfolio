export interface GithubProfileData {
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
export interface GithubProfileWithContributions extends GithubProfileData {
  contributions: number | string;
}

// Generated by https://quicktype.io

export interface GithubEvent {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: string;
}

export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Payload {
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref?: null | string;
  head?: string;
  before?: string;
  commits?: Commit[];
  ref_type?: string;
  master_branch?: string;
  description?: null | string;
  pusher_type?: string;
  action?: string;
  issue?: Issue;
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: string;
  name: string;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null | string;
  author_association: string;
  active_lock_reason: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface User {
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
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}