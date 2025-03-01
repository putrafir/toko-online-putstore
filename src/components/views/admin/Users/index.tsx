import AdminLayout from "@/components/layouts/AdminLayout";

type PropTypes = {
  users: any;
};
const UsersAdminView = (props: PropTypes) => {
  const { users } = props;
  console.log(users);

  return (
    <AdminLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            User Management
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {users.map((user: any, index: number) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                key={user.id}
              >
                <td className="p-4 text-center">{index + 1}</td>

                <th
                  scope="row"
                  className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.fullname}
                </th>
                <td className="px-4 py-4">{user.email}</td>
                <td className="px-4 py-4">{user.phone}</td>
                <td className="px-4 py-4">${user.role}</td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};
export default UsersAdminView;
