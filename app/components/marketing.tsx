import { showImage } from "app/utils/helper";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const Marketing = ({ data, tabs }: any) => {
  const [popup, setPopup] = useState(false);
  const [tab, setTab] = useState(0);
  console.log(popup);
  return (
    <>
      <div id="features" className="tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above-heading">{data?.SectionSlug}</div>
              <h2 className="h2-heading">{data?.SectionTitle}</h2>
              <p className="p-heading">{data?.SectionDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                {tabs.map((item: any, index: any) => (
                  <li key={`tabs-${index}`} className="nav-item">
                    <a
                      onClick={() => setTab(index)}
                      className={`nav-link ${tab == index ? "active" : ""}`}
                      id={`nav-tab-${index}`}
                      data-toggle="tab"
                      role="tab"
                      aria-controls={`tab-${index}`}
                      aria-selected="true"
                    >
                      <i className="fas fa-list"></i>
                      {item?.Title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="argoTabsContent">
                {tabs.map(
                  (item: any, index: any) =>
                    tab == index && (
                      <>
                        <div
                          className={`tab-pane ${
                            tab == index ? "fade show active" : ""
                          }`}
                          id={`tab-${index}`}
                          role="tabpanel"
                          aria-labelledby={`tab-${index}`}
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="image-container">
                                <img
                                  className="img-fluid"
                                  src="images/features-1.png"
                                  alt="alternative"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="text-container">
                                <h3>{item?.TabTitle}</h3>
                                <ReactMarkdown className="listStyle">
                                  {item?.TabDescription}
                                </ReactMarkdown>
                                <a
                                  onClick={() => setPopup(true)}
                                  className="btn-solid-reg popup-with-move-anim"
                                  href={item?.TabButtonLink}
                                >
                                  {item?.TabButtonText}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {popup == true && (
                          <div
                            id="details-lightbox-1"
                            className="lightbox-basic zoom-anim-dialog "
                          >
                            <div className="container">
                              <div className="row">
                                <button
                                  onClick={() => setPopup(false)}
                                  title="Close (Esc)"
                                  type="button"
                                  className="mfp-close x-button"
                                >
                                  ×
                                </button>
                                <div className="col-lg-8">
                                  <div className="image-container">
                                    <img
                                      className="img-fluid"
                                      src={showImage(item?.PopupImage)}
                                      alt="alternative"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <h3>{item?.TabTitle}</h3>
                                  <h5>{item?.CoreService}</h5>
                                  <ReactMarkdown className="listStyle">
                                    {item?.TabDescription}
                                  </ReactMarkdown>
                                  <a
                                    className="btn-solid-reg mfp-close"
                                    href={item?.SignUpLink}
                                  >
                                    {item?.SignUpText}
                                  </a>{" "}
                                  <a
                                    onClick={() => setPopup(false)}
                                    className="btn-outline-reg mfp-close as-button"
                                    href="#screenshots"
                                  >
                                    {item?.BackButtonText}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
