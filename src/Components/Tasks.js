import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markTaskCompleted } from "./actions";
import "./bootstrap/css/bootstrap.css";
const Tasks = () => {
  const task = useSelector((state) => state);

  const dispatch = useDispatch();
  let count = 1;
  let count1 = 1;
  let completedCount = 0;
  return (
    <div>
      <div>
        <table className="table table-hover">
          <caption>List of Tasks</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Task</th>
              <th scope="col">Mark Completed</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => {
              return (
                <tr>
                  <td>{count++}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={item.isCompleted ? "checked" : null}
                      onChange={() => dispatch(markTaskCompleted(item.id))}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(deleteTask(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {count === 1 && (
            <h4 style={{ textAlign: "center" }}>No task added yet</h4>
          )}
        </div>
      </div>
      {task.map((item) => {
        if (item.isCompleted) {
          completedCount++;
        }
      })}

      <div>
        {completedCount > 0 && (
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
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => dispatch(deleteTask(item.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tasks;
