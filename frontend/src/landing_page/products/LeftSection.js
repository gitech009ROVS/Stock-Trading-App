import React from "react";

function LeftSection({
  imagePath,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <img src={imagePath} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-2">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={tryDemo}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
