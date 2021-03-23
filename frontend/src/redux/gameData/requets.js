import { axiosInstance } from "../axiosInstance";

// Login
export const postGameDataReq = (payload) => {
  return axiosInstance({
    method: "POST",
    url: `/sendscore`,
    data: JSON.stringify(payload),
  });
};
