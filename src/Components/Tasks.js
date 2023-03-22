import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markTaskCompleted } from "./actions";

const Tasks = () => {
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  let count = 1;
  let count1 = 1;
  return (
    <div>
      <div>
        <h1>List of Tasks</h1>
        <table>
          <th>S.No.</th>
          <th>Task</th>
          <th>Action</th>
          {task.map((item) => {
            if (!item.isCompleted) {
              return (
                <tr>
                  <td>{count++}</td>
                  <td>{item.name}</td>
                  <button onClick={() => dispatch(deleteTask(item.id))}>
                    Delete
                  </button>
                  <button onClick={() => dispatch(markTaskCompleted(item))}>
                    Mark Completed
                  </button>
                </tr>
              );
            }
          })}
        </table>
      </div>

      <div>
        <h1>List of Completed Tasks</h1>
        <table>
          <th>S.No.</th>
          <th>Task</th>
          <th>Action</th>
          {task.map((item) => {
            if (item.isCompleted) {
              return (
                <tr>
                  <td>{count1++}</td>
                  <td>{item.name}</td>
                  <button onClick={() => dispatch(deleteTask(item.id))}>
                    Delete
                  </button>
                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  );
};

export default Tasks;
