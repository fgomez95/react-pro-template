import { generateRequest } from "./utils";

export const loginAPI = async (username: string, password: string) => {
  return await generateRequest(
    "POST",
    "account/login",
    {
      username,
      password,
      totp: null
    },
    null
  );
};
