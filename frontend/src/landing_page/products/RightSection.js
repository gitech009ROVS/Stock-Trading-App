import React from "react";

function RightSection({
  imagePath,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-2">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imagePath} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
