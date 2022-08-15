import ky from "ky";
import { Post } from "../types/Post";
import { User } from "../types/User";

const DUMMY_API_BASE_URL = "https://jsonplaceholder.typicode.com";

const getApiUrl = (path: string) => {
  return `${DUMMY_API_BASE_URL}${path}`;
};

export const getUsers = async () => {
  return await ky.get(`${getApiUrl("/users")}`).json<User[]>();
};

export const getUser = async (id: number) => {
  return await ky.get(`${getApiUrl(`/users/${id}`)}`).json<User>();
};

export const getPosts = async () => {
  return await ky.get(`${getApiUrl("/posts")}`).json<Post[]>();
};
