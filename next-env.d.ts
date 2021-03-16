/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.module.css" {
  const classes: { [key: string]: string };
}

// profile | homepage
type GetGitUsersType = {
  id: String;
  name: String;
  login: String;
  avatar_url: string;
};

type ListType = {
  repo: {
    id: string;
    name: string;
    stargazers_count: string;
    language: string;
    owner: {
      avatar_url: string;
      login: string;
    };
  };
};

type RepoType = {
  id: string;
  created_at: Date;
  updated_at: Date;
  html_url: string;
  name: String;
  language: String;
  description: String;
};
