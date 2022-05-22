import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { userName };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((response) => console.log(response.data));
    setUserName("");
  };
  return (
    <div className="container">
      <h3>Create Your Profile</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User Name :</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
