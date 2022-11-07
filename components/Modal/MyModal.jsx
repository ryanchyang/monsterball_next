import React from 'react';
import { Modal } from 'react-bootstrap';

// 如果不要手動關閉modal 不要pass in onHide props
// 如果不要close icon pass close = {false}

const MyModal = props => {
  return (
    <Modal
      className="monster-modal"
      show={props.show}
      onHide={props.onHide}
      centered
    >
      <Modal.Header
        className="monster-modal-header"
        closeButton={props.close ?? true}
      >
        <h3>{props.title}</h3>
      </Modal.Header>
      <Modal.Body className="monster-modal-body">
        <p>{props.content}</p>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
