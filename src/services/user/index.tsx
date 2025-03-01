import instance from "@/lib/axios/instance";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
};

export default userServices;
