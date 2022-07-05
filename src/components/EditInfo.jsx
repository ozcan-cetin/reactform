import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditInfo = ({ editInfo, edititem, show, setShow }) => {

  const {id, title:newtitle, description} = edititem;
  
  const handleClose = () => setShow(false);

  const [title, setTitle] = useState(newtitle)
  const [desc, setDesc] = useState(description)

  useEffect(()=>{
    setTitle(newtitle)
    setDesc(description)
  },[newtitle, description])

  const handleSave = (e) => {
    // e.preventDefault();
    editInfo(id, title, desc);
    setTitle("")
    setDesc("")
  }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your title"
                value= {title || ""}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="desc"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Description"
                value={desc || ""}
                onChange={(e)=>setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{handleClose() 
          handleSave()}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
};

export default EditInfo;
