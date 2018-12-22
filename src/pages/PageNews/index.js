import React from "react";

// components
// import NewsList from "../components/NewsList";
import data from "../../components/NewsList/news.json";
import NewsItem from "../../components/NewsItem";
import LeadNewsItem from "../../components/LeadNewsItem";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
let firstItem = data.shift();

const Tabs = () => (
  <ul className="nav nav-tabs nav-fill mb-4">
    <li className="nav-item">
      <a className="nav-link active" href="/">
        <h5 className="">News Stories</h5>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">
        Our Brand
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">
        Contact Us
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">
        About Us
      </a>
    </li>
  </ul>
);

const PageNews = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <div className="col-5">
          <h1 className="display-5 mt-3">Press Center</h1>
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
            <p className="small text-muted">
              For all other inquiries please visit our{" "}
              <a className="card-link" href="/help" target="_top">
                Help Center
              </a>
              .
            </p>
          </address>
          <p className="small text-muted">
            Images on this page may be used for publication with credit:
            "Source: Pacific Life."
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Tabs />
          <LeadNewsItem item={firstItem} />
          <h1 className="display-6 mb-2 mt-4">All Stories</h1>
          <hr />
          {data.map((item, index) => (
            <NewsItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageNews;
