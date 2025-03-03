import Modal from "@/components/ui/Modal";

const ModalUpdateUser = (props: any) => {
  const { modalUpdateUser, setModalUpdateUser } = props;
  return (
    <Modal onClose={() => setModalUpdateUser({})}>
      <h1>Update User</h1>
    </Modal>
  );
};

export default ModalUpdateUser;
