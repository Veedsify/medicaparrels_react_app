import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div className="article">
      <Link to="/admin/blogs/1" className="article_link">
        <img
          src="/imgs/page/blog-list/img2.png"
          className="article_image"
          alt=""
        />
      </Link>
      <div className="article_details">
        <Link to="/admin/blogs/1" className="article_link">
          <h3 className="article_title">Article Title</h3>
        </Link>
        <p className="article_intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          eius!
        </p>
        <p className="article_date">Date: {new Date().toLocaleDateString()}</p>
        <p className="article_status">
          Status: <span className="state success"> Active </span>
        </p>
      </div>
    </div>
  );
};

export default Article;
