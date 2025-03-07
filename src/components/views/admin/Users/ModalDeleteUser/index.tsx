import Modal from "@/components/ui/Modal";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";

const ModalDeletedUser = (props: any) => {
  const { deletedUser, setDeletedUser, setUsersData } = props;
  const session: any = useSession();

  const handleDelete = async () => {
    userServices.deleteUser(deletedUser.id, session.data.accessToken);
    setDeletedUser({});
    const { data } = await userServices.getAllUsers();
    setUsersData(data.data);
  };
  return (
    <Modal onClose={() => setDeletedUser({})}>
      <div className="p-4 md:p-5 text-center">
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 ">
          Are you sure you want to delete this user?
        </h3>
        <button
          data-modal-hide="popup-modal"
          onClick={() => handleDelete()}
          type="button"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        >
          Yes
        </button>
        <button
          data-modal-hide="popup-modal"
          type="button"
          onClick={() => setDeletedUser({})}
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeletedUser;
