import AdminLayout from "@/components/layouts/AdminLayout";
import Modal from "@/components/ui/Modal";
import { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import userServices from "@/services/user";
import ModalDeletedUser from "./ModalDeleteUser";

type PropTypes = {
  users: any;
};

const UsersAdminView = (props: PropTypes) => {
  const [updatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  const { users } = props;
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return (
    <>
      <AdminLayout>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white  ">
              User Management
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Browse a list of Flowbite products designed to help you work and
                play, stay organized, get answers, keep in touch, grow your
                business, and more.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4 text-center">
                  No
                </th>
                <th scope="col" className="px-4 py-3">
                  Fullname
                </th>
                <th scope="col" className="px-4 py-3">
                  Email
                </th>
                <th scope="col" className="px-4 py-3">
                  Phone
                </th>
                <th scope="col" className="px-4 py-3">
                  Role
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user: any, index: number) => (
                <tr
                  className="bg-white border-b   border-gray-200"
                  key={user.id}
                >
                  <td className="p-4 text-center">{index + 1}</td>

                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {user.fullname}
                  </th>
                  <td className="px-4 py-4">{user.email}</td>
                  <td className="px-4 py-4">{user.phone}</td>
                  <td className="px-4 py-4">{user.role}</td>
                  <td className="flex items-center px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setUpdatedUser(user)}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeletedUser(user)}
                      className="font-medium text-red-600  hover:underline ms-3"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>

      {Object.keys(updatedUser).length && (
        <ModalUpdateUser
          updatedUser={updatedUser}
          setUpdatedUSer={setUpdatedUser}
          setUsersData={setUsersData}
        />
      )}
      {Object.keys(deletedUser).length && (
        <ModalDeletedUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
        />
      )}
    </>
  );
};
export default UsersAdminView;
