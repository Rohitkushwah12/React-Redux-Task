import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markTaskCompleted } from "./actions";
import "./bootstrap/css/bootstrap.css";
const Tasks = () => {
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  let count = 1;
  let count1 = 1;
  return (
    <div>
      <div>
        <table className="table table-hover">
          <caption>List of Tasks</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => {
              if (!item.isCompleted) {
                return (
                  <tr>
                    <td>{count++}</td>
                    <td>{item.name}</td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(deleteTask(item.id))}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm"
                      onClick={() => dispatch(markTaskCompleted(item))}
                    >
                      Mark Completed
                    </button>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div>
          {count === 1 && (
            <h4 style={{ textAlign: "center" }}>No task added yet</h4>
          )}
        </div>
      </div>

      <div>
        <table className="table table-hover">
          <caption>List of Completed Tasks</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => {
              if (item.isCompleted) {
                return (
                  <tr>
                    <td>{count1++}</td>
                    <td>{item.name}</td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(deleteTask(item.id))}
                    >
                      Delete
                    </button>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div>
          {count1 === 1 && (
            <h4 style={{ textAlign: "center" }}>No task completed yet</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
