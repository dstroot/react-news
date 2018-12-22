import React from "react";

// components
// import NewsList from "../components/NewsList";
import data from "../../components/NewsList/news.json";
import NewsItem from "../../components/NewsItem";

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

const PageHome = () => {
  return (
    <div className="container">
      <div className="row">
        {/*}<div className="d-inline">
          <img
            className="mt-2"
            src="/media/logo.png"
            height="90px"
            alt="logo"
          />
        </div>*/}
        <div className="col">
          <h1 className="display-5 mt-3">Press Center</h1>
          <p className="text-muted lead mb-4">
            The latest news for journalists
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Tabs />
          {/*<h1 className="display-6 mb-4">All Stories</h1>
          <hr />*/}
          {data.map((item, index) => (
            <NewsItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHome;
