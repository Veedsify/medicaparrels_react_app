const Contact = () => {
  return (
    <>
      <main className="main">
        <section className="section banner-500">
          <div className="box-cover-image wow fadeInUp"></div>
          <div className="box-banner-info wow bounceIn">
            <p className="overline-t2-medium text-uppercase primary-navy mb-10">
              NEED HELP?
            </p>
            <h2 className="color-primary-dark mb-30">
              Haven’t found what <br className="d-none d-lg-block" />
              you’re looking for? <br className="d-none d-lg-block" />
              Contact us
            </h2>
          </div>
        </section>
        <section className="section block-form-contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-40 wow bounceIn">
                <h4>Address</h4>
                <p className="body-p2 neutral-medium-dark mb-45">
                  8425 Melrose Ave, Los Angeles, CA 90069
                </p>
                <h4 className="mb-20">Contact</h4>
                <p className="body-p2 neutral-medium-dark mb-10">
                  Phone. +1 970 429 4170
                </p>
                <p className="body-p2 neutral-medium-dark mb-45">
                  Email.
                  <a
                    href="#"
                    className="__cf_email__"
                    data-cfemail="78101d141417380d00081d0a561b17"
                  >
                    admin@medicaparrels.com
                  </a>
                </p>
                <h4 className="mb-15">Hour of Operation</h4>
                <p className="body-p2 neutral-medium-dark mb-45">
                  Mon - Fri: 08:30 - 20:00
                  <br />
                  Sat & Sun: 09:30 - 21:30
                </p>
                <div className="socials mt-55 justify-content-start">
                  <a className="ml-0" href="#">
                    <img src="/imgs/page/about1/fb.svg" alt="Guza" />
                  </a>
                  <a href="#">
                    <img src="/imgs/page/about1/insta.svg" alt="Guza" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 mb-40 wow bounceIn">
                <h4 className="mb-10">Get in Touch</h4>
                <p className="text-16-medium neutral-medium mb-30">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Contents"
                        rows={6}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt-10">
                      <button className="btn btn-black">Post Comment</button>
                    </div>
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

export default Contact;
