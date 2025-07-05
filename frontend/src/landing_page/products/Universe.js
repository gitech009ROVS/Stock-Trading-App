import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="mb-2" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            className="mb-2"
            style={{ height: "45px" }}
          />
          <p className="text-small text-muted">Algo &strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            className="mb-2"
            style={{ height: "35px" }}
          />

          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="mb-2"
            style={{ height: "50px" }}
          />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            className="mb-2"
            style={{ height: "45px" }}
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            className="mb-2"
            style={{ height: "35px" }}
          />

          <p className="text-small text-muted">Insurance</p>
        </div>
        <Link to="/signup">
          <button
            style={{ width: "20%", margin: "0 auto" }}
            className="p-2 btn btn-primary fs-5 mb-5"
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
