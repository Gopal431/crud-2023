import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setAuthor(localStorage.getItem("author"));
  }, []);
  const updateData = () => {
    axios.put(`http://localhost:3005/posts/${id}`, {
      title: title,
      author: author,
    });
    navigate("/read");
  };
  const backToVeiew = () => {
    navigate("/read");
  };
  return (
    <div className="container p-2">
      <div className="form-floating m-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
        <label htmlFor="floatingPassword">Title</label>
      </div>
      <div className="form-floating m-2">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
        />
        <label htmlFor="floatingPassword">Author</label>
      </div>
      <button type="button " onClick={updateData} className="btn btn-warning ">
        Edit
      </button>
      <button
        type="button "
        onClick={backToVeiew}
        className="btn btn-warning m-3"
      >
        Back
      </button>
    </div>
  );
};

export default Edit;
