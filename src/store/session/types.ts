export const SET_SESSION: string = "SET_SESSION";

export interface Account {
  flags?: number;
  is_verified?: boolean;
  lang?: string;
  login?: string;
  state?: string;
}

export interface Credential {
  expire?: number;
  key?: string;
  restricted_to?: string;
  secret?: string;
  type?: string;
}

export interface Session {
  account: Account;
  credential: Credential;
}

interface SetSession {
  type: string;
  payload: Session;
}

export type SessionTypes = SetSession;
