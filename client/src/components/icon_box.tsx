const IconBox = () => {
  return (
    <section className="section block-icon-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4 hasborder">
            <div className="cardIcon wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage3/ship.svg" alt="Guza" />
              </div>
              <div className="cardInfo">
                <h5 className="cardTitle">Shipping Worldwide</h5>
                <p className="body-p2">To stores and home</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 hasborder">
            <div className="cardIcon wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage3/return.svg" alt="Guza" />
              </div>
              <div className="cardInfo">
                <h5 className="cardTitle">Premium Packaging</h5>
                <p className="body-p2">Water & Dust free protection</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardIcon wow fadeInUp">
              <div className="cardImage">
                <img src="/imgs/page/homepage3/payment.svg" alt="Guza" />
              </div>
              <div className="cardInfo">
                <h5 className="cardTitle">Security Payment</h5>
                <p className="body-p2">We accept all major credit cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconBox;
