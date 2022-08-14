import ky from "ky";
import { User } from "../types/User";

const DUMMY_API_BASE_URL = "https://jsonplaceholder.typicode.com";

const getApiUrl = (path: string) => {
  return `${DUMMY_API_BASE_URL}${path}`;
};

export const getUsers = async () => {
  return await ky.get(`${getApiUrl("/users")}`).json<User[]>();
};
