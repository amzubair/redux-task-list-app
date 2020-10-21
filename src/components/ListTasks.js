import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../store/tasks/task-actions";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { tasks, tasksIsLoading } from "../store/tasks/task-selectors";

export default function ListTasks() {
  const dispatch = useDispatch();
  const taskSelector = useSelector(tasks);
  const taskIsLoadingSelector = useSelector(tasksIsLoading);

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = () => {
    dispatch(getTask());
  };

  return (
    <Container>
      {!taskIsLoadingSelector && !taskSelector.length && (
        <div className="d-flex justify-content-center mt-5">
          <h4>No Data</h4>
        </div>
      )}
      {taskIsLoadingSelector && (
        <div className="d-flex justify-content-center page-loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Row className="justify-content-center mt-5">
        <Col>
          <ul className="list-group">
            {taskSelector.map((task) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={task.id}
              >
                {task.title}
                <Button size="sm" variant="outline-danger">
                  <i className="fas fa-trash"></i>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
