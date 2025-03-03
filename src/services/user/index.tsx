import instance from "@/lib/axios/instance";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
  updateUser: (id: string, data: any) =>
    instance.put("/api/user", { id, data }),
};

export default userServices;
