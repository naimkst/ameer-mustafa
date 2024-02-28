import { showImage } from "app/utils/helper";
import React from "react";

export const Description = ({ data }: any) => {
  return (
    <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">{data?.SectionTitle}</div>
            <h2 className="h2-heading">{data?.SectionDescription}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {data?.AboutSection.map((item: any, index: any) => (
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src={showImage(item?.AboutGridImage)}
                    alt="alternative"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item?.Title}</h4>
                  <p>{item?.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
