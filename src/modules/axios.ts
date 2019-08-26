import axios from "axios";

const timeout: number = 1000 * 25;
const baseURL: string = process.env.REACT_APP_API_ENDPOINT || "localhost:3000";

const instance = axios.create({
  timeout,
  baseURL
});

export default instance;
