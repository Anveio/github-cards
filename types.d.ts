declare interface User {
  readonly url: string;
  readonly name: string; 
  readonly avatarUrl: string;
  readonly company: string;
}

declare interface GithubResponse {
  readonly html_url: string;
  readonly name: string;
  readonly avatar_url: string;
  readonly company: string;
}