import { Link } from "react-router-dom";
import BlogCard from "../components/sub/blog_card";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <>
      <main className="main">
        <section className="section block-head">
          <div className="container">
            <div className="text-center wow bounceIn">
              <h1>Our Stories</h1>
              <div className="breadcrumbs d-inline-block">
                <ul>
                  <li>
                    <Link to="#">Home </Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section block-blog-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <div className="mt-80">
                  <nav className="box-pagination">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link page-prev" to="#">
                          <LucideArrowLeft />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link active" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          10
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link page-next" to="#">
                          <LucideArrowRight />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar-right">
                  <div className="block-sidebar">
                    <h5 className="text-20-medium mb-20">Category</h5>
                    <ul className="list-categories">
                      <li>
                        <Link to="#">All</Link>
                      </li>
                      <li>
                        <Link to="#">Fashion</Link>
                      </li>
                      <li>
                        <Link to="#">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="#">Inspiration</Link>
                      </li>
                      <li>
                        <Link to="#">Photography</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="block-sidebar">
                    <h5 className="text-20-medium mb-20">Latest Post</h5>
                    <ul className="list-latest-posts">
                      <li>
                        <div className="image-post">
                          <Link to="#">
                            <img src="/imgs/page/blog-list/post.png" alt="" />
                          </Link>
                        </div>
                        <div className="info-post">
                          <span className="date-post text-uppercase">
                            13 Dec, 2022
                          </span>
                          <Link to="#">
                            <h5 className="title-post">
                              Milan Highlights Summer 2020
                            </h5>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="image-post">
                          <Link to="#">
                            <img src="/imgs/page/blog-list/post2.png" alt="" />
                          </Link>
                        </div>
                        <div className="info-post">
                          <span className="date-post text-uppercase">
                            13 Dec, 2022
                          </span>
                          <Link to="#">
                            <h5 className="title-post">
                              Milan Highlights Summer 2020
                            </h5>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="image-post">
                          <Link to="#">
                            <img src="/imgs/page/blog-list/post3.png" alt="" />
                          </Link>
                        </div>
                        <div className="info-post">
                          <span className="date-post text-uppercase">
                            13 Dec, 2022
                          </span>
                          <Link to="#">
                            <h5 className="title-post">
                              Milan Highlights Summer 2020
                            </h5>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="block-sidebar">
                    <h5 className="text-20-medium mb-20">Tags</h5>
                    <div className="box-tags">
                      <Link className="btn btn-tag-filter" to="#">
                        Accessories
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Beauty
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Hats
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Collection
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Makeup
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Jacket
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Vintage
                      </Link>
                      <Link className="btn btn-tag-filter" to="#">
                        Life Style
                      </Link>
                    </div>
                  </div>
                  <div className="block-sidebar">
                    <img src="/imgs/page/blog-list/sale.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
