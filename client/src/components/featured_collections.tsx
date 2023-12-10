import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  return (
    <section className="section block-feature-collection">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-40 wow fadeInDown">Featured Collection</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="cardFeature wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage6/collection1.png" alt="Guza" />
              </div>
              <div className="cardInfo">
                <div className="cardInfoInner">
                  <p className="text-17-medium text-uppercase mb-15">
                    New Collection 2020
                  </p>
                  <h2 className="text-46-medium mb-30">
                    A Closer look discover all
                  </h2>
                  <Link
                    className="btn btn-play popup-youtube"
                    to="https://www.youtube.com/watch?v=9ilb5AhvVwU"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cardFeature cardFeatureTop wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage6/collection2.png" alt="Guza" />
              </div>
              <div className="cardInfo">
                <div className="cardInfoInner">
                  <p className="text-16-medium text-uppercase mb-15">
                    New Arrivals
                  </p>
                  <h2 className="text-46-medium">
                    Final Reduction <br className="d-none d-lg-block" />
                    Up to 70% OFF
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cardFeature cardFeatureTop2 wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage6/collection3.png" alt="Guza" />
              </div>
              <div className="cardInfo">
                <div className="cardInfoInner">
                  <p className="text-14-bold text-uppercase mb-10">
                    Shop Till Drop
                  </p>
                  <h2 className="heading-title-medium mb-5">Sale</h2>
                  <p className="text-14-bold text-uppercase mb-10">
                    For Clearance
                  </p>
                  <h2 className="heading-title-medium mb-5">30%</h2>
                  <p className="text-14-bold text-uppercase mb-25">
                    off your purchase
                  </p>
                  <Link className="btn btn-white" to="#">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
