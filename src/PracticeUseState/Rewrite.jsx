import React, { useState } from "react";

const Rewrite = () => {
  const [Inputing, setInputing] = useState("");
  const [tasks, setTasks] = useState([]);

  const handletext = (e) => {
    setInputing(e.target.value);
  };

  const handleList = () => {
    if (Inputing.trim() !== "") {
      const NewTask = {
        id: tasks.length + 1,
        task: Inputing,
        complete: false,
      };
      setTasks([...tasks, NewTask]);
      setInputing("");
    }
  };

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((secondtask) =>
        secondtask.id === taskId
          ? { ...secondtask, complete: !secondtask.complete }
          : secondtask
      )
    );
  };

  return (
    <div>
      TodoList
      <form onSubmit={handleList}>
        <input type="text" value={Inputing} onChange={handletext} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {tasks.map((firsttask) => (
          <li key={firsttask.id}>
            <input
              type="checkbox"
              checked={firsttask.complete}
              onChange={() => handleTaskComplete(firsttask.id)}
            />
            <span
              style={{
                textDecoration: firsttask.complete ? "line-through" : "none",
              }}
            >
              {firsttask.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewrite;
