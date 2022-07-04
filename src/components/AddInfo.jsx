import { useState } from "react";

const AddInfo = ({postInfo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        postInfo(
            {title:title, description:desc}
        )
        setTitle("");
        setDesc("");
    }

  return (
    <div className="add-container">
      <h1>Add Your Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Your Title
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your description"
            required
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInfo;
