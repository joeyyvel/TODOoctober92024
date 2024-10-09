import React, { useState } from "react";

function AddTodo() {
  const [students, setStudents] = useState([
    "Create sample website",
    "Clean the kitchen",
    "walk the dog",
  ]);
  const [taskOne, setTaskOne] = useState("");
  const [taskTwo, setTaskTwo] = useState("");

  const handleInputOne = (e) => {
    setTaskOne(e.target.value);
  };

  const handleInputTwo = (e) => {
    setTaskTwo(e.target.value);
  };

  const inputOne = () => {
    if (taskOne.trim() !== "") {
      setStudents((c) => [...c, taskOne]);
      setTaskOne("");
    }
  };

  const inputTwo = () => {
    if (taskTwo.trim() !== "") {
      setStudents((t) => [...t, taskTwo]);
      setTaskTwo("");
    }
  };

  // create btn delete --btn move up-- -- btn move--down--
  const deleteTask = (index) => {
    let newDelete = students.filter((_, idx) => idx !== index);
    setStudents(newDelete);
  };

  // move task up button
  const moveTaskUp = (index) => {
    if (index > 0) {
      let updatedTask = [...students];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setStudents(updatedTask);
    }
  };

  // move task down button
  const moveTaskDown = (index) => {
    if (index < students.length - 1) {
      let updatedTask = [...students];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setStudents(updatedTask);
    }
  };

  return (
    <div className="to-do-list">
      <h1>My list to do</h1>
      <div>
        <input
          type="text"
          value={taskOne}
          placeholder="add task one here..."
          onChange={handleInputOne}
        />
        <button className="add-button" onClick={inputOne}>
          Button One
        </button>
      </div>
      <div>
        <input
          type="text"
          value={taskTwo}
          placeholder="add task two here..."
          onChange={handleInputTwo}
        />
        <button className="add-button" onClick={inputTwo}>
          Button Two
        </button>
      </div>
      <div>
        <ol>
          {students.map((item, index) => (
            <li key={index}>
              <span className="text">{item}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                UP 👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Down 👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AddTodo;
