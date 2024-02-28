import { showImage } from "app/utils/helper";
import React from "react";

export const Video = ({ data }: any) => {
  return (
    <div id="video" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <a
                  className="popup-youtube"
                  href={data?.VideoLink}
                  data-effect="fadeIn"
                >
                  <img
                    className="img-fluid"
                    src={showImage(data?.Thumbnail)}
                    alt="alternative"
                  />
                  <span className="video-play-button">
                    <span></span>
                  </span>
                </a>
              </div>
            </div>

            <div className="p-heading">{data?.VideoDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
