import Modal from "./ui/client/Modal";
import Cart from "./ui/server/Cart";

export default async function Page() {
  return (
    <Modal>
      <Cart />
    </Modal>
  );
}
