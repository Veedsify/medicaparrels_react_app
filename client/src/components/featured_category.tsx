const FeaturedCategory = () => {
  return (
    <section className="section box-categories">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-40 wow fadeInDown">Featured Category</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-20">
            <div className="cardCategoriesStyle1 wow fadeInUp">
              <div className="cardInfo">
                <p className="tag-title text-16-medium mb-15">
                  Women Collection
                </p>
                <h2 className="mb-30">Clean Women Apparels</h2>
                <a className="link-underline" href="#">
                  Shop Now
                </a>
              </div>
              <div className="cardImage">
                <img src="/imgs/page/homepage4/women.png" alt="Guza" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-20">
            <div className="cardCategoriesStyle1 bg-1 wow fadeInUp">
              <div className="cardInfo">
                <p className="tag-title text-16-medium mb-15">Man Collection</p>
                <h2 className="mb-30">Clean Unisex Aparrels</h2>
                <a className="link-underline" href="#">
                  Shop Now
                </a>
              </div>
              <div className="cardImage">
                <img src="/imgs/page/homepage4/clothing.png" alt="Guza" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 mb-20">
            <div className="cardCategoriesStyle1 cardCategoriesStyle2 bg-7 wow fadeInUp">
              <div className="cardInfo">
                <div className="box-content-middle">
                  <h2 className="mb-10">
                    Swift Through
                    <br className="d-none d-lg-block" />
                    Our Store
                  </h2>
                  <p className="body-p2 mb-30">
                    Small presents and big surprises
                  </p>
                  <a className="link-underline" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="cardImage">
                <img src="/imgs/page/homepage4/gift.png" alt="Guza" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-20">
            <div className="cardCategoriesStyle3 wow fadeInUp">
              <div className="cardInfo">
                <h2 className="mb-30">Discover the show lookbook</h2>
                <a className="link-underline-white" href="#">
                  View Now
                </a>
              </div>
              <div
                className="cardImage"
                style={{
                  backgroundImage: "url(/imgs/page/homepage4/yoga.png)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
