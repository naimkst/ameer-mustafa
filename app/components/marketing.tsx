import React, { useState } from "react";

export const Marketing = () => {
  const [popup, setPopup] = useState(false);
  const [tab, setTab] = useState(0);
  console.log(popup);
  return (
    <>
      <div id="features" className="tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above-heading">FEATURES</div>
              <h2 className="h2-heading">Marketing Automation</h2>
              <p className="p-heading">
                Take your business strategy to the next level and automatize
                your marketing tasks to save time for product development. Tivo
                can provide results in less than 2 weeks
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                <li className="nav-item">
                  <a
                    onClick={() => setTab(0)}
                    className={`nav-link ${tab == 0 ? "active" : ""}`}
                    id="nav-tab-1"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    <i className="fas fa-list"></i>List Builder
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setTab(1)}
                    className={`nav-link ${tab == 1 ? "active" : ""}`}
                    id="nav-tab-2"
                    data-toggle="tab"
                    href="#tab-2"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    <i className="fas fa-envelope-open-text"></i>Campaigns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setTab(2)}
                    className={`nav-link ${tab == 2 ? "active" : ""}`}
                    id="nav-tab-3"
                    data-toggle="tab"
                    href="#tab-3"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    <i className="fas fa-chart-bar"></i>Analytics
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="argoTabsContent">
                {tab == 0 && (
                  <div
                    className={`tab-pane ${tab == 0 ? "fade show active" : ""}`}
                    id="tab-1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
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
                          <h3>List Building Is Easier Than Ever</h3>
                          <p>
                            It's very easy to start using Tivo. You just need to
                            fill out and submit the{" "}
                            <a className="blue page-scroll" href="sign-up.html">
                              Sign Up Form
                            </a>{" "}
                            and you will receive access to the app and all of
                            its features in no more than 24h.
                          </p>
                          <ul className="list-unstyled li-space-lg">
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Create and embed on websites newsletter sign up
                                forms
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Manage forms and landing pages for your services
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Add and remove subscribers using the control
                                panel
                              </div>
                            </li>
                          </ul>
                          <a
                            onClick={() => setPopup(true)}
                            className="btn-solid-reg popup-with-move-anim"
                            href="#details-lightbox-1"
                          >
                            LIGHTBOX
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {tab == 1 && (
                  <div
                    className={`tab-pane ${tab == 1 ? "fade show active" : ""}`}
                    id="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="image-container">
                          <img
                            className="img-fluid"
                            src="images/features-2.png"
                            alt="alternative"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text-container">
                          <h3>Campaigns Monitoring Tools</h3>
                          <p>
                            Campaigns monitoring is a feature we've developed
                            since the beginning because it's at the core of Tivo
                            and basically to any marketing activity focused on
                            results.
                          </p>
                          <ul className="list-unstyled li-space-lg">
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Easily plan campaigns and schedule their
                                starting date
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Start campaigns and follow their evolution
                                closely
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Evaluate campaign results and optimize future
                                actions
                              </div>
                            </li>
                          </ul>
                          <a
                            onClick={() => setPopup(true)}
                            className="btn-solid-reg popup-with-move-anim"
                            href="#details-lightbox-2"
                          >
                            LIGHTBOX
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {tab == 2 && (
                  <div
                    className={`tab-pane ${tab == 2 ? "fade show active" : ""}`}
                    id="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="image-container">
                          <img
                            className="img-fluid"
                            src="images/features-3.png"
                            alt="alternative"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text-container">
                          <h3>Analytics Control Panel</h3>
                          <p>
                            Analytics control panel is important for every
                            marketing team so it's beed implemented from the
                            begging and designed to produce reports based on
                            very little input information.
                          </p>
                          <ul className="list-unstyled li-space-lg">
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                If you set it up correctly you will get acces to
                                great intel
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                Easy to integrate in your websites and landing
                                pages
                              </div>
                            </li>
                            <li className="media">
                              <i className="fas fa-square"></i>
                              <div className="media-body">
                                The generated reports are important for your
                                strategy
                              </div>
                            </li>
                          </ul>
                          <a
                            onClick={() => setPopup(true)}
                            className="btn-solid-reg popup-with-move-anim"
                            href="#details-lightbox-3"
                          >
                            LIGHTBOX
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
                    src="images/details-lightbox.png"
                    alt="alternative"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <h3>List Building</h3>
                <h5>Core service</h5>
                <p>
                  It's very easy to start using Tivo. You just need to fill out
                  and submit the Sign Up Form and you will receive access to the
                  app.
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">List building framework</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Easy database browsing</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">User administration</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Automate user signup</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Quick formatting tools</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Fast email checking</div>
                  </li>
                </ul>
                <a className="btn-solid-reg mfp-close" href="sign-up.html">
                  SIGN UP
                </a>{" "}
                <a
                  onClick={() => setPopup(false)}
                  className="btn-outline-reg mfp-close as-button"
                  href="#screenshots"
                >
                  BACK
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
