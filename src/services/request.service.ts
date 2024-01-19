import { Request } from "@/types/request";
import { post } from "./axios";

export const getAllRequest = async () => {};

export const createRequest = async (req: Request) => {
  try {
    const res = await post("/request", req);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
