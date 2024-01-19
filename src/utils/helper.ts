import { format } from "date-fns";

export const getCurrentDateTime = (): string => {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
};
