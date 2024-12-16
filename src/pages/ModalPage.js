import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum
        tellus ante. Fusce dapibus erat eget metus mollis, id eleifend erat
        ullamcorper. Maecenas accumsan dapibus lacus, vel sollicitudin velit
        auctor sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce sagittis mollis maximus.
        Suspendisse sed interdum enim. Curabitur lacinia arcu sed fermentum
        egestas. Sed accumsan ligula tortor, ut rhoncus dolor ultricies sed.
        Curabitur tristique urna justo, imperdiet pretium felis auctor ac.
        Quisque metus risus, interdum at pulvinar at, facilisis nec velit.
        Mauris vel tortor quis diam aliquam ultricies id nec velit.
      </p>
    </div>
  );
}

export default ModalPage;
