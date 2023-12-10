const FeaturedBlog = () => {
  return (
    <section className="section block-icon-box mt-100">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-40 wow fadeInDown">Featured Articles</h3>
        </div>
        <div className="row wow bounceIn">
          <div className="col-lg-4 col-md-6">
            <div className="cardBlog wow fadeInUp">
              <div className="cardImage">
                <a href="#">
                  <img src="/imgs/page/homepage2/blog1.png" alt="guza" />
                </a>
              </div>
              <div className="cardInfo">
                <div className="cardTags">
                  <a href="#">Fashion</a>
                  <span className="date-post">Dec 1, 2022</span>
                </div>
                <a className="cardTitle" href="#">
                  <h5>The Best Winter Trend for 2022/2023</h5>
                </a>
                <p className="cardDesc body-p2">
                  At this point, your 2022 wardrobe is probably looking a lot
                  like your closet
                </p>
                <a className="link-underline link-l2" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardBlog wow fadeInUp">
              <div className="cardImage">
                <a href="#">
                  <img src="/imgs/page/homepage2/blog2.png" alt="guza" />
                </a>
              </div>
              <div className="cardInfo">
                <div className="cardTags">
                  <a href="#">Fashion</a>
                  <span className="date-post">Dec 1, 2022</span>
                </div>
                <a className="cardTitle" href="#">
                  <h5>The Best Winter Trend for 2022/2023</h5>
                </a>
                <p className="cardDesc body-p2">
                  At this point, your 2022 wardrobe is probably looking a lot
                  like your closet
                </p>
                <a className="link-underline link-l2" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardBlog wow fadeInUp">
              <div className="cardImage">
                <a href="#">
                  <img src="/imgs/page/homepage2/blog3.png" alt="guza" />
                </a>
              </div>
              <div className="cardInfo">
                <div className="cardTags">
                  <a href="#">Fashion</a>
                  <span className="date-post">Dec 1, 2022</span>
                </div>
                <a className="cardTitle" href="#">
                  <h5>The Best Winter Trend for 2022/2023</h5>
                </a>
                <p className="cardDesc body-p2">
                  At this point, your 2022 wardrobe is probably looking a lot
                  like your closet
                </p>
                <a className="link-underline link-l2" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
