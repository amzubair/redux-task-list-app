import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, deleteTask, completeTask } from "../store/tasks/task-actions";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import {
  tasks,
  tasksIsLoading,
  deleteTaskIsLoading,
  completeTaskIsLoading,
} from "../store/tasks/task-selectors";

export default function ListTasks() {
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [completeTaskId, setCompleteTaskId] = useState(null);
  const dispatch = useDispatch();
  const taskSelector = useSelector(tasks);
  const taskIsLoadingSelector = useSelector(tasksIsLoading);
  const deletetaskIsLoadingSelector = useSelector(deleteTaskIsLoading);
  const completeTaskIsLoadingSelector = useSelector(completeTaskIsLoading);

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = () => {
    dispatch(getTask());
  };

  const handleDelete = (id) => {
    setDeleteTaskId(id);
    dispatch(deleteTask(id));
  };

  const handleComplete = (task) => {
    setCompleteTaskId(task.id);
    dispatch(
      completeTask({
        ...task,
        isCompleted: true,
      })
    );
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
                className={`${
                  task.isCompleted && "task-completed"
                } list-group-item d-flex justify-content-between align-items-center`}
                key={task.id}
              >
                <span>{task.title}</span>
                <div>
                  {!task.isCompleted && (
                    <Button
                      className="mr-2"
                      size="sm"
                      variant="outline-success"
                      onClick={() => handleComplete(task)}
                    >
                      {completeTaskIsLoadingSelector &&
                      task.id == completeTaskId ? (
                        <Spinner size="sm" animation="border" />
                      ) : (
                        <i className="fas fa-check"></i>
                      )}
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    {deletetaskIsLoadingSelector && task.id == deleteTaskId ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      <i className="fas fa-trash"></i>
                    )}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
