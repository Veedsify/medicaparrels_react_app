import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
      <div className="cardBlog cardBlogList wow fadeInUp">
        <div className="cardImage">
          <Link to="#">
            <img src="/imgs/page/blog-list/img6.png" alt="guza" />
          </Link>
        </div>
        <div className="cardInfo">
          <div className="cardTags">
            <Link to="#">Fashion</Link>
            <span className="date-post text-uppercase">Dec 1, 2022</span>
          </div>
          <Link className="cardTitle" to="#">
            <h5>The Best Winter Trend for 2022/2023</h5>
          </Link>
          <p className="cardDesc body-p2">
            At this point, your 2022 wardrobe is probably looking a lot like
            your closet
          </p>
          <Link className="link-underline link-l2" to="#">
            Read More
          </Link>
        </div>
      </div>
    );
}

export default BlogCard;