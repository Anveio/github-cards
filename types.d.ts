declare interface User {
  readonly name: string; 
  readonly avatarUrl: string;
  readonly company: string;
}

declare interface GithubApiError {
  readonly name: string | undefined;
  readonly code: string | undefined;
}

declare interface GithubApiData {
  readonly name: string;
  readonly avatar_url: string;
  readonly company: string;
}