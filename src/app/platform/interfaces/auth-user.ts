export interface AuthUser {
  username: string;
  password: string;
}

export interface ResponseAuth {
  token: string;
  roles?: string[];
}
