import React from "react";
import ReactMarkdown from "react-markdown";

export const Pricing = ({ data, item }: any) => {
  return (
    <div id="pricing" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">{data?.SectionSlug}</div>
            <h2 className="h2-heading">{data?.SectionTitle}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {item?.map((price: any, index: any) => (
              <div key={`price-${index}`} className="card">
                <div className="card-body">
                  <div className="card-title">{price?.PriceName}</div>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="value">{price?.Price}</span>
                  </div>
                  <div className="frequency">{price?.Trail}</div>
                  <div className="divider"></div>
                  <ReactMarkdown className="">
                    {price?.PriceDetails}
                  </ReactMarkdown>
                  <div className="button-wrapper">
                    <a
                      className="btn-solid-reg page-scroll"
                      href={price?.ButtonLink}
                    >
                      {price?.ButtonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
