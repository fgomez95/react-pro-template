import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { setSession } from "./actions";
import { AppState } from "../index";
import { loginAPI } from "../../modules/api";
import { Session } from "./types";

export const thunkLogin = (
  username: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  let { data } = await loginAPI(username, password);
  delete data.result.account.addresses;
  delete data.result.account.balances;
  const { account, credential }: Session = data.result;
  dispatch(
    setSession({
      account,
      credential
    })
  );
};
