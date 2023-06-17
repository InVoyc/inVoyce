import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = () => {
  return (
    <Modal>
      <Modal.Header>
        <Modal.Title>My Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal page with words in it</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;