import { Session, SessionTypes, SET_SESSION } from "./types";

const initialState: Session = {
  account: {},
  credential: {}
};

export function sessionReducer(
  state = initialState,
  action: SessionTypes
): Session {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        account: action.payload.account,
        credential: action.payload.credential
      };
    default:
      return state;
  }
}
