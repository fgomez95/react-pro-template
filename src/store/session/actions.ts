import { SessionTypes, SET_SESSION, Session } from "./types";

export function setSession(payload: Session): SessionTypes {
  console.log(payload);
  return {
    type: SET_SESSION,
    payload
  };
}
