import Editor from "./components/editor";

const BlogAdd = () => {
  return (
    <div className="blogs">
      <h2 className="welcome-message">Create a New Blog Post</h2>
      <div className="blog-form">
        {/* DETAILS */}
        <div className="details">
          <h5>Title</h5>
          <input type="text" className="title_input" />
          <h5>Description</h5>
          <textarea rows={10} className="title_input"></textarea>
        </div>

        {/* META DETAILS */}

        <div className="meta_details">
          <div>
            <h5>Meta Keywords</h5>
            <input type="text" className="title_input" />
          </div>
          <div>
            <h5>Category</h5>
            <select className="title_input">
              <option value="select" selected disabled>
                (-- SELECT --)
              </option>
              <option value="Shirt">Shirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Shirt">Shirt</option>
            </select>
          </div>
        </div>

        <div className="blog_contents">
          <h5>Blog Contents:</h5>
          {/* Editor */}
          <div className="contents">
            <Editor />
          </div>
        </div>

        {/* SUBMIT BUTTONS */}

        <div className="submit_buttons">
          <button type="submit" className="draft_button">
            Save as Draft
          </button>
          <button type="submit" className="submit_button second">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogAdd;
