import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExcercise = () => {
  const [exerciseStates, setExerciseStates] = useState({
    userName: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });

  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.userName));
        setUserName(response.data[0].userName);
      }
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      userName: exerciseStates.userName,
      description: exerciseStates.description,
      duration: exerciseStates.duration,
      date: exerciseStates.date,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setExerciseStates("");
  };

  return (
    <div className="container">
      <h3>Add Excercise</h3>
      <form onSubmit={onSubmit}>
        <label>User Name</label>
        <div className="form-group">
          <select
            required
            className="form-control"
            value={exerciseStates.userName}
            onChange={(e) =>
              setExerciseStates({
                selected: exerciseStates.selected,
                userName: e.target.value,
              })
            }
          >
            {users.map((user, index) => {
              return (
                <option key={index} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={exerciseStates.description}
            onChange={(e) =>
              setExerciseStates({
                ...exerciseStates,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes)</label>
          <input
            type="text"
            className="form-control"
            value={exerciseStates.duration}
            onChange={(e) =>
              setExerciseStates({
                ...exerciseStates,
                duration: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <DatePicker
            className="form-control"
            selected={exerciseStates.date}
            onChange={(date) => setExerciseStates({ ...exerciseStates, date })}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success form-control mt-3"
            value="Add"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExcercise;
