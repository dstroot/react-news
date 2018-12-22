import React from "react";
import placeholder from "./media/logo.png";

// https://getbootstrap.com/docs/4.1/layout/media-object/
const NewsItem = ({ item }) => (
  <>
    <a className="news-link" href={item.url}>
      <div className="row">
        <div className="col">
          <img
            className="mr-3 d-none d-sm-block"
            src={item.image || placeholder}
            alt="Generic placeholder"
          />
        </div>
        <div className="col">
          <p className="mt-0 text-muted">
            {item.date} / <strong>{item.category}</strong>
          </p>
          <h3 className="news-link font-weight-light">{item.headline}</h3>
          <p>
            NEWPORT BEACH, CA – The Pacific Life Foundation announced today a
            $250,000 donation to the American Red Cross in support of relief
            efforts for those impacted by the California wildfires. The
            Foundation also announced plans to match employee donations.
          </p>
          <a className="btn btn-secondary" href="/news/article">
            Read Article
          </a>
        </div>
      </div>
    </a>
    <hr />
  </>
);

export default NewsItem;

// width="400px"
// height="400px"
