import crypto, { Hmac } from "crypto";
import axios from "./axios";
import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

interface IHeaders {
  "X-EX-KeyId": string;
  "X-EX-Route": string;
  "X-EX-Timestamp": number;
  "X-EX-Nonce": number;
  "X-EX-Signature": string;
}

const signRequest = (
  params: any = {},
  route: string,
  credential: any
): IHeaders => {
  const timestamp: number = +new Date();
  const nonce: number = parseInt(crypto.randomBytes(3).toString("hex"), 16);

  let args: Array<string> = [
    `key=${credential.key}`,
    `timestamp=${timestamp}`,
    `route=${route}`,
    `nonce=${nonce}`
  ];
  args = args.concat(
    Object.keys(params).map(item => `${item}=${params[item]}`)
  );
  const message: string = args.sort().join(";");
  const hash: Hmac = crypto.createHmac("sha256", credential.secret);
  hash.update(message);
  const signature: string = hash.digest("hex");
  return {
    "X-EX-KeyId": credential.key,
    "X-EX-Route": route,
    "X-EX-Timestamp": timestamp,
    "X-EX-Nonce": nonce,
    "X-EX-Signature": signature
  };
};

export const generateRequest = async (
  method: any,
  url: string,
  params: any,
  credential: any
) => {
  const options: AxiosRequestConfig = {
    method,
    url
  };

  method === "GET" ? (options.params = params) : (options.data = params);

  if (credential) {
    const route: string = `${method} /${url}`;
    options.headers = signRequest(params, route, credential);
  }
  try {
    const { data, headers }: AxiosResponse = await axios(options);
    return { data, headers, http: 200 };
  } catch (err) {
    return parseError(err);
  }
};

const parseError = (err: AxiosError) => {
  let response;

  if (err.response && err.response.data) {
    if (!err.response.data.result) {
      const result = err.response.data;
      delete err.response.data;
      err.response.data = { result };
    }
    response = {
      data: err.response.data,
      http: err.response.status
    };
  } else {
    response = {
      data: {
        result: {
          code: -1,
          message: `Failed to communicate with the server. ${err}`
        },
        success: false
      },
      http: -1
    };
  }
  return response;
};
