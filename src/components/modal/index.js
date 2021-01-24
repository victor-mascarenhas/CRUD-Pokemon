import React from 'react'
import {Modal} from 'react-bootstrap'


const ModalForm = ({children, show, handleClose}) => {
  

  return (
    <>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton/>
        <Modal.Body>{children}</Modal.Body>        
      </Modal>
    </>
  );
}

export default ModalForm;