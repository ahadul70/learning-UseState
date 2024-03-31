import React, { useState, useRef, useEffect } from "react";

const Todolist = () => {
  const [inputitem, setInputitems] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleText = (e) => {
    setInputitems(e.target.value);
  };



  const handleList = () => {
    if (inputitem.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        task: inputitem,
        complete: false,
      };
      setTasks([...tasks, newTask]);
      setInputitems("");
    }
  };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleList();
      }
    };
  const handleTaskCompletionToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleList}>
        <input
          type="text"
          value={inputitem}
          onChange={handleText}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => handleTaskCompletionToggle(task.id)}
            />
            <span
              style={{
                textDecoration: task.complete ? "line-through" : "none",
              }}
            >
              {task.task}
            </span>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
