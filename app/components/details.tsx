import { showImage } from "app/utils/helper";
import React from "react";
import ReactMarkdown from "react-markdown";

export const Details = ({ data }: any) => {
  return (
    <div id="details" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>{data?.Title}</h2>
              <ReactMarkdown className="listStyle">
                {data?.Description}
              </ReactMarkdown>

              <a className="btn-solid-reg page-scroll" href={data?.ButtonLink}>
                {data?.ButtonText}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img
                className="img-fluid"
                src={showImage(data?.UpgradeImage)}
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
