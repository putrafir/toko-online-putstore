import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import CircleLoading from "@/components/views/auth/Icon/Loading/CircleLoading";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const ModalUpdateUser = (props: any) => {
  const { updatedUser, setUpdatedUSer, setUsersData } = props;
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();

  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    const result = await userServices.updateUser(
      updatedUser.id,
      data,
      session.data.accessToken
    );


    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      setUpdatedUSer({});
      const { data } = await userServices.getAllUsers();
      setUsersData(data.data);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setUpdatedUSer({})}>
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 ">Update User</h3>
      </div>
      <form className="p-4 md:p-5" onSubmit={handleUpdateUser}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <Input
              label="Fullname"
              type="text"
              name="fullname"
              defaultValue={updatedUser.fullname}
              disabled
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Input
              label="Phone"
              type="text"
              name="phone"
              defaultValue={updatedUser.phone}
              disabled
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Select
              label="Role"
              name="role"
              options={[
                { label: "Member", value: "member" },
                { label: "Admin", value: "admin" },
              ]}
              defaultValue={updatedUser.role}
            />
          </div>
          <div className="col-span-2">
            <Input
              label="Email"
              type="email"
              name="email"
              defaultValue={updatedUser.email}
              disabled
            />
          </div>
        </div>
        <Button type="submit">
          {isLoading ? <CircleLoading /> : ""}{" "}
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </form>
    </Modal>
  );
};

export default ModalUpdateUser;
