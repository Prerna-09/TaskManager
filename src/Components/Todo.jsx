import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import "./todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() !== "") {
      if (editIndex !== null) {
        // Update existing task
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new task
        setTasks((prev) => [...prev, task]);
      }
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
  };

  const handleUpdate = (index) => {
    setTask(tasks[index]);
    setEditIndex(index); // Set the index of the task to be edited
  };

  return (
    <div className='todo'>
      <div className="box">
        <div className="first">
          <img src="https://i.pinimg.com/564x/74/ab/39/74ab39c81b9608f07ec3bf785ba928cc.jpg" alt="girl" />
        </div>
        <div className="second">
          <input
            className="type"
            onChange={handleChange}
            type="text"
            value={task}
          />
          <button className="btn" onClick={handleClick}>
            <IoIosAddCircleOutline />
          </button>
          {tasks.map((taskItem, index) => (
            <div className="task" key={index}>
              {taskItem}
              <button onClick={() => handleDelete(index)} className="delete">
                <MdDeleteOutline />
              </button>
              <button onClick={() => handleUpdate(index)} className="update">
                <RxUpdate />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
