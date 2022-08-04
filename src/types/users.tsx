export interface UserRow {
  id: number;
  login: string;
  avatar_url: string;
}

export interface User extends UserRow {
  email: string | null;
  followers: number;
  following: number;
  created_at: string;
  location: string;
  bio: string;
  public_repos: number;
}
