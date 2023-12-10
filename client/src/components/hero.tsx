const Hero = () => {
  return (
    <section className="section banner-homepage6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="cardBanner wow fadeInLeft">
              <div className="cardImage">
                <img src="/imgs/page/homepage6/womens.png" alt="Guza" />
              </div>
              <div className="cardInfo">
                <p className="text-17-medium color-white mb-15 text-uppercase">
                  Don’t sleep on it
                </p>
                <h2 className="text-110-bold color-white">Womens</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cardBanner wow fadeInRight">
              <div className="cardImage">
                <img src="/imgs/page/homepage6/mens.png" alt="Guza" />
              </div>
              <div className="cardInfo">
                <p className="text-17-medium color-white mb-15 text-uppercase">
                  Don’t sleep on it
                </p>
                <h2 className="text-110-bold color-white">Mens</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
