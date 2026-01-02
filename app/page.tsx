import Gallery from "./ui/client/Gallery";
import Modal from "./ui/client/Modal";
import Cart from "./ui/server/Cart";

export default async function Page() {
  return (
    <div>
      <Modal>
        <Cart />
      </Modal>

      <Gallery />
    </div>
  );
}
