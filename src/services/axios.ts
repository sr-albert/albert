import axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (path: string, options?: AxiosRequestConfig) => {
  try {
    const res = await instance.get(path, { ...options });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (path: string, options?: AxiosRequestConfig) => {
  try {
    const res = await instance.post(path, { ...options });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { instance as axios };
