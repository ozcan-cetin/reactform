const AddInfo = () => {
  return (
    <div className="add-container">
      <h1>Add Your Info</h1>
      <form>
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
            // value={title}
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
            // value={}
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
