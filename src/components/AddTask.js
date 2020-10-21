import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import { addTask } from "../store/tasks/task-actions";
import { addTaskIsLoading } from "../store/tasks/task-selectors";

export default function AddTask() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState("pending");

  const addTaskLoadingSelector = useSelector(addTaskIsLoading);

  const clearState = () => {
    setTaskTitle("");
    setTaskStatus("pending");
  };

  const onHide = () => {
    setModal(false);
    clearState();
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleRadioChange = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await dispatch(
        addTask({
          title: taskTitle,
          isCompleted: taskStatus === "completed",
        })
      );
      setModal(false);
      clearState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={{ span: 2, offset: 10 }}>
          <Button variant="secondary" onClick={() => setModal(true)}>
            <i className="fas fa-plus mr-2"></i>Add
          </Button>
        </Col>
      </Row>
      <Modal
        show={modal}
        onHide={() => onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="email"
              placeholder="Title"
              value={taskTitle}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group onChange={handleRadioChange}>
            <Col sm={10} className="mt-2">
              <Form.Check
                type="radio"
                label="Pending"
                name="taskstatus"
                id="pending"
                value="pending"
                defaultChecked
              />
              <Form.Check
                type="radio"
                label="Completed"
                name="taskstatus"
                value="completed"
                id="completed"
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => handleSubmit()}>
            {addTaskLoadingSelector && (
              <Spinner size="sm" animation="border" className="mr-2" />
            )}
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
