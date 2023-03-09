type GitHubRepository = {
  description: string;
  language: string;
  name: string;
  stars: number;
  url: string;
}

type GitHubUserProfile = {
  avatarUrl: string;
  url: string;
  bio: string;
  name: string;
}

type GitHubProfile = {
  languagesUsed: Map<string, number>;
  profile?: GitHubUserProfile;
  topFiveStarredRepos: GitHubRepository[];
}

type Profile = {
  gitHub?: GitHubProfile;
}

export type { GitHubRepository, GitHubUserProfile, GitHubProfile, Profile}
