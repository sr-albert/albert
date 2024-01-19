import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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

export const post = async (
  path: string,
  body?: any,
  options?: AxiosRequestConfig
) => {
  try {
    const res = await instance.post(path, { ...body }, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { instance as axios };
