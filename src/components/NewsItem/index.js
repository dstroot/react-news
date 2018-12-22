import React from "react";
import placeholder from "./media/logo.png";

// https://getbootstrap.com/docs/4.1/layout/media-object/
const NewsItem = ({ item }) => (
  <>
    <a className="news-link" href={item.url}>
      <div className="media">
        <img
          className="mr-3 d-none d-sm-block"
          src={item.image || placeholder}
          alt="Generic placeholder"
          width="175px"
          height="115px"
        />
        <div className="media-body">
          <p className="mt-0 text-muted">
            {item.date} / <strong>{item.category}</strong>
          </p>
          <h3 className="news-link font-weight-light">{item.headline}</h3>
        </div>
      </div>
    </a>
    <hr />
  </>
);

export default NewsItem;
