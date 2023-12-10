import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="box-commingsoon">
          <div className="commingsoon-left wow bounceIn">
            <div className="box-info-commingsoon mt-100">
              <h2 className="mb-10">404 Error</h2>
              <p className="body-p2 mb-25">
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <div className="box-count box-count-square">
                <div
                  className="deals-countdown"
                  data-countdown="2023/12/25 00:00:00"
                ></div>
              </div>
              <div className="form-newsletters">
                <form className="form-inline" action="#">
                  <Link to="/" className="btn btn-black">Back To Home</Link>
                </form>
              </div>
            </div>
          </div>
          <div className="commingsoon-right wow bounceIn"></div>
        </div>
      </section>
    </main>
  );
};

export default Error;
