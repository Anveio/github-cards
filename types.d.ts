declare interface UserData {
  readonly name: string; 
  readonly avatarUrl: string;
  readonly company: string;
}

declare interface GithubApiResponse {
  readonly name: string;
  readonly avatar_url: string;
  readonly company: string;
}