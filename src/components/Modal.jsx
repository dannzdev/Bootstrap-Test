import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const SmallModal = ({show, setShow}) => {
  const handleClose = () => setShow(false);
	return (
    <>

      <Modal show={show} size='sm' centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Aenean augue magna, vestibulum vitae sapien at, consectetur tristique orci. Nam mauris velit, faucibus eget leo id, imperdiet gravida turpis. Proin euismod pellentesque tristique. Nullam convallis facilisis dictum. Etiam ultricies orci ut dictum vehicula. Quisque ut massa vestibulum, ultricies nisi a, dignissim leo.</Modal.Body>
      </Modal>
    </>
	);
};

export default SmallModal;
