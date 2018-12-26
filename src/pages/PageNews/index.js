import React from "react";

// components
import Tabs from "../../components/Tabs";

const PageNews = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <div className="col-5">
          <h1 className="display-5 mt-0">Press Center</h1>
          <p className="text-muted lead mb-4">
            The latest news for journalists
          </p>
        </div>
        <div className="col-4">
          <address className="">
            <h6 className="mb-0">CONTACT OUR PRESS TEAM</h6>
            <a
              className="card-link"
              href="mailto:press@pacificlife.com?Subject=Press%20Inquiry"
              target="_top"
            >
              press@pacificlife.com
            </a>
            <p className="small text-muted mt-2">
              For all other inquiries please visit our{" "}
              <a className="card-link" href="/help" target="_top">
                Help Center
              </a>
              .
            </p>
          </address>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default PageNews;
