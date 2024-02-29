import React from "react";
import ReactMarkdown from "react-markdown";

export const Newsletter = ({ data }: any) => {
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <div className="above-heading">{data?.Slug}</div>
              <h2>{data?.Title}</h2>

              <form
                id="newsletterForm"
                data-toggle="validator"
                data-focus="false"
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="nemail"
                    required
                  />
                  <label className="label-control" htmlFor="nemail">
                    {data?.InputName}
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="nterms"
                    value="Agreed-to-Terms"
                    required
                  />
                  <ReactMarkdown className="">
                    {data?.PrivacryText}
                  </ReactMarkdown>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    {data?.SubscriptionButton}
                  </button>
                </div>
                <div className="form-message">
                  <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="icon-container">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-pinterest-p fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-linkedin-in fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
